import React from "react";

const NavList: React.FC = () => {
  return (
    <ul className="flex items-center gap-6 text-app-white">
      {["features", "pricing", "contact"].map((item) => (
        <li
          className="hover:text-app-red cursor-pointer uppercase text-sm"
          key={`footer-${item}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
