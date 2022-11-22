import React from "react";
import { Logo } from "../Layouts";
import Socials from "./Socials";
import NavList from "./NavList";

const Footer: React.FC = () => {
  return (
    <footer className="bg-app-dark-blue">
      <div className="container !py-6 flex flex-col gap-14 mobile-lg:items-center tablet:flex-row">
        <Logo isDark={true} />
        <NavList />
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
