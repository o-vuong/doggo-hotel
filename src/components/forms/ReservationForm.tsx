import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reservationSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  petId: z.string().min(1, "Please select a pet"),
  kennelId: z.string().min(1, "Please select a kennel"),
  addOnServiceIds: z.array(z.string()).optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  onSuccess?: () => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ onSuccess }) => {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const utils = api.useContext();
  
  // Fetch user's pets
  const { data: pets } = api.pet.getByOwnerId.useQuery();
  
  // Fetch available kennels
  const { data: kennels } = api.kennel.getAvailable.useQuery(
    {
      startDate: watch("startDate"),
      endDate: watch("endDate"),
    },
    {
      enabled: Boolean(watch("startDate") && watch("endDate")),
    }
  );

  // Fetch add-on services
  const { data: addOnServices } = api.addOnService.getAll.useQuery();

  const createReservation = api.reservation.create.useMutation({
    onSuccess: () => {
      reset();
      utils.reservation.getAll.invalidate();
      onSuccess?.();
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    try {
      await createReservation.mutateAsync(data);
    } catch (err) {
      // Error is handled by the mutation callbacks
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                minDate={new Date()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                minDate={watch("startDate") || new Date()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Pet
        </label>
        <select
          {...register("petId")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a pet</option>
          {pets?.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name} ({pet.breed})
            </option>
          ))}
        </select>
        {errors.petId && (
          <p className="mt-1 text-sm text-red-600">{errors.petId.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Kennel
        </label>
        <select
          {...register("kennelId")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a kennel</option>
          {kennels?.map((kennel) => (
            <option key={kennel.id} value={kennel.id}>
              {kennel.name} - {kennel.size} (${kennel.price}/night)
            </option>
          ))}
        </select>
        {errors.kennelId && (
          <p className="mt-1 text-sm text-red-600">{errors.kennelId.message}</p>
        )}
      </div>

      {addOnServices && addOnServices.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Services
          </label>
          <div className="mt-2 space-y-2">
            {addOnServices.map((service) => (
              <div key={service.id} className="flex items-center">
                <input
                  type="checkbox"
                  {...register("addOnServiceIds")}
                  value={service.id}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  {service.name} - ${service.price}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Creating..." : "Create Reservation"}
        </button>
      </div>
    </form>
  );
};
