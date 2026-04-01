import { ReceiptForm } from "./components/ReceiptForm";

import "./App.css";
import { ReceiptList } from "./components/ReceiptList";
import { useReceipts } from "./hooks/useReceipts";
import { AppLayout } from "./components/AppLayout";

function App() {
  const { receipts, loading, updateReceiptsViewOnPage, removeReceiptById } =
    useReceipts();

  if (loading) return <p>Loading Receipts...</p>;

  return (
    <AppLayout>
      <div className="mt-6 mb-4 px-2">
        {/* searchbar (stoppa in din sök-komponent här) */}
        <input
          type="search"
          placeholder="Search..."
          className="w-full p-3 rounded-xl bg-[#1E252B] border border-gray-800 text-gray-300 placeholder:text-gray-600 mb-5"
        />

        {/* Week/Month/Year tabbar (stoppa in din tab-komponent här) */}
        <div className="flex gap-1 bg-[#1E252B] rounded-full p-1 border border-gray-800 mb-6">
          <button className="flex-1 px-4 py-2 bg-[#2D353C] text-white rounded-full">
            Week
          </button>
          <button className="flex-1 px-4 py-2 text-gray-500">Month</button>
          <button className="flex-1 px-4 py-2 text-gray-500">Year</button>
        </div>
      </div>
      <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
    </AppLayout>
  );
}

export default App;
