/**
 * @jest-environment node
 */
/// <reference types="jest" />
import { paymentRouter } from './payment';

describe('paymentRouter', () => {
  it('should have createPayment procedure', () => {
    expect(paymentRouter.createPayment).toBeDefined();
  });

  it('should have listPayments procedure', () => {
    expect(paymentRouter.listPayments).toBeDefined();
  });
}); 