import React from "react";

interface TextType {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextType> = ({ children, className }) => {
  return <p className={`text-app-grayish-blue text-center tablet:text-start ${className}`}>{children}</p>;
};

export default Text;
