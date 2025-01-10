import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "filled",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-2xl transition-colors text-white font-martian font-semibold";
  const variants = {
    filled:
      "bg-[#C5A46E] text-[19px] leading-120 text-[#7A6246] hover:bg-[#B08E5F] duration-300",
    outlined:
      "border border-[#BBBBBB] text-[#BBBBBB] hover:bg-[#C4A77D] hover:text-white text-[19px] leading-120",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
