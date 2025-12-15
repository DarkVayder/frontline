"use client";

import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: IconType;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export default function Button({
  label,
  icon: Icon,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
  "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring cursor-pointer select-none text-center";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-sm hover:shadow-md",
    secondary: "bg-gray-100 text-black hover:bg-gray-200 hover:scale-105 shadow-sm hover:shadow-md",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:scale-105 shadow-sm hover:shadow-md",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon />}
      {label}
    </button>
  );
}
