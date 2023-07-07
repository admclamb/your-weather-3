import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavbarCanvas from "./NavbarCanvas/NavbarCanvas";
import NavbarBurger from "./NavbarBurger/NavbarBurger";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  console.log("IS NAV OPEN: ", isNavOpen);
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
