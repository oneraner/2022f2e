import usePdfStore from "../../zustand/store";
import Image from "next/image";
import docs from "../../public/image/docs.png";
import Button from "./Button";
import { useRef, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";

export const Upload = () => {
  const { setPdf } = usePdfStore();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleUploadPdf = (data: File) => {
    if (data.size > 1024 * 1024 * 10) {
      setIsOpen(true);
      return;
    }
    setPdf(data);
    router.push("/editPdf");
  };

  return (
    <>
      <label>
        <div
          className="flex flex-col justify-center items-center bg-white border-2 border-dashed border-[#B7B7B7] rounded-3xl w-[417px] h-[376px]"
          onDrop={e => {
            e.preventDefault();
            const data = new DataTransfer();
            data.items.add(e.dataTransfer.files[0]);
            handleUploadPdf(data.files[0]);
          }}
          onDragOver={e => e.preventDefault()}
        >
          <Image src={docs} className="mb-5" alt="docs" />
          <Button
            className="w-[227px] mb-4"
            onClick={() => inputRef.current && inputRef.current.click()}
          >
            選擇檔案
          </Button>
          <p className="mb-4">或拖移檔案到此處</p>
          <p className="text-sm">(限10MB 內的PDF或JPG檔)</p>
        </div>
        <input
          type="file"
          accept=".pdf"
          ref={e => {
            inputRef.current = e;
          }}
          className="h-0 visible"
          onChange={e => {
            if (!e?.target?.files) return;
            if (e?.target?.files.length < 1) return;
            handleUploadPdf(e.target.files[0]);
          }}
        />
      </label>
      <Modal isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        檔案超 過10MB，請重新選擇
      </Modal>
    </>
  );
};

export default Upload;
