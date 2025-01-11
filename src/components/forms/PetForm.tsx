/**
 * Pet Form Component
 * 
 * A reusable form component for creating and editing pets.
 * Handles validation, submission, and error display.
 * 
 * @module components/forms/PetForm
 */

import { type Pet } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";

/**
 * Schema for pet form validation
 */
const petFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  breed: z.string().min(2, "Breed must be at least 2 characters"),
  dateOfBirth: z.string().transform((str) => new Date(str)),
  weight: z.string().transform((str) => parseFloat(str)),
  medicalConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  medications: z.string().optional(),
  behavioralNotes: z.string().optional(),
  emergencyContactName: z.string().min(2, "Emergency contact name required"),
  emergencyContactPhone: z.string().min(10, "Valid phone number required"),
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
});

type PetFormData = z.infer<typeof petFormSchema>;

interface PetFormProps {
  /**
   * Initial pet data for editing, undefined for new pets
   */
  initialData?: Pet;
  /**
   * Callback function called with form data on successful submission
   */
  onSubmit: (data: PetFormData) => void;
  /**
   * Whether the form is currently submitting
   */
  isSubmitting?: boolean;
}

export const PetForm: React.FC<PetFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetFormData>({
    resolver: zodResolver(petFormSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          dateOfBirth: initialData.dateOfBirth.toISOString().split("T")[0],
          weight: initialData.weight.toString(),
        }
      : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Pet Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700"
            >
              Breed
            </label>
            <input
              type="text"
              {...register("breed")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.breed && (
              <p className="mt-1 text-sm text-red-600">{errors.breed.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-600">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight (lbs)
            </label>
            <input
              type="number"
              step="0.1"
              {...register("weight")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.weight && (
              <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Medical Information
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="medicalConditions"
              className="block text-sm font-medium text-gray-700"
            >
              Medical Conditions
            </label>
            <textarea
              {...register("medicalConditions")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="medications"
              className="block text-sm font-medium text-gray-700"
            >
              Current Medications
            </label>
            <textarea
              {...register("medications")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="dietaryRestrictions"
              className="block text-sm font-medium text-gray-700"
            >
              Dietary Restrictions
            </label>
            <textarea
              {...register("dietaryRestrictions")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="emergencyContactName"
              className="block text-sm font-medium text-gray-700"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              {...register("emergencyContactName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.emergencyContactName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.emergencyContactName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="emergencyContactPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              {...register("emergencyContactPhone")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.emergencyContactPhone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.emergencyContactPhone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="vetName"
              className="block text-sm font-medium text-gray-700"
            >
              Veterinarian Name
            </label>
            <input
              type="text"
              {...register("vetName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="vetPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Veterinarian Phone
            </label>
            <input
              type="tel"
              {...register("vetPhone")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Behavioral Notes */}
      <div>
        <label
          htmlFor="behavioralNotes"
          className="block text-sm font-medium text-gray-700"
        >
          Behavioral Notes
        </label>
        <textarea
          {...register("behavioralNotes")}
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Any special behaviors, preferences, or concerns..."
        />
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center"
        >
          {isSubmitting
            ? "Saving..."
            : initialData
            ? "Update Pet"
            : "Create Pet"}
        </Button>
      </div>
    </form>
  );
};
