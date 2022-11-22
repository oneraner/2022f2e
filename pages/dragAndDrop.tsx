import dynamic from "next/dynamic";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import leftArrow from "../public/image/thirdLeftArrow.svg";

const DndComponent = dynamic(() => import("../components/third/DndComponent"), {
  ssr: false,
});

export enum DndType {
  NOPOINT = "nopoint",
  POINT = "point",
}

export const DragAndDrop = () => {
  const router = useRouter();
  const [type, setType] = useState(DndType.NOPOINT);

  const progress = useMemo(() => {
    switch (type) {
      case DndType.NOPOINT:
        return "w-[20%]";
      case DndType.POINT:
        return "w-[40%]";
      default:
        return "w-[20%]";
    }
  }, [type]);

  return (
    <div className="flex flex-col items-center relative h-screen overflow-auto">
      <div className="w-full pt-6 pl-6">
        <button type="button" className="flex justify-center items-center">
          <NextImage
            src={leftArrow}
            alt="leftArrow"
            onClick={() => {
              if (type === DndType.NOPOINT) {
                router.push("/f2eThird");
              }
            }}
          />
          回上一頁
        </button>
      </div>
      <div className="w-full max-w-[1200px] pt-10 mb-10">
        <div className="bg-[#E0E0E0] rounded-3xl h-6 relative mb-10">
          <div
            className={`absolute top-0 left-0 bg-[#FFCB2D] h-6 rounded-3xl ${progress}`}
          />
        </div>
        <div className="max-w-[1200px] flex justify-center mb-8">
          <DndComponent />
        </div>
        <div className="flex justify-center mb-8">
          <button
            type="button"
            className="bg-[#bdbdbd] text-[#FFF9F6] px-8 py-6 rounded-2xl"
          >
            完成清單
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
