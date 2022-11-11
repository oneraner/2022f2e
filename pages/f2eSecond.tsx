import dynamic from "next/dynamic";
import { useState } from "react";
import Modal from "../components/second/Modal";
import Upload from "../components/second/Upload";

const Pdf = dynamic(() => import("../components/second/Pdf"), {
  ssr: false,
});

export const Canvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>trytry</button>
      <Upload />
      <Pdf />
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}/>
    </>
  );
};

export default Canvas;
