import type { Receipt } from "../../types/receipt.ts";
import "./ReceiptList.css";
//import { formatDate } from "../utils/utils";
import { ReceiptCard } from "./ReceiptCard.tsx";

interface ReceiptListProps {
  receipts: Receipt[];
  onRemove: (id: number) => void;
}

export const ReceiptList = ({ receipts }: ReceiptListProps) => {
  return (
    <section className="w-full max-w-md mx-auto px-4 sm:px-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-300 font-medium">Ordered by date</h2>
      </div>

      <div className="flex flex-col">
        {receipts.map((receipt) => (
          <ReceiptCard key={receipt.id} receipt={receipt} />
        ))}
      </div>
    </section>
  );
};
