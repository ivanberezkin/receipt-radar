import {useState, useEffect} from 'react'
import axios from 'axios'
import ReceiptForm from './ReceiptForm';
import './App.css';

function App() {

  const [receipts, setReceipts] = useState([]);

  const fetchReceipts = () => {
    axios.get('http://localhost:8080/api/receipts')
    .then(res => setReceipts(res.data))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchReceipts();
  }, []);


  return (
   <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Kvitto-App</h1>
      <ReceiptForm onReceiptAdded={fetchReceipts} />
      
      <hr />
      <h2>Historik</h2>
      <ul>
        {receipts.map(r => (
          <li key={r.id}>{r.storeName}: {r.amountPaid} kr</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
