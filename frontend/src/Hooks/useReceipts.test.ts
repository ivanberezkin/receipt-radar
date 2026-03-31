import { renderHook, waitFor } from '@testing-library/react';
import {describe, it , expect } from 'vitest';
import { useReceipts } from './useReceipts';

describe('useReceipts Integration Tests', () => {

    it('Fetch all receipts from the mock on start', async () => {
        const {result} = renderHook(() => useReceipts());
        expect(result.current.loading).toBe(true);
        
        await waitFor(() => expect(result.current.loading).toBe(false), {timeout : 3000});

        expect(result.current.receipts).toHaveLength(2);
        expect(result.current.receipts[1].vendor).toMatch(/stadium/i);

    });

    it('Delete Receipt from the mock', async () => {
        const {result} = renderHook(() => useReceipts());
        expect(result.current.loading).toBe(true);
        
        await waitFor(() => expect(result.current.loading).toBe(false), {timeout : 3000});
        expect(result.current.receipts).toHaveLength(2);

        await result.current.removeReceiptById(2);

        await waitFor(() => {
                expect(result.current.receipts).toHaveLength(1);
        });
        expect(result.current.receipts[0].vendor).toMatch(/ica/i);
    });

});