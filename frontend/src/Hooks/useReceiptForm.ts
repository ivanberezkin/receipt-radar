import React ,{  useState} from 'react';
import { Receipt } from '../types/receipt'
import {addNewReceipt} from '../api/apiService'
export function useReceiptForm(onSuccess : () => void){

    const [vendor, setVendor] = useState('');
    const [amountPaid, setAmountPaid] = useState('');

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        
        const newReceipt : Receipt = {
            vendor : vendor,
            amountPaid : parseFloat(amountPaid),
            date: new Date().toISOString(),
            category: "sport"
        };
        
        const addedReceipt = await addNewReceipt(newReceipt);
        setVendor('');
        setAmountPaid('');
        onSuccess();
    }; 

    return {
        vendor,
        setVendor,
        amountPaid,
        setAmountPaid,
        handleSubmit
    }

}
