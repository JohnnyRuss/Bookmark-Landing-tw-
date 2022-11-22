import React, { useState } from "react";
import { Logo, Button } from "../Layouts";
import BurgerBTN from "./BurgerBTN";
import NavList from "./NavList";

const Navigation: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-30 flex items-center justify-end py-5 px-3 w-full tablet:px-0 tablet:py-0 tablet:justify-center bg-app-white">
      <div
        className={`${
          openNav
            ? "fixed z-20 top-0 left-0 h-screen w-full flex flex-col pt-3 px-5 bg-app-dark-blue-tr text-app-white animate-collapse-right"
            : "hidden"
        } gap-8 uppercase tablet:relative tablet:z-0  tablet:h-20 tablet:flex-row tablet:pt-0 tablet:px-0 tablet:container tablet:flex tablet:justify-between tablet:items-center tablet:bg-app-white tablet:text-app-grayish-blue`}
      >
        <Logo
          isDark={openNav}
          className="tablet:fill-app-dark-blue"
          pClassName="self-center"
        />
        <NavList setOpenNav={setOpenNav} />
        <Button
          className={`${
            openNav ? "hover:border-app-gray hover:text-app-gray" : ""
          } hover:tablet:border-app-red hover:tablet:text-app-red`}
          cl="red"
          value="login"
        />
      </div>
      <BurgerBTN
        handleNav={() => setOpenNav((prev) => !prev)}
        isOpen={openNav}
      />
    </nav>
  );
};

export default Navigation;
