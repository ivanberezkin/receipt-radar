import {http, HttpResponse} from 'msw'
import { Receipt } from '../types/receipt';

const API_URL = 'http://localhost:8080/api/receipts'

export const handlers = [
    
    http.get(API_URL, () => {
        return HttpResponse.json([
            { id: 1, vendor: 'Ica', category: 'Groceries', amountPaid: 1500, date: '2026-03-20' },
            { id: 2, vendor: 'Stadium', category: 'Sport', amountPaid: 2000, date: '2026-02-20' }
        ]);
    }),

    http.delete(`${API_URL}/:id`, ({params}) => {
        console.log(`Mock delete for id: ${params.id}`);
        return new HttpResponse(null, { status : 204});
    }),

    http.post(API_URL, async ({request}) => {
        const newTestReceipt = await request.json() as Omit<Receipt, 'id'>;
        console.log('MSW received new test receipt', newTestReceipt);

        return HttpResponse.json(
            {
                id: Math.floor(Math.random() * 1000),
                ...newTestReceipt
            },
            {status : 201}
        );
    }),
];