import type { Receipt } from "../../types/receipt";
import { SearchBar } from "./SearchBar";
import { ReceiptList } from "./ReceiptList";
import { ChartHomepage } from "./ChartHomepage";

interface HomePageProps {
  receipts: Receipt[];
  onRemove: (id: number) => void;
}

export const Homepage = ({ receipts, onRemove }: HomePageProps) => {
  return (
    <div>
      <SearchBar />
      <ChartHomepage />
      <ReceiptList receipts={receipts} onRemove={onRemove} />
    </div>
  );
};
