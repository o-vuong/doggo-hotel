import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const paymentSchema = z.object({
  amount: z.number().min(0, "Amount must be greater than 0"),
  paymentMethodId: z.string().min(1, "Payment method is required"),
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

interface PaymentFormProps {
  clientSecret: string;
  reservationId: string;
}

export function PaymentForm({ clientSecret, reservationId }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const form = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: 0,
      paymentMethodId: "",
    },
  });

  async function onSubmit(data: PaymentFormValues) {
    if (!stripe || !elements) {
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      });

      if (error) {
        console.error(error);
        // TODO: Handle payment error
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Payment Details</h3>
          <PaymentElement />
        </div>

        <Button type="submit" disabled={!stripe || !elements}>
          Pay Now
        </Button>
      </form>
    </Form>
  );
}
