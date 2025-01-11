/**
 * Kennel Form Component
 * 
 * A reusable form component for creating and editing kennels.
 * Includes validation and handles both creation and update operations.
 */

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { type RouterOutputs } from "~/utils/api";

const kennelFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"], {
    required_error: "Please select a kennel size",
  }),
  dailyRate: z.string().transform((val) => parseFloat(val)),
  description: z.string().optional(),
  features: z.string().transform((val) => val.split(",").map((f) => f.trim())),
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"], {
    required_error: "Please select a status",
  }),
  location: z.string().optional(),
  notes: z.string().optional(),
  maxWeight: z.string().transform((val) => parseFloat(val)),
});

type KennelFormData = z.infer<typeof kennelFormSchema>;

interface KennelFormProps {
  initialData?: RouterOutputs["kennel"]["getById"];
  onSubmit: (data: KennelFormData) => void;
  isSubmitting?: boolean;
}

export const KennelForm: FC<KennelFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<KennelFormData>({
    resolver: zodResolver(kennelFormSchema),
    defaultValues: {
      name: initialData?.name ?? "",
      size: initialData?.size ?? "MEDIUM",
      dailyRate: initialData?.dailyRate?.toString() ?? "",
      description: initialData?.description ?? "",
      features: initialData?.features?.join(", ") ?? "",
      status: initialData?.status ?? "AVAILABLE",
      location: initialData?.location ?? "",
      notes: initialData?.notes ?? "",
      maxWeight: initialData?.maxWeight?.toString() ?? "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Information</h3>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., K9 Suite 1" {...field} />
                </FormControl>
                <FormDescription>
                  A unique identifier for this kennel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SMALL">Small</SelectItem>
                      <SelectItem value="MEDIUM">Medium</SelectItem>
                      <SelectItem value="LARGE">Large</SelectItem>
                      <SelectItem value="EXTRA_LARGE">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The size category of the kennel
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AVAILABLE">Available</SelectItem>
                      <SelectItem value="OCCUPIED">Occupied</SelectItem>
                      <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                      <SelectItem value="RESERVED">Reserved</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Current availability status
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="dailyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Rate ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormDescription>
                    Daily rate for this kennel
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Weight (lbs)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormDescription>
                    Maximum weight limit for pets
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Additional Information</h3>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the kennel's amenities and features..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Detailed description of the kennel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Features</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Window View, Heated Floor, Private Yard"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Comma-separated list of features
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Building A, First Floor"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Physical location within the facility
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any additional notes about the kennel..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Internal notes and special instructions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : initialData
            ? "Update Kennel"
            : "Create Kennel"}
        </Button>
      </form>
    </Form>
  );
};
