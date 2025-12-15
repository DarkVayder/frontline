"use client";

import Link from "next/link";
import { useState } from "react";
import { FiGrid, FiCheckSquare, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { SlSocialSkype } from "react-icons/sl";

export default function Header() {
  const [open, setOpen] = useState(false);

  const hoverClasses: Record<string, string> = {
    Home: "hover:bg-gray-500",
    Social: "hover:bg-cyan-500",
    Todos: "hover:bg-green-500",
    Products: "hover:bg-blue-500",
  };

  const menuItems = [
    { href: "/", label: "Home", icon: FiGrid },
    { href: "social", label: "Social", icon: SlSocialSkype },
    { href: "/todos", label: "Todos", icon: FiCheckSquare },
    { href: "/products", label: "Products", icon: FiShoppingBag },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950 backdrop-blur-xl border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frontline
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm">
          {menuItems.map((item) => (
            <NavItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              hoverClass={hoverClasses[item.label]}
              onClick={() => {}}
            />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden rounded-lg p-2 text-gray-300 hover:bg-white/20 hover:text-white transition-all"
        >
          <FiMenu size={20} />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed mt-60 inset-0 z-50 flex items-center justify-center bg-black/90 md:hidden">
          {/* Glass panel */}
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/10 backdrop-blur-3xl shadow-2xl p-6 flex flex-col items-center justify-center space-y-6">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-200 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              <FiX size={28} />
            </button>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                label={item.label}
                hoverClass={hoverClasses[item.label]}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  hoverClass,
  onClick,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  hoverClass: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-gray-200 transition-all hover:scale-105 hover:shadow-lg hover:text-white ${hoverClass}`}
    >
      <Icon size={20} />
      {label}
    </Link>
  );
}
