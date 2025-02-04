import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const ownerAgreementSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  petName: z.string().min(1, 'Pet name is required'),
  policies: z.object({
    boardingPolicies: z.boolean(),
    cancellationPolicy: z.boolean(),
    healthRequirements: z.boolean(),
    behaviorPolicy: z.boolean(),
    personalItems: z.boolean(),
    photoRelease: z.boolean(),
  }).refine((data) => Object.values(data).every(Boolean), {
    message: 'All policies must be acknowledged',
  }),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type OwnerAgreementFormData = z.infer<typeof ownerAgreementSchema>;

const OwnerAgreementForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<OwnerAgreementFormData>({
    resolver: zodResolver(ownerAgreementSchema),
  });

  const submitAgreement = trpc.ownerAgreement.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: OwnerAgreementFormData) => {
    submitAgreement.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Owner Agreement</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-medium">Facility Policies</h3>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.boardingPolicies')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I have read and agree to the boarding policies, including feeding schedules, exercise routines, and facility rules.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.cancellationPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand and agree to the cancellation policy and associated fees.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.healthRequirements')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I confirm that my pet meets all health requirements and vaccinations are up to date.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.behaviorPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand the behavior policy and accept responsibility for any incidents.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.personalItems')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand the policy regarding personal items and that the facility is not responsible for lost items.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.photoRelease')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I grant permission for the facility to take and use photos of my pet for social media and marketing purposes.
              </label>
            </div>
          </div>

          {errors.policies && (
            <p className="mt-1 text-sm text-red-600">{errors.policies.message}</p>
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
          Submit Agreement
        </button>
      </div>
    </form>
  );
};

export default OwnerAgreementForm;
