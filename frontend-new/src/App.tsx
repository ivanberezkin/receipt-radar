import "./App.css";
import { ReceiptList } from "./components/HomePage/ReceiptList";
import { ReceiptForm } from "./components/ReceiptForm";
import { useReceipts } from "./hooks/useReceipts";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Timetabs } from "./components/HomePage/Timetabs";
import { SearchBar } from "./components/HomePage/SearchBar";

function AppContent() {
  const navigate = useNavigate();
  const { receipts, loading, updateReceiptsViewOnPage, removeReceiptById } =
    useReceipts();

  const handleReceiptAdded = async () => {
    await updateReceiptsViewOnPage();
    alert("Receipt added successfully.");
    navigate("/");
  };

  if (loading)
    return <p className="text-white p-10 text-center">Loading Receipts...</p>;

  return (
    <AppLayout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Timetabs />
              <SearchBar />
              <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
            </>
          }
        />

        <Route
          path="/scan"
          element={<ReceiptForm onReceiptAdded={handleReceiptAdded} />}
        />

        <Route
          path="/timeline"
          element={
            <ReceiptList receipts={receipts} onRemove={removeReceiptById} />
          }
        />

        <Route
          path="/reports"
          element={<div className="text-white p-10">Rapporter kommer här</div>}
        />
        <Route
          path="/settings"
          element={
            <div className="text-white p-10">Inställningar kommer här</div>
          }
        />
      </Routes>
    </AppLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
