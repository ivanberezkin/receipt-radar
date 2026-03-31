import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ReceiptForm } from '../components/ReceiptForm';
import * as apiService from '../api/apiService';

describe('useReceiptForm Integration Tests', () => {
  it('should call addNewReceipt and trigger onSuccess', async () => {
    vi.spyOn(apiService, 'addNewReceipt').mockResolvedValue({
      vendor: 'Willys',
      amountPaid: 550,
      date: expect.any(String),
      category: 'Groceries',
    });

    const onSuccessMock = vi.fn();
    const user = userEvent.setup({ delay: null });

    render(<ReceiptForm onReceiptAdded={onSuccessMock} />);

    const vendorInput = screen.getByPlaceholderText(/store/i);
    const amountInput = screen.getByPlaceholderText(/amount/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(vendorInput, { target: { value: 'Willys' } });
    fireEvent.change(amountInput, { target: { value: '550' } });
    await user.click(submitButton);

    expect(onSuccessMock).toHaveBeenCalled();
    expect(amountInput).toHaveValue(null);
    expect(vendorInput).toHaveValue('');

    expect(apiService.addNewReceipt).toHaveBeenCalledWith(
      expect.objectContaining({ vendor: 'Willys', amountPaid: 550 })
    );
  });
});
