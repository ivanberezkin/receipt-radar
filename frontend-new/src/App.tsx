import "./App.css";
import { ReceiptList } from "./components/ReceiptList";
import { ReceiptForm } from "./components/ReceiptForm";
import { useReceipts } from "./hooks/useReceipts";
import { AppLayout } from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { receipts, loading, updateReceiptsViewOnPage, removeReceiptById } =
    useReceipts();

  if (loading) return <p>Loading Receipts...</p>;

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
            }
          />

          <Route
            path="/scan"
            element={<ReceiptForm onReceiptAdded={updateReceiptsViewOnPage} />}
          />

          {/* Övriga sidor (placeholder tills du byggt dem) */}
          <Route
            path="/timeline"
            element={
              <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
            }
          />
          <Route path="/reports" element={<div>Rapporter kommer här</div>} />
          <Route
            path="/settings"
            element={<div>Inställningar kommer här</div>}
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
