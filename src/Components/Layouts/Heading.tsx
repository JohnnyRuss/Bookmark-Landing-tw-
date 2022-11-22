import React from "react";

interface HeadingType {
  mode: "h1" | "h2" | "h3";
  value: string;
  className?: string;
}

interface HeadingInstanceType {
  value: string;
  className?: string;
}

const HeadingPrimary: React.FC<HeadingInstanceType> = ({
  value,
  className,
}) => {
  return <h1 className={`text-app-h2 desktop:text-app-h1 ${className}`}>{value}</h1>;
};

const HeadingSecondary: React.FC<HeadingInstanceType> = ({
  value,
  className,
}) => {
  return <h2 className={`text-app-h3 desktop:text-app-h2 ${className}`}>{value}</h2>;
};

const HeadingTertiary: React.FC<HeadingInstanceType> = ({
  value,
  className,
}) => {
  return <h3 className={`text-app-h3 ${className}`}>{value}</h3>;
};

const Heading: React.FC<HeadingType> = ({ mode, value, className }) => {
  const baseStyle = "text-app-dark-blue capitalize text-center tablet:text-start";

  return mode === "h1" ? (
    <HeadingPrimary value={value} className={`${baseStyle} ${className}`} />
  ) : mode === "h2" ? (
    <HeadingSecondary value={value} className={`${baseStyle} ${className}`} />
  ) : (
    <HeadingTertiary value={value} className={`${baseStyle} ${className}`} />
  );
};

export default Heading;
