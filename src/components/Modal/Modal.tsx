import { useEffect } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import FocusTrap from "focus-trap-react";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

type Props = {
  isOpen: boolean;
  closeModal: (arg0: void) => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, closeModal, children }: Props) => {
  useEffect(() => {
    const escFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
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
        <div className="modal-backdrop"></div>
        <FocusTrap focusTrapOptions={{ initialFocus: "#modal-close-button" }}>
          <div className="border modal w-full min-[362px]:w-11/12 md:max-w-2xl max-h-[95%] overflow-y-auto bg-white z-100 bg-white">
            <ModalHeader closeModal={closeModal} />
            {children}
          </div>
        </FocusTrap>
      </>
    )
  );
};

export default Modal;
