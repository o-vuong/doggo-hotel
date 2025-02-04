import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const liabilityWaiverSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  petName: z.string().min(1, 'Pet name is required'),
  acknowledgement: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the waiver terms',
  }),
  emergencyContact: z.string().min(1, 'Emergency contact is required'),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type LiabilityWaiverFormData = z.infer<typeof liabilityWaiverSchema>;

const LiabilityWaiverForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LiabilityWaiverFormData>({
    resolver: zodResolver(liabilityWaiverSchema),
  });

  const submitWaiver = trpc.waiver.create.useMutation({
    onSuccess: () => {
      // Handle success (e.g., show success message, redirect)
    },
  });

  const onSubmit = (data: LiabilityWaiverFormData) => {
    submitWaiver.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Liability Waiver</h2>

      <div className="space-y-4">
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

        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
          <input
            type="text"
            {...register('emergencyContact')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.emergencyContact && (
            <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Waiver Terms</h3>
          <p className="text-sm text-gray-600 mb-4">
            By signing this waiver, I acknowledge and agree that:
            1. I understand the inherent risks associated with dog boarding services.
            2. I release the facility from liability for any injury or illness to my pet.
            3. I authorize emergency medical treatment if necessary.
            4. I agree to pay all costs associated with any necessary medical treatment.
          </p>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('acknowledgement')}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I have read and agree to the terms above
            </label>
          </div>
          {errors.acknowledgement && (
            <p className="mt-1 text-sm text-red-600">{errors.acknowledgement.message}</p>
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
          Submit Waiver
        </button>
      </div>
    </form>
  );
};

export default LiabilityWaiverForm;
