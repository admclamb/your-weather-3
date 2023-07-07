import ButtonClear from "../../Button/ButtonClear/ButtonClear";

type Props = {
  closeModal: (arg0: void) => void;
};

const ModalHeader = ({ closeModal }: Props) => {
  return (
    <div className="p-3 border-b flex justify-end">
      <ButtonClear onClick={closeModal} id="modal-close-button">
        Close
      </ButtonClear>
    </div>
  );
};

export default ModalHeader;
