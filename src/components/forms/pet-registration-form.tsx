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

const petRegistrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  species: z.string().min(2, "Species must be at least 2 characters"),
  breed: z.string().min(2, "Breed must be at least 2 characters"),
  age: z.number().min(0, "Age must be a positive number"),
  weight: z.number().min(0, "Weight must be a positive number"),
  dietaryNeeds: z.string().optional(),
  medicalInfo: z.string().optional(),
  vaccinationStatus: z.enum(["UP_TO_DATE", "NEEDS_UPDATE", "NOT_VACCINATED"]),
  emergencyContact: z.object({
    name: z
      .string()
      .min(2, "Emergency contact name must be at least 2 characters"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    relationship: z
      .string()
      .min(2, "Relationship must be at least 2 characters"),
  }),
});

type PetRegistrationFormValues = z.infer<typeof petRegistrationSchema>;

export function PetRegistrationForm() {
  const form = useForm<PetRegistrationFormValues>({
    resolver: zodResolver(petRegistrationSchema),
    defaultValues: {
      name: "",
      species: "",
      breed: "",
      age: 0,
      weight: 0,
      dietaryNeeds: "",
      medicalInfo: "",
      vaccinationStatus: "NOT_VACCINATED",
      emergencyContact: {
        name: "",
        phone: "",
        relationship: "",
      },
    },
  });

  async function onSubmit(data: PetRegistrationFormValues) {
    try {
      // TODO: Implement API call to register pet
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter pet's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="species"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Species</FormLabel>
              <FormControl>
                <Input placeholder="Enter species" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Breed</FormLabel>
              <FormControl>
                <Input placeholder="Enter breed" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter age"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (kg)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter weight"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="vaccinationStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vaccination Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vaccination status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="UP_TO_DATE">Up to Date</SelectItem>
                  <SelectItem value="NEEDS_UPDATE">Needs Update</SelectItem>
                  <SelectItem value="NOT_VACCINATED">Not Vaccinated</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dietaryNeeds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dietary Needs</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any dietary requirements or restrictions"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="medicalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Information</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter any medical conditions or medications"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Emergency Contact</h3>

          <FormField
            control={form.control}
            name="emergencyContact.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter emergency contact name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emergencyContact.phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emergencyContact.relationship"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relationship</FormLabel>
                <FormControl>
                  <Input placeholder="Enter relationship to pet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Register Pet</Button>
      </form>
    </Form>
  );
}
