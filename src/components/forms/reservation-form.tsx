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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reservationSchema = z.object({
  petId: z.string().min(1, "Please select a pet"),
  kennelId: z.string().min(1, "Please select a kennel"),
  startDate: z.date(),
  endDate: z.date(),
  addOnServices: z.array(z.string()).optional(),
  specialInstructions: z.string().optional(),
  pickupTime: z.string().optional(),
  dropoffTime: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      petId: "",
      kennelId: "",
      startDate: new Date(),
      endDate: new Date(),
      addOnServices: [],
      specialInstructions: "",
      pickupTime: "",
      dropoffTime: "",
    },
  });

  async function onSubmit(data: ReservationFormValues) {
    try {
      // TODO: Implement API call to create reservation
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="petId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Pet</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a pet" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* TODO: Populate with user's pets */}
                  <SelectItem value="1">Pet 1</SelectItem>
                  <SelectItem value="2">Pet 2</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="kennelId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Kennel</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a kennel" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* TODO: Populate with available kennels */}
                  <SelectItem value="1">Kennel A</SelectItem>
                  <SelectItem value="2">Kennel B</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check-in Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    minDate={new Date()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check-out Date</FormLabel>
                <FormControl>
                  <DatePicker
                    selected={field.value}
                    onChange={field.onChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    minDate={form.getValues("startDate")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="pickupTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dropoffTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Drop-off Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="addOnServices"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Services</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  {/* TODO: Implement multi-select for add-on services */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="grooming"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="grooming">Grooming</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="training"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="training">Training</label>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any special instructions or requirements"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Reservation</Button>
      </form>
    </Form>
  );
}
