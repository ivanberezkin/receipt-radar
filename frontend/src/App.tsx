import { ReceiptForm } from './components/ReceiptForm';

import './App.css';
import { ReceiptList } from './components/ReceiptList';
import { useReceipts } from './hooks_temp/useReceipts';

function App() {
  const { receipts, loading, updateReceiptsViewOnPage, removeReceiptById } =
    useReceipts();

  if (loading) return <p>Loading Receipts...</p>;

  return (
    <div>
      <ReceiptForm onReceiptAdded={updateReceiptsViewOnPage} />

      <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
    </div>
  );
}

export default App;
