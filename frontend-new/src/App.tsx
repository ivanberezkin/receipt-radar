import { ReceiptForm } from "./components/ReceiptForm";

import "./App.css";
import { ReceiptList } from "./components/ReceiptList";
import { useReceipts } from "./hooks/useReceipts";

function App() {
  const { receipts, loading, updateReceiptsViewOnPage, removeReceiptById } =
    useReceipts();

  if (loading) return <p>Loading Receipts...</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600">Receipt Radar</h1>
      <p className="mt-4 text-gray-600">Testing Tailwind v4...</p>
      <ReceiptForm onReceiptAdded={updateReceiptsViewOnPage} />

      <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
    </div>
  );
}

export default App;
