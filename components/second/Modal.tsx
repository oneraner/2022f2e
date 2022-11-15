import { Children } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  buttonList?: ("confirm" | "cancel" | "use" | "create")[];
  children: React.ReactNode;
}

interface ButtonType {
  confirm: "confirm";
}

export const Modal = ({
  isOpen,
  onDismiss,
  buttonList = [],
  children,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-40"
          // onClick={onDismiss}
        >
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-[#F0F0F0] z-50 rounded-3xl">
            <div className="mb-7">{children}</div>
            {buttonList.length > 0 && buttonList.includes("confirm") && (
              <div>
                <Button onClick={() => onDismiss()}>確定</Button>
                <button onClick={() => onDismiss()}>取消</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
