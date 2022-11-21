import { useMemo } from "react";
import { Type } from "../../pages/f2eThird";
import NextImage from "next/image";
import thirdRightArrow from "../../public/image/thirdRightArrow.svg";

export const TextModule = ({ type, buttonClick }) => {
  const content = useMemo(() => {
    switch (type) {
      case Type.START:
        return (
          <div className="text-[#FFF9F6]">
            <p>勇者！歡迎來到TT資訊王國，我是TT King</p>
            <p className="mb-6">
              在正式加入王國的敏捷騎士團以前，需要請你先了解騎士團的
              <span className="text-[#FFCB2D]">Scrum流程與精神</span>
            </p>
            <p>請跟隨我一起通過Scrum新手村的挑戰任務吧！</p>
          </div>
        );
      case Type.PO:
        return (
          <div className="text-[#FFF9F6]">
            <p className="mb-6">我是TT資訊王國．敏捷騎士團的軍師小敏</p>
            <p className="mb-6">
              用你們的話來說就是PO，也就是
              <span className="text-[#FFCB2D]">產品負責人 Product Owner</span>
            </p>
            <p>
              PO會負責評估產品代辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標，最後排出
              <span className="text-[#FFCB2D]">
                產品待辦清單 Product Backlog。
              </span>
            </p>
          </div>
        );
      case Type.TODO:
        return (
          <div className="text-[#FFF9F6]">
            <p className="mb-6">
              剛好我手邊有一個「人才招募系統」的案子，我才剛列出了「產品需求清單」
            </p>
            <p>
              既然你都來了，來試試看
              <span className="text-[#FFCB2D]">
                調整產品優先度，排出產品代辦清單
              </span>
              吧！
            </p>
          </div>
        );
      default:
        return <></>;
    }
  }, [type]);

  const button = useMemo(() => {
    switch (type) {
      case Type.START:
        return (
          <button
            type="button"
            className="bg-[#FF60FA] px-8 py-6 rounded-2xl"
            onClick={buttonClick}
          >
            開始任務
          </button>
        );
      case Type.PO:
        return (
          <button type="button" onClick={buttonClick}>
            <NextImage src={thirdRightArrow} alt="thirdRightArrow" />{" "}
          </button>
        );
      case Type.TODO:
        return (
          <button
            type="button"
            className="bg-[#FF60FA] px-8 py-6 rounded-2xl"
            onClick={buttonClick}
          >
            開始任務
          </button>
        );
      default:
        return <></>;
    }
  }, [buttonClick, type]);
  return (
    <div className="flex flex-col justify-between bg-[#2B2B2B] h-[640px] rounded-[36px] pt-16">
      <div className="flex justify-center">{content}</div>
      <div className="flex justify-center mb-16">{button}</div>
    </div>
  );
};
