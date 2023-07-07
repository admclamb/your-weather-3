import React, { useEffect } from "react";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import FocusTrap from "focus-trap-react";
import CanvasHeader from "./CanvasHeader/CanvasHeader";
type Props = {
  isOpen: any;
  closeCanvas: (arg0: void) => void;
  children?: React.ReactNode;
};

const Canvas = ({ isOpen, closeCanvas, children }: Props) => {
  useEffect(() => {
    const escFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCanvas();
      }
    };
    document.addEventListener("keydown", escFunction, false);

    return () => {
      return document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  useDisableBodyScroll(isOpen);
  return (
    isOpen && (
      <>
        <div className="navbar-canvas-backdrop"></div>
        <FocusTrap focusTrapOptions={{ initialFocus: "#canvas-header" }}>
          <div className="fixed right-0 top-0 bottom-0 navbar-canvas border-l border-neutral-500 bg-neutral-700 w-11/12 sm:w-3/5 md:w-7/12 lg:w-3/12 text-white overflow-y-auto duration-200 ease-out">
            <CanvasHeader closeCanvas={closeCanvas} />
            {children}
          </div>
        </FocusTrap>
      </>
    )
  );
};

export default Canvas;
