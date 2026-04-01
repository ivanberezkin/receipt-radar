import { useState, useEffect } from "react";
import type { Receipt } from "../types/receipt.ts";
import { fetchReceipts, removeReceiptFromApi } from "../api/apiService";

export const useReceipts = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const updateReceiptsViewOnPage = async () => {
    try {
      const data = await fetchReceipts();
      setReceipts(data);
    } catch (error) {
      console.error("UseReceipts: Couldn't fetch receipts", error);
    } finally {
      setLoading(false);
    }
  };

  const removeReceiptById = async (removeReceiptId: number) => {
    try {
      await removeReceiptFromApi(removeReceiptId);
      setReceipts((prev) => prev.filter((r) => r.id !== removeReceiptId));
      console.log(`Receipt with id ${removeReceiptId} deleted.`);
    } catch (error) {
      console.error("UseReceipts: Couldn't remove receipt.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateReceiptsViewOnPage();
  }, []);

  return { receipts, loading, updateReceiptsViewOnPage, removeReceiptById };
};
