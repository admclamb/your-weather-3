import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavbarBurger from "./NavbarBuger/NavbarBurger";
import ButtonClear from "../Button/ButtonClear/ButtonClear";
type Props = {};

const Navbar = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  return (
    <nav className="bg-neutral-700 text-white p-3">
      <Container className="flex justify-between items-center">
        <Logo />
        <NavbarBurger setIsOpen={setIsNavOpen} />
        <div
          className={`${
            isNavOpen ? "fixed right-0" : "hidden left-full"
          } top-0 bottom-0`}
        >
          <div>
            <Logo />
            <ButtonClear>Close</ButtonClear>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
