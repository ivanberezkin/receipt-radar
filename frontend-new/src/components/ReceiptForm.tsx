import { useReceiptForm } from "../hooks/useReceiptForm";
import { type FC } from "react";
import placeholderImage from "../assets/receipt-radar-logo-img.png";

const categories = [
  {
    id: "groceries",
    name: "Groceries",
    icon: "🛒",
    bgColor: "border-emerald-500 bg-emerald-950/20",
  },
  {
    id: "dining",
    name: "Dining",
    icon: "🍽️",
    bgColor: "bg-orange-950/20 border-gray-700",
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: "🚗",
    bgColor: "bg-blue-950/20 border-gray-700",
  },
  {
    id: "home",
    name: "Home",
    icon: "🏠",
    bgColor: "bg-green-950/20 border-gray-700",
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: "🎬",
    bgColor: "bg-purple-950/20 border-gray-700",
  },
];

interface ReceiptFormProps {
  onReceiptAdded: () => void;
}

export const ReceiptForm: FC<ReceiptFormProps> = ({ onReceiptAdded }) => {
  const {
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
  } = useReceiptForm(onReceiptAdded);
  return (
    // Själva behållaren för hela formuläret (matchar mockupens mörka stil)
    <main className="min-h-screen bg-[#11161B] text-gray-200 pb-28 pt-6 px-6">
      {/* 1. Header (Valfri, kan tas bort om du har en global header) */}
      <h1 className="text-white text-3xl font-bold tracking-tight mb-8 text-center">
        RECEIPT <span className="text-emerald-400">RADAR</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 2. Förhandsvisning av kvitto-bild (Matchar den centrala bilden i mockupen) */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 bg-[#161B21] rounded-2xl border-4 border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(16,185,129,0.15)] overflow-hidden">
            {/* Ersätt 'dummyReceiptImg' med 'require' eller din riktiga bild senare */}
            <img
              src={placeholderImage}
              alt="Receipt Preview"
              className="w-full h-full object-cover scale-[1.1] grayscale opacity-80" // object-cover fyller hela ytan
            />
          </div>
        </div>

        {/* 3. Inmatningsfält - Vi grupperar dem för att matcha stilen */}
        <div className="space-y-3">
          {/* Merchant / Vendor */}
          <div className="flex items-center gap-3 bg-[#161B21] border border-gray-800 rounded-xl px-4 py-3">
            <label className="text-gray-400 font-medium w-24">Merchant:</label>
            <input
              type="text"
              placeholder="Store Name"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              required
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-right font-medium"
            />
            {/* Ikon för plats, kan ersättas med en SVG */}
            <span className="text-xl text-emerald-400">📍</span>
          </div>

          {/* Amount */}
          <div className="flex items-center gap-3 bg-[#161B21] border border-gray-800 rounded-xl px-4 py-3">
            <label className="text-gray-400 font-medium w-24">Amount:</label>
            <input
              type="number"
              placeholder="0.00"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              required
              className="flex-1 bg-transparent text-emerald-300 placeholder-gray-600 text-right outline-none text-lg font-bold"
            />
            <span className="text-emerald-300 font-medium">kr</span>
          </div>

          {/* Category Selector */}
          <div className="flex items-center gap-3 bg-[#161B21] border border-gray-800 rounded-xl px-4 py-3">
            <label className="text-gray-400 font-medium w-24">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 bg-transparent text-white text-right outline-none font-medium appearance-none custom-select-arrow"
            >
              <option value="" disabled className="bg-[#161B21] text-gray-500">
                [Select]
              </option>
              {categories.map((cat) => (
                <option
                  key={cat.id}
                  value={cat.id}
                  className="bg-[#161B21] text-white"
                >
                  {cat.name}
                </option>
              ))}
            </select>
            {/* Ikon för pil, kan ersättas med en SVG */}
            <span className="text-gray-600">▼</span>
          </div>
        </div>

        {/* 4. Category Carousel (Snyggast i mockupen!) */}
        <div className="space-y-3">
          <h4 className="text-gray-400 font-medium px-1">Category Carousel</h4>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex-none flex flex-col items-center justify-center gap-1.5 w-21.25 h-21.25 rounded-xl border-2 transition-all duration-200 ${category === cat.id ? cat.bgColor : "border-gray-800 bg-[#161B21]/50"} hover:scale-105`}
              >
                <span className="text-3xl">{cat.icon}</span>
                <span
                  className={`text-[11px] font-medium tracking-wide ${category === cat.id ? "text-white" : "text-gray-500"}`}
                >
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 5. Notes */}
        <div className="space-y-3">
          <div className="bg-[#161B21] border border-gray-800 rounded-xl px-4 py-3">
            <textarea
              placeholder="Notes (Optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full bg-transparent text-white placeholder-gray-600 outline-none font-medium resize-none"
            />
          </div>
        </div>

        {/* 6. Submit Button - Centrerad inuti formuläret */}
        <div className="flex justify-center pt-10 pb-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex items-center justify-center w-full max-w-50 py-4 bg-emerald-500 rounded-2xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-3 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-black font-bold uppercase tracking-widest">
                  Spara Kvitto
                </span>
                <span className="text-xl">✅</span>
              </div>
            )}

            {/* En subtil glans-effekt för att göra den mer "premium" */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
          </button>
        </div>
      </form>
    </main>
  );
};
