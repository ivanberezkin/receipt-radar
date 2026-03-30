import { useState, useEffect } from "react";
import { ReceiptForm } from "./components/ReceiptForm";
import { Receipt } from "./types/receipt";
import { fetchReceipts } from "./api/apiService";
import "./App.css";

function App() {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  //hämtar lista av receupts från   http://localhost:8080/api/receipts GET REQUEST-> Backend
  const updateReceiptsViewOnPage = async () => {
    try {
      const data = await fetchReceipts();
      setReceipts(data);
    } catch (error) {
      console.error("Couldn't get Receipt", error);
    }
  };

  useEffect(() => {
    updateReceiptsViewOnPage();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Kvitto-App</h1>
      <ReceiptForm onReceiptAdded={updateReceiptsViewOnPage} />

      <hr />
      <h2>Historik</h2>
      <ul>
        {receipts.map((r) => (
          <li key={r.id}>
            {r.vendor}: {r.amountPaid} kr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
