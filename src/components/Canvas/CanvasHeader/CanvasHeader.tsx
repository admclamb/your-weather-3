import React from "react";
import Logo from "../../Logo/Logo";
import ButtonClear from "../../Button/ButtonClear/ButtonClear";

type Props = {
  closeCanvas: (arg0: void) => void;
};

const CanvasHeader = ({ closeCanvas }: Props) => {
  return (
    <header className="border-b border-neutral-500 p-3 flex justify-between">
      <Logo />
      <ButtonClear onClick={closeCanvas}>Close</ButtonClear>
    </header>
  );
};

export default CanvasHeader;
