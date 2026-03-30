import { Receipt } from '../types/receipt';
import './ReceiptList.css';

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
        <table className="receipt-table">
          <thead>
            <tr>
              <th>Store</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((r) => (
              <tr key={r.id}>
                <td>{r.vendor}</td>
                <td>{r.category || 'Unknown'}</td>
                <td className="date-cell">{r.date}</td>
                <td className="amount-cell">{r.amountPaid} kr</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
