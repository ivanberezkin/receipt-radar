import {useState, useEffect} from 'react'
import { Receipt } from '../types/receipt'
import { fetchReceipts } from '../api/apiService';


export const useReceipts =  () => {
const [receipts, setReceipts] = useState<Receipt[]>([]);
const [loading, setLoading] = useState<boolean>(true);

const updateReceiptsViewOnPage = async () => {

    try{
        const data = await fetchReceipts();
        setReceipts(data);
    } catch(error){
        console.error("UseReceipts: Couldn't fetch receipts", error);
    }finally{
        setLoading(false);
    }
};

useEffect(() => {
    updateReceiptsViewOnPage ();
}, []);

return { receipts, loading, updateReceiptsViewOnPage }
};

