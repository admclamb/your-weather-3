import React, { useState } from "react";
import Container from "../Container/Container";
import LogoIcon from "../Logo/LogoIcon/LogoIcon";
import Logo from "../Logo/Logo";
import NavbarBurger from "./NavbarBuger/NavbarBurger";

type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  return (
    <nav className="bg-neutral-700 text-white p-3">
      <Container className="flex justify-between items-center">
        <Logo />
        <NavbarBurger setIsOpen={setIsNavOpen} />
        <div></div>
      </Container>
    </nav>
  );
};

export default Navbar;
