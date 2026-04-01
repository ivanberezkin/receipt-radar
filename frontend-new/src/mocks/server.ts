import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Här skapar vi mock-servern och laddar in dina regler (GET, POST, DELETE)
export const server = setupServer(...handlers);