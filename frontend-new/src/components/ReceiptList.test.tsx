import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ReceiptList } from "./ReceiptList";
import type { Receipt } from "../types/receipt";

describe("ReceiptList Component", () => {
  const mockOnRemove = vi.fn<(id: number) => void>();
  const mockReceipts: Receipt[] = [
    {
      id: 1,
      vendor: "Ica",
      category: "Groceries",
      amountPaid: 1500,
      date: "2026-03-20",
    },
    {
      id: 2,
      vendor: "Stadium",
      category: "Sport",
      amountPaid: 2000,
      date: "2026-02-20",
    },
  ];

  it("Should render right number of rows in table", () => {
    render(<ReceiptList receipts={mockReceipts} onRemove={mockOnRemove} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(3);
    expect(screen.getByText("Ica")).toBeInTheDocument();
    expect(screen.getByText("Stadium")).toBeInTheDocument();
  });

  it("Should call onRemove with correct ID when delete button is clocked", async () => {
    const user = userEvent.setup();
    render(<ReceiptList receipts={mockReceipts} onRemove={mockOnRemove} />);
    const deleteButtons = screen.getAllByRole("button", { name: /remove/i });

    await user.click(deleteButtons[1]);
    await waitFor(() => {
      expect(mockOnRemove).toHaveBeenCalledWith(2);
    });
  });

  it("Should show message if receipts are empty", () => {
    render(<ReceiptList receipts={[]} onRemove={mockOnRemove} />);
    expect(
      screen.queryByRole("button", { name: /remove/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(/Inga sparade kvitton hittades./i),
    ).toBeInTheDocument();
  });
});
