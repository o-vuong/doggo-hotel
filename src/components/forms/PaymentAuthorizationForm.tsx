import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const paymentAuthSchema = z.object({
  cardholderName: z.string().min(1, 'Cardholder name is required'),
  billingAddress: z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zipCode: z.string().min(5, 'Valid ZIP code is required'),
  }),
  paymentTerms: z.object({
    recurringCharges: z.boolean(),
    additionalServices: z.boolean(),
    cancellationFees: z.boolean(),
    refundPolicy: z.boolean(),
  }).refine((data) => Object.values(data).every(Boolean), {
    message: 'All payment terms must be acknowledged',
  }),
  maxAuthorizedAmount: z.number().min(0, 'Maximum authorized amount must be a positive number'),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type PaymentAuthFormData = z.infer<typeof paymentAuthSchema>;

const PaymentAuthorizationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentAuthFormData>({
    resolver: zodResolver(paymentAuthSchema),
  });

  const submitAuth = trpc.paymentAuth.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: PaymentAuthFormData) => {
    submitAuth.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Payment Authorization</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input
            type="text"
            {...register('cardholderName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.cardholderName && (
            <p className="mt-1 text-sm text-red-600">{errors.cardholderName.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                {...register('billingAddress.street')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.billingAddress?.street && (
                <p className="mt-1 text-sm text-red-600">{errors.billingAddress.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  {...register('billingAddress.city')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  {...register('billingAddress.state')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.state.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  {...register('billingAddress.zipCode')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.zipCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.zipCode.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Authorized Amount ($)
          </label>
          <input
            type="number"
            {...register('maxAuthorizedAmount', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.maxAuthorizedAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.maxAuthorizedAmount.message}</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-medium">Payment Terms</h3>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.recurringCharges')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I authorize recurring charges for extended stays or additional services.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.additionalServices')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand additional services will be charged separately.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.cancellationFees')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I acknowledge and accept the cancellation fee policy.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.refundPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand and agree to the refund policy.
              </label>
            </div>
          </div>

          {errors.paymentTerms && (
            <p className="mt-1 text-sm text-red-600">{errors.paymentTerms.message}</p>
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
          Submit Payment Authorization
        </button>
      </div>
    </form>
  );
};

export default PaymentAuthorizationForm;
