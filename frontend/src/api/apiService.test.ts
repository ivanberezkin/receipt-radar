import { addNewReceipt } from './apiService';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

describe('apiService Error handling', () => {
  describe('addNewReceipts tests', () => {
    it('throw error when server returns status 500', async () => {
      server.use(
        http.post('*/api/receipts', () => {
          return new HttpResponse(null, { status: 500 });
        })
      );

      await expect(
        addNewReceipt({
          vendor: 'Test',
          amountPaid: 500,
          date: '2023-02-02',
          category: 'test',
        })
      ).rejects.toThrow();
    });
  });
});
