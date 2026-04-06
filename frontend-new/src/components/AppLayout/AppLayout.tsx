import { type ReactNode } from "react";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#11161B]">
      <Header />

      <main className=" grow pt-16 pb-20 overflow-y-auto w-full max-w-7xl mx-auto px-6">
        {children}
      </main>

      <Navbar />
    </div>
  );
};
