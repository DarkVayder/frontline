import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 text-white p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl">
      {children}
    </div>
  );
}