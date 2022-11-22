import React from "react";

interface PseudoFigureType {
  className?: string;
  position: "left" | "right";
}

const PseudoFigure: React.FC<PseudoFigureType> = ({ className, position }) => {
  const pseudoStyle = {
    left: "left-0 after:left-0 after:rounded-tr-full after:rounded-br-full",
    right: "right-0 after:right-0 after:rounded-tl-full after:rounded-bl-full",
  };

  return (
    <span
      className={`absolute -z-10 top-20 mobile-lg:top-28 tablet:top-16 desktop:top-28 w-full h-[40vw] tablet:h-[27vw] desktop:h-[24vw] after:content-[''] after:absolute after:bottom-0 after:h-full after:w-full after:bg-app-blue after:-z-10 ${
        pseudoStyle[position]
      } ${className || ""}`}
    ></span>
  );
};

export default PseudoFigure;
