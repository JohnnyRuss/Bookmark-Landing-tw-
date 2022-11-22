import React, { SetStateAction } from "react";

interface NavListType {
  setOpenNav: React.Dispatch<SetStateAction<boolean>>;
}

const NavList: React.FC<NavListType> = ({ setOpenNav }) => {
  return (
    <ul className="flex flex-col gap-4 text-center tablet:ml-auto tablet:flex-row tablet:items-center tablet:text-start">
      {["features", "extensions", "contact"].map((item) => (
        <li
          onClick={() => setOpenNav(false)}
          className="cursor-pointer border-solid border-b border-x-0 border-t-0 border-app-grayish-blue py-2 tablet:py-0 tablet:border-none hover:text-app-red"
          key={item}
        >
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
