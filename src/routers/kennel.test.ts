/**
 * @jest-environment node
 */
/// <reference types="jest" />

import { kennelRouter } from './kennel';

describe('kennelRouter', () => {
  it('should have createKennel procedure', () => {
    expect(kennelRouter.createKennel).toBeDefined();
  });

  it('should have getKennels procedure', () => {
    expect(kennelRouter.getKennels).toBeDefined();
  });

  it('should have updateKennel procedure', () => {
    expect(kennelRouter.updateKennel).toBeDefined();
  });

  it('should have deleteKennel procedure', () => {
    expect(kennelRouter.deleteKennel).toBeDefined();
  });
}); 