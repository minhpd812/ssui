import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition";
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
};

export default Button;
