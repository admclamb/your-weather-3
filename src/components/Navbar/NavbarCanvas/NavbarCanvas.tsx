import React from "react";
import Canvas from "../../Canvas/Canvas";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarCanvas = ({ isOpen, setIsOpen }: Props) => {
  console.log("IS OPEN", isOpen);
  const closeCanvas = () => {
    console.log("CLOSING");
    setIsOpen(false);
  };
  return (
    <Canvas isOpen={isOpen} closeCanvas={closeCanvas}>
      <div></div>
    </Canvas>
  );
};

export default NavbarCanvas;
