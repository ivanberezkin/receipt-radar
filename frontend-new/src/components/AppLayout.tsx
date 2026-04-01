// src/components/layout/AppLayout.tsx
import { type ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#11161B]">
      <Header />

      {/* Huvudinnehållet. Det har padding så det inte hamnar bakom Header/Navbar. */}
      <main className="grow pt-16 pb-20 overflow-y-auto w-full max-w-md mx-auto px-4">
        {children}
      </main>

      <Navbar />
    </div>
  );
};
