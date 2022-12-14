interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  buttonList?: ("confirm" | "cancel" | "use" | "create")[];
  children: React.ReactNode;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-[#F0F0F0] z-50 rounded-3xl">
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
