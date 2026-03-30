import { ReceiptForm } from './components/ReceiptForm';

import './App.css';
import { ReceiptList } from './components/ReceiptList';
import { useReceipts } from './hooks/useReceipts';

function App() {
  const { receipts, loading, updateReceiptsViewOnPage } = useReceipts();

  if (loading) return <p>Loading Receipts...</p>;

  return (
    <div>
      <ReceiptForm onReceiptAdded={updateReceiptsViewOnPage} />

      <ReceiptList receipts={receipts} />
    </div>
  );
}

export default App;
