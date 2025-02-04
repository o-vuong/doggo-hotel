import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const veterinaryReleaseSchema = z.object({
  petName: z.string().min(1, 'Pet name is required'),
  ownerName: z.string().min(1, 'Owner name is required'),
  veterinarianName: z.string().min(1, 'Veterinarian name is required'),
  veterinarianPhone: z.string().min(1, 'Veterinarian phone is required'),
  veterinarianAddress: z.string().min(1, 'Veterinarian address is required'),
  maxTreatmentCost: z.number().min(0, 'Maximum treatment cost must be a positive number'),
  emergencyContact: z.string().min(1, 'Emergency contact is required'),
  emergencyPhone: z.string().min(1, 'Emergency contact phone is required'),
  authorization: z.boolean().refine((val) => val === true, {
    message: 'You must authorize emergency veterinary care',
  }),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type VeterinaryReleaseFormData = z.infer<typeof veterinaryReleaseSchema>;

const VeterinaryReleaseForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VeterinaryReleaseFormData>({
    resolver: zodResolver(veterinaryReleaseSchema),
  });

  const submitRelease = trpc.veterinaryRelease.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: VeterinaryReleaseFormData) => {
    submitRelease.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Veterinary Release Form</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Name</label>
            <input
              type="text"
              {...register('petName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.petName && (
              <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Owner Name</label>
            <input
              type="text"
              {...register('ownerName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.ownerName && (
              <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Veterinarian Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Name</label>
            <input
              type="text"
              {...register('veterinarianName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianName && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Phone</label>
            <input
              type="tel"
              {...register('veterinarianPhone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianPhone && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianPhone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Address</label>
            <textarea
              {...register('veterinarianAddress')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianAddress && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianAddress.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Treatment Cost ($)
          </label>
          <input
            type="number"
            {...register('maxTreatmentCost', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.maxTreatmentCost && (
            <p className="mt-1 text-sm text-red-600">{errors.maxTreatmentCost.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                {...register('emergencyContact')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.emergencyContact && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                {...register('emergencyPhone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.emergencyPhone && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('authorization')}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I authorize emergency veterinary treatment up to the specified maximum cost
            </label>
          </div>
          {errors.authorization && (
            <p className="mt-1 text-sm text-red-600">{errors.authorization.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Digital Signature</label>
          <input
            type="text"
            {...register('signature')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.signature && (
            <p className="mt-1 text-sm text-red-600">{errors.signature.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Veterinary Release Form
        </button>
      </div>
    </form>
  );
};

export default VeterinaryReleaseForm;
