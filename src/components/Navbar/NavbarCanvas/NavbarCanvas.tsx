import React from "react";
import Canvas from "../../Canvas/Canvas";
import Searchbar from "../../Searchbar/Searchbar";

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
      <div className="p-3">
        <Searchbar />
      </div>
    </Canvas>
  );
};

export default NavbarCanvas;
