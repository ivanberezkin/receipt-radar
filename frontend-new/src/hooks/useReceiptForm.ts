import React, { useState } from "react";
import type { Receipt } from "../types/receipt.ts";
import { addNewReceipt } from "../api/apiService";
export function useReceiptForm(onSuccess: () => void) {
  const [vendor, setVendor] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const newReceipt: Receipt = {
      vendor: vendor,
      amountPaid: parseFloat(amountPaid),
      date: new Date().toISOString(),
      category: category,
      notes: notes,
    };
    try {
      await addNewReceipt(newReceipt);
      setVendor("");
      setCategory("");
      setNotes("");
      setAmountPaid("");
      onSuccess();
    } catch (error) {
      console.error("useReceiptForm: Couldn't send to API", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    vendor,
    setVendor,
    amountPaid,
    setAmountPaid,
    category,
    setCategory,
    notes,
    setNotes,
    handleSubmit,
    isSubmitting,
  };
}
