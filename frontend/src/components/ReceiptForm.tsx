import { useReceiptForm } from "../hooks/useReceiptForm";

interface ReceiptFormProps {
    onReceiptAdded : () => void;
}

export function ReceiptForm({ onReceiptAdded} : ReceiptFormProps) {
  const { vendor, setVendor, amountPaid, setAmountPaid, handleSubmit } =
    useReceiptForm(onReceiptAdded);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <h3>Lägg till kvitto</h3>
      <input
        type="text"
        placeholder="Butik"
        value={vendor}
        onChange={(e) => setVendor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Belopp"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        required
      />
      <button type="submit">Spara kvitto</button>
    </form>
  );
}
