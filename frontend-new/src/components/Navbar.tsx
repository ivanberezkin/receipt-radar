import { useNavigation } from "../hooks/useNavigation";

const navItems = [
  { name: "Home", icon: "🏠", active: true },
  { name: "Timeline", icon: "📋" },
  { name: "Scan", icon: "📸" },
  { name: "Reports", icon: "📊" },
  { name: "Settings", icon: "⚙️" },
];

export const Navbar = () => {
  const { activeTab, navigateTo } = useNavigation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-18 bg-[#161B21] border-t border-gray-800 flex items-center justify-around px-2 z-50 pb-safe">
      {navItems.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <button
            key={item.name}
            onClick={() => navigateTo(item.name)}
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-10 flex items-center justify-center relative">
              {/* Indikator för aktiv flik (Timeline i bilden) */}
              {isActive && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-emerald-400 rounded-t-full shadow-lg shadow-emerald-400/30" />
              )}

              <span
                className={`text-2xl ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
              >
                {item.icon}
              </span>
            </div>

            <span
              className={`text-xs font-medium ${isActive ? "text-emerald-400" : "text-gray-500 group-hover:text-gray-300"}`}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
