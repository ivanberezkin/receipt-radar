import {
  addNewReceipt,
  fetchReceipts,
  removeReceiptFromApi,
} from './apiService';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

const API_URL = 'http://localhost:8080/api/receipts';

describe('apiService Error handling', () => {
  describe('addNewReceipts tests', () => {
    it('throw error when server returns status 500', async () => {
      server.use(
        http.post(API_URL, () => {
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

  describe('fetchReceipts tests', () => {
    it('throw error on status 404 (not found)', async () => {
      server.use(
        http.get(API_URL, () => {
          return new HttpResponse(null, { status: 404 });
        })
      );
      await expect(fetchReceipts()).rejects.toThrow();
    });
  });

  describe('removeReceiptFromApi test', () => {
    it('throw error on status 404 (not found)', async () => {
      server.use(
        http.delete(`${API_URL}/:id`, () => {
          return new HttpResponse(null, { status: 404 });
        })
      );
      await expect(removeReceiptFromApi(999)).rejects.toThrow();
    });
  });
});
