type ModalProps = {
  onClose: () => void;
};

function Modal({ onClose }: ModalProps) {
  return (
    <>
      <p>This is a modal</p>
      <button onClick={onClose}>Close</button>
    </>
  );
}

export default Modal;
