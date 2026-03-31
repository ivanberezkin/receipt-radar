import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ReceiptForm } from '../components/ReceiptForm';
import { addNewReceipt } from '../api/apiService';

vi.mock('../api/apiService', () => ({
  addNewReceipt: vi.fn().mockResolvedValue({ id: 123 }),
}));

describe('useReceiptForm Integration Tests', () => {
  it('should call addNewReceipt and trigger onSuccess', async () => {
    const onSuccessMock = vi.fn();
    const user = userEvent.setup();

    render(<ReceiptForm onReceiptAdded={onSuccessMock} />);

    const vendorInput = screen.getByPlaceholderText(/store/i);
    const amountInput = screen.getByPlaceholderText(/amount/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    await user.type(vendorInput, 'Willys');
    await user.type(amountInput, '550');
    await user.click(submitButton);

    expect(vendorInput).toHaveValue('');
    expect(amountInput).toHaveValue('');
    expect(addNewReceipt).toHaveBeenCalledWith(
      expect.objectContaining({
        vendor: 'Willys',
        amountPaid: 550,
      })
    );

    // Wait for onSuccessMock to be called after addNewReceipt resolves and state is reset
    await waitFor(() => {
      expect(onSuccessMock).toHaveBeenCalledTimes(1);
    });
  });
});
