import {useState} from "react";
import axios from "axios";

function ReceiptForm(){
    const [storeName, setStoreName] = useState('');
    const [amountPaid, setAmountPaid] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReceipt = {
            storeName: storeName,
            amountPaid: parseFloat(amountPaid),
            date: new Date().toISOString().split('T')[0]
        };

        // POST REQUEST -> 
        axios.post('http://localhost:8080/api/receipts', newReceipt)
        .then(response => {
            alert(`Receipt saved with ID: ${response.data.id}`)
            setStoreName('');
            setAmountPaid('');
        })
        .catch(error => {
            console.error("Something went wrong when saving.")
        });
    };

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Lägg till kvitto</h3>
      <input 
        type="text" 
        placeholder="Butik" 
        value={storeName} 
        onChange={(e) => setStoreName(e.target.value)} 
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

export default ReceiptForm;
