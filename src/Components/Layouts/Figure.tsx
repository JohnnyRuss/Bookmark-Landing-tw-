import React from "react";

interface FigureType {
  className?: string;
  src: string;
  alt?: string;
}

const Figure: React.FC<FigureType> = ({ src, className, alt }) => {
  return (
    <figure className={`w-full ${className || ""}`}>
      <img className="w-full object-center object-cover" src={src} alt={alt} />
    </figure>
  );
};

export default Figure;
