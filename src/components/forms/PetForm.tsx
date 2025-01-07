import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";

const petSchema = z.object({
  name: z.string().min(1, "Name is required"),
  breed: z.string().min(1, "Breed is required"),
  age: z.number().min(0, "Age must be a positive number"),
  medicalInfo: z.string().optional(),
  dietaryNeeds: z.string().optional(),
});

type PetFormData = z.infer<typeof petSchema>;

interface PetFormProps {
  initialData?: PetFormData;
  petId?: string;
  onSuccess?: () => void;
}

export const PetForm: React.FC<PetFormProps> = ({
  initialData,
  petId,
  onSuccess,
}) => {
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PetFormData>({
    resolver: zodResolver(petSchema),
    defaultValues: initialData,
  });

  const utils = api.useContext();
  const createPet = api.pet.create.useMutation({
    onSuccess: () => {
      reset();
      utils.pet.getByOwnerId.invalidate();
      onSuccess?.();
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const updatePet = api.pet.update.useMutation({
    onSuccess: () => {
      utils.pet.getByOwnerId.invalidate();
      onSuccess?.();
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = async (data: PetFormData) => {
    try {
      if (petId) {
        await updatePet.mutateAsync({ id: petId, data });
      } else {
        await createPet.mutateAsync(data);
      }
    } catch (err) {
      // Error is handled by the mutation callbacks
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Pet Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
          id="breed"
          {...register("breed")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.breed && (
          <p className="mt-1 text-sm text-red-600">{errors.breed.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="medicalInfo"
          className="block text-sm font-medium text-gray-700"
        >
          Medical Information
        </label>
        <textarea
          id="medicalInfo"
          {...register("medicalInfo")}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="dietaryNeeds"
          className="block text-sm font-medium text-gray-700"
        >
          Dietary Needs
        </label>
        <textarea
          id="dietaryNeeds"
          {...register("dietaryNeeds")}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Saving..." : petId ? "Update Pet" : "Add Pet"}
        </button>
      </div>
    </form>
  );
};
