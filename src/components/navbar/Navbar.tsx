import React from "react";
import NavbarHeader from "./components/NavbarHeader";
import NavbarMenu from "./components/NavbarMenu";
import { NavbarProps } from "../../modules/auth/login/types";

const Navbar: React.FC<NavbarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <NavbarHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavbarMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
