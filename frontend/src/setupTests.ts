import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { server } from './mocks/server'; // Justera stigen till din server-fil

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' }); // 'error' gör att testet varnar om det försöker prata med riktiga backend
  vi.spyOn(console, 'error').mockImplementation((...args) => {
    // Check if ANY of the arguments passed to console.error contain our keywords
    const isAxiosError = args.some((arg) => {
      const message = arg?.toString() || '';
      return (
        message.includes('AxiosError') ||
        message.includes('500') ||
        (arg?.response && arg?.response?.status === 500) // Specifically check the object properties
      );
    });

    if (isAxiosError) {
      return; // Shhh! Silence the expected error
    }

    // If it's a real coding error, print it so you can fix it
    console.warn('REAL ERROR:', ...args);
  });
});
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  vi.restoreAllMocks();
});
