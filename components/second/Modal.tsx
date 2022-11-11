export const Modal = ({ isOpen, onDismiss }) => {
  return (
    <>
      {isOpen && (
        <dialog
          className="flex justify-center items-center w-screen h-screen bg-black/40 absolute top-0 left-0 z-50"
          onClick={onDismiss}
        >
          <div className="bg-white">test</div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
