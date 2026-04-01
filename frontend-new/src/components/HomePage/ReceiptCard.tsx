// src/components/ReceiptCard.tsx
import type { Receipt } from "../../types/receipt.ts";
import { formatDate } from "../../utils/utils.ts";

export const ReceiptCard = ({ receipt }: { receipt: Receipt }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-3 bg-[#1E252B] rounded-2xl border border-gray-800 hover:border-gray-700 transition-all shadow-lg cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Icon Placeholder (e.g., ICA, Shell) */}
        <div className="w-12 h-12 rounded-full bg-[#161B21] flex items-center justify-center border border-gray-700">
          {/* You can swap this for dynamic icons based on category */}
          <span className="text-emerald-400 text-xl font-bold">
            {receipt.vendor[0]}
          </span>
        </div>

        {/* Vendor & Receipt Image */}
        <div className="flex flex-col">
          <h3 className="text-white font-semibold text-lg">{receipt.vendor}</h3>
          <div className="w-10 h-12 bg-gray-700 rounded-md overflow-hidden mt-1 opacity-80">
            {/* Miniature receipt preview */}
            <div className="w-full h-full bg-slate-300 opacity-20">
              <img
                src="https://placehold.co/400x600/e2e8f0/475569?text=RECEIPT"
                alt="Receipt Preview"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Date & Amount */}
      <div className="text-right">
        <p className="text-gray-400 text-sm">{formatDate(receipt.date)}</p>
        <p className="text-emerald-400 font-bold text-lg mt-1">
          {receipt.amountPaid.toFixed(2).replace(".", ",")} kr
        </p>
      </div>
    </div>
  );
};
