import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavbarBurger from "./NavbarBuger/NavbarBurger";
import ButtonClear from "../Button/ButtonClear/ButtonClear";
import NavbarCanvas from "./NavbarCanvas/NavbarCanvas";
type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <nav className="bg-neutral-700 text-white p-3">
      <Container className="flex justify-between items-center">
        <Logo />
        <NavbarBurger setIsOpen={setIsNavOpen} />
        <NavbarCanvas isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      </Container>
    </nav>
  );
};

export default Navbar;
