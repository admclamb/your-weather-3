import React from "react";
import Canvas from "../../Canvas/Canvas";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarCanvas = ({ isOpen, setIsOpen }: Props) => {
  const closeCanvas = () => {
    setIsOpen(false);
  };
  return (
    <Canvas isOpen={isOpen} closeCanvas={closeCanvas}>
      <div></div>
    </Canvas>
  );
};

export default NavbarCanvas;
