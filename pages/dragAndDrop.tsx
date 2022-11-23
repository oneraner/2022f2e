import dynamic from "next/dynamic";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import leftArrow from "../public/image/thirdLeftArrow.svg";
import poSit from "../public/image/thirdPoSit.png";
import jira from "../public/image/thirdJiraLogo.png";
import { AllList } from "../components/third/DndComponent";

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
  const [dndItem, setDndItem] = useState<AllList>();

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

  const getList = (allList) => setDndItem(allList);

  return (
    <div className="flex flex-col items-center relative h-screen overflow-auto">
      <div className="w-full pt-4 pl-6">
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
      <div className="w-full max-w-[1200px] pt-4">
        <div className="bg-[#E0E0E0] rounded-3xl h-6 relative mb-4">
          <div
            className={`absolute top-0 left-0 bg-[#FFCB2D] h-6 rounded-3xl ${progress}`}
          />
        </div>
        <div className="flex justify-center relative mb-4">
          <NextImage
            src={poSit}
            alt="poSit"
            className="absolute top-0 left-[5%] h-48"
          />
          <div className="border-b-[3px] border-solid border-[#FF60FA] w-6 h-14"></div>
          <div className="flex border-[3px] border-solid border-[#FF60FA] rounded-[24px] p-4">
            <div className="flex flex-col text-[#FF60FA]">
              <p>
                請把需求貓貓拖拉到右邊產品代辦清單，並調整代辦的優先度順序～
              </p>
              <p> TT王國也推薦使用 Jira 來做任務管理喔！</p>
            </div>
            <NextImage src={jira} alt="jira" />
          </div>
        </div>
        <div className="max-w-[1200px] flex justify-center mb-8">
          <DndComponent getList={getList} />
        </div>
        <div className="flex justify-center mb-8">
          <button
            type="button"
            className="disabled:bg-[#bdbdbd] disabled:text-[#FFF9F6] bg-[#FF60FA] text-[#2B2B2B] px-8 py-4 rounded-2xl"
            disabled={dndItem?.priority.length !== 4}
            onClick={() => {
              router.push("/introspection");
            }}
          >
            完成清單
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
