import { useMemo, useState } from "react";
import { TextModule } from "../components/third/TextModule";
import NextImage from "next/image";
import king from "../public/image/thirdKing.png";
import po from "../public/image/thirdPo.png";
import poHand from "../public/image/thirdPohand.png";
import leftArrow from "../public/image/thirdLeftArrow.svg";
import { useRouter } from "next/router";

export enum Type {
  START = "start",
  PO = "po",
  TODO = "todo",
}

export const F2eThird = () => {
  const [type, setType] = useState<Type>(Type.START);
  const router = useRouter();

  const progress = useMemo(() => {
    switch (type) {
      case Type.START:
        return "w-[5%]";
      case Type.PO:
        return "w-[10%]";
      case Type.TODO:
        return "w-[10%]";
      default:
        return "w-[2%]";
    }
  }, [type]);

  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="w-full pt-6 pl-6">
          {type !== Type.START && (
            <button type="button" className="flex items-center justify-center">
              <NextImage
                src={leftArrow}
                alt="leftArrow"
                onClick={() => {
                  const typeList = Object.values(Type);
                  const currentTypeIndex = typeList.findIndex(
                    item => item === type
                  );
                  setType(typeList[currentTypeIndex - 1]);
                }}
              />
              回上一頁
            </button>
          )}
        </div>
        <div className="w-full max-w-[1200px] pt-20">
          <div className="relative mb-14 h-6 rounded-3xl bg-[#E0E0E0]">
            <div
              className={`absolute top-0 left-0 h-6 rounded-3xl bg-[#FFCB2D] ${progress}`}
            />
          </div>
          <TextModule
            type={type}
            buttonClick={() => {
              const typeList = Object.values(Type);
              const currentTypeIndex = typeList.findIndex(
                item => item === type
              );
              currentTypeIndex === typeList.length - 1
                ? router.push("/dragAndDrop")
                : setType(typeList[currentTypeIndex + 1]);
            }}
          />
        </div>
      </div>
      {type === Type.START && (
        <div className="absolute -bottom-10 -right-10">
          <NextImage src={king} alt="king" />
        </div>
      )}
      {type === Type.PO && (
        <div className="absolute -bottom-10 -right-10">
          <NextImage src={po} alt="po" />
        </div>
      )}
      {type === Type.TODO && (
        <div className="absolute -bottom-10 -right-10">
          <NextImage src={poHand} alt="poHand" />
        </div>
      )}
    </>
  );
};

export default F2eThird;
