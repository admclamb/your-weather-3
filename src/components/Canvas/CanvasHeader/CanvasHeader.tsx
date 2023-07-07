import React from "react";
import Logo from "../../Logo/Logo";
import ButtonClear from "../../Button/ButtonClear/ButtonClear";
import ButtonClearGray from "../../Button/ButtonClearGray/ButtonClearGray";

type Props = {
  closeCanvas: (arg0: void) => void;
};

const CanvasHeader = ({ closeCanvas }: Props) => {
  return (
    <header className="border-b border-neutral-500 p-3 flex justify-between">
      <Logo onClick={closeCanvas} />
      <ButtonClearGray onClick={closeCanvas} id="canvas-header">
        Close
      </ButtonClearGray>
    </header>
  );
};

export default CanvasHeader;
