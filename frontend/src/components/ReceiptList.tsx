import { Receipt } from '../types/receipt';

interface ReceiptListProps {
  receipts: Receipt[];
}

export const ReceiptList = ({ receipts }: ReceiptListProps) => {
  return (
    <div className="receipt-history">
      <h2>Historik</h2>
      {receipts.length === 0 ? (
        <p>Inga sparade kvitton hittades.</p>
      ) : (
        <ul>
          {receipts.map((r) => (
            <li key={r.id}>
              <strong>{r.vendor}</strong>: {r.amountPaid} kr
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
