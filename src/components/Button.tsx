import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 font-bold text-white rounded ${
        variant === "primary" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700"
      } ${className}`}
      {...props}
    />
  );
};

export default Button;
