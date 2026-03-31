import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server'; // Justera stigen till din server-fil

beforeAll(() => server.listen({ onUnhandledRequest: 'error' })); // 'error' gör att testet varnar om det försöker prata med riktiga backend
afterEach(() => server.resetHandlers());
afterAll(() => server.close());