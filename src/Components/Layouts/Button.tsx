import React from "react";

interface ButtonType {
  value: string;
  className?: string;
  cl: "red" | "blue" | "gray";
}

const Button: React.FC<ButtonType> = ({ value, className, cl }) => {
  const st = {
    red: "bg-app-red text-app-white hover:bg-transparent hover:text-app-red hover:border-app-red",
    blue: "bg-app-blue text-app-white hover:bg-transparent hover:text-app-blue hover:border-app-blue",
    gray: "bg-app-gray text-app-dark-blue hover:bg-transparent hover:border-app-dark-blue",
  };

  return (
    <button
      className={`h-11 min-w-[100px] text-app-sm tablet:text-base flex items-center justify-center hover:border-solid border-none border-2 px-4 rounded shadow-md transition-[backgound,color] duration-200 capitalize ${st[cl]} ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
