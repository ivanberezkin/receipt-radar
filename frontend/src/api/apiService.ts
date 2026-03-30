import axios from 'axios'
import { Receipt } from '../types/receipt'

const API_URL = 'http://localhost:8080/api/receipts'


//GET ALL RECEIPTS
export const fetchReceipts = async () => {
    try{
            const response = await axios.get(API_URL);
            return response.data;
    }catch(error){
        console.error("Error fetching receipt", error);
        throw error;
    }
};


//POST NEW RECEIPT
export const addNewReceipt = async (newReceipt : Receipt) => {

    try{
        const response = await axios.post<Receipt>(API_URL, newReceipt)
        return response.data;
    }catch(error){
        axios.isAxiosError(error);
        console.error("Error creating receipt", error);
        throw error;
    }
};
