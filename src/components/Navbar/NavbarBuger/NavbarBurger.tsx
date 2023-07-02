import React from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

const NavbarBurger = ({ setIsOpen }: Props) => {
  return (
    <button onClick={() => setIsOpen((curr) => !curr)}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
};

export default NavbarBurger;
