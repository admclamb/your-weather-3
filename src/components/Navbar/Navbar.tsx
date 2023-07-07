import { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import NavbarCanvas from "./NavbarCanvas/NavbarCanvas";
import NavbarBurger from "./NavbarBurger/NavbarBurger";
import Searchbar from "../Searchbar/Searchbar";
import NavbarSub from "./NavbarSub/NavbarSub";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="bg-neutral-700 text-white p-3">
        <Container className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-3">
            <Searchbar className="hidden sm:block w-80" />
            <NavbarBurger setIsOpen={setIsNavOpen} />
          </div>
          <NavbarCanvas isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
        </Container>
      </nav>
      <NavbarSub />
    </>
  );
};

export default Navbar;
