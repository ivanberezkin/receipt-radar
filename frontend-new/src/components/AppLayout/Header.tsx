import logo from "../../assets/receipt-radar-logo-img.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#161B21] flex items-center justify-between px-6 border-b border-gray-800 z-50">
      {/* Logotyp / Appnamn */}
      <div className="flex items-center gap-3">
        {/* Själva bild-containern */}
        <div className="w-30 h-30 flex items-center justify-center">
          <img
            src={logo}
            alt="Receipt Radar Logo"
            className="w-full h-full object-contain" // object-contain är bättre för logotyper så de inte beskärs
          />
        </div>
        <h1 className="text-white text-2xl font-bold tracking-tight ">
          RECEIPT <span className="text-emerald-400">RADAR</span>
        </h1>
      </div>
      {/* Sökikon eller profilbild (matchar mockupen) */}
      <div className="w-9 h-9 rounded-full bg-emerald-900 border-2 border-emerald-400 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder för en bild, eller använd en ikon */}
        <div className="w-6 h-6 bg-emerald-500 rounded-full blur-[2px] opacity-70" />
      </div>
    </header>
  );
};
