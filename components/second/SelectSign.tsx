import Modal from "./Modal";
import Image from "next/image";
import del from "../../public/image/delete.svg";
import { useEffect, useState } from "react";

export const SelectSign = ({ isOpen, onDismiss, buttonClick }) => {
  const [image1, setImage1] = useState(localStorage.getItem("sign1") ?? "");
  const [image2, setImage2] = useState(localStorage.getItem("sign2") ?? "");
  const [image3, setImage3] = useState(localStorage.getItem("sign3") ?? "");

  useEffect(() => {
    setImage1(localStorage.getItem("sign1") ?? "");
    setImage2(localStorage.getItem("sign2") ?? "");
    setImage3(localStorage.getItem("sign3") ?? "");
  }, [
    localStorage.getItem("sign1"),
    localStorage.getItem("sign2"),
    localStorage.getItem("sign3"),
  ]);

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <div className="bg-[#F0F0F0] rounded-2xl w-[320px] p-4">
        <div className="flex justify-center text-[#1C8B6A] mb-3">
          請選擇簽名
        </div>
        <ul className="mb-3">
          {image1 && (
            <li className="flex mb-2">
              <div className="flex justify-center items-center bg-white w-[90%] h-16 mr-2 rounded-2xl">
                <img src={image1} className="object-cover h-full" />
              </div>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("sign1");
                  setImage1("");
                }}
              >
                <Image src={del} alt="delete" />
              </button>
            </li>
          )}
          {image2 && (
            <li className="flex mb-2">
              <div className="flex justify-center items-center bg-white w-[90%] h-16 mr-2 rounded-2xl">
                <img src={image2} className="object-cover h-full" />
              </div>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("sign2");
                  setImage2("");
                }}
              >
                <Image src={del} alt="delete" />
              </button>
            </li>
          )}
          {image3 && (
            <li className="flex mb-2">
              <div className="flex justify-center items-center bg-white w-[90%] h-16 mr-2 rounded-2xl">
                <img src={image3} className="object-cover h-full" />
              </div>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("sign3");
                  setImage3("");
                }}
              >
                <Image src={del} alt="delete" />
              </button>
            </li>
          )}
        </ul>
        <button
          type="button"
          className="flex justify-start text-[#1C8B6A]"
          onClick={buttonClick}
        >
          +新增簽名
        </button>
      </div>
    </Modal>
  );
};

export default SelectSign;
