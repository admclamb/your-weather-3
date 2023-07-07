import React from "react";
import ButtonClearGray from "../../Button/ButtonClearGray/ButtonClearGray";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarBurger = ({ setIsOpen }: Props) => {
  const toggleCanvas = () => {
    setIsOpen((curr) => !curr);
  };
  return (
    <ButtonClearGray onClick={toggleCanvas}>
      <i className="fa-solid fa-bars"></i>
    </ButtonClearGray>
  );
};

export default NavbarBurger;
