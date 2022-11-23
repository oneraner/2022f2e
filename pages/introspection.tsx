import { Header } from "../components/third/Header";
import NextImage from "next/image";
import rightArrow from "../public/image/thirdRightArrow.svg";
import blueRightArrow from "../public/image/thirdBlueRightArrow.png";
import { useRouter } from "next/router";
import smSmall from "../public/image/smSmall.png";
import poSmall from "../public/image/poSmall.png";
import dev1Small from "../public/image/dev1Small.png";
import dev2Small from "../public/image/dev2Small.png";
import { useMemo, useState } from "react";

enum Mode {
  SM_FIRST = "smFirst",
  SM_SECOND = "smSecond",
  PO_FIRST = "poFirst",
  PO_SECOND = "poSecond",
  DEV_FIRST = "devFirst",
  DEV_SECOND = "devSecond",
}

export const Introspection = () => {
  const router = useRouter();
  const [mode, setMode] = useState(Mode.SM_FIRST);

  const content = useMemo(() => {
    switch (mode) {
      case Mode.SM_FIRST:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#FFCB2D] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>嗨！你是新來的前端勇者吧！</p>
                <p>
                  我是祭司小捷，也就是
                  <span className="text-[#FFCB2D]"> Scrum Master</span>
                  ，我的工作主要是促成開發騎士們的協作、引導團隊進行
                  <span className="text-[#FFCB2D]">自省會議</span>
                  ，以及提升騎士團團員對Scrum的了解。
                </p>
              </div>
              <button type="button" onClick={() => setMode(Mode.PO_FIRST)}>
                <NextImage src={rightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#FFCB2D] mr-[20%]" />
          </>
        );
      case Mode.SM_SECOND:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#FFCB2D] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>這兩位是小碼和小扣，是團隊裡的開發騎士唷～</p>
                <p>
                  目前我們團隊一次Sprint是兩週的時間，依照我的觀察，目前團隊可以負擔的{" "}
                  <span className="text-[#FFCB2D]">點數(Sprint Point)</span>
                  是20點左右。
                </p>
              </div>
              <button type="button" onClick={() => setMode(Mode.DEV_FIRST)}>
                <NextImage src={rightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#FFCB2D] mr-[20%]" />
          </>
        );
      case Mode.PO_FIRST:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#FF60FA] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>
                  產品代辦清單好了之後，我們來召集SM和開發騎士們共同召開{" "}
                  <span className="text-[#FFCB2D]">短衝規劃會議</span> (Sprint
                  Planning)。
                </p>
              </div>
              <button type="button" onClick={() => setMode(Mode.PO_SECOND)}>
                <NextImage src={blueRightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#FF60FA] mr-[60%]" />
          </>
        );
      case Mode.PO_SECOND:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#FF60FA] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>
                  <span className="text-[#FFCB2D]"> 短衝即是一個迭代</span>
                  ，具有<span className="text-[#FFCB2D]"> 固定時間限制</span>
                  ，我們會在這個會議中，決定要完成哪些工作事項來到商業需求，列出
                  <span className="text-[#FFCB2D]">短衝待辦清單</span>(Sprint
                  Backlog)，並由開發騎士們在接下來的產品開發週期裡執行。
                </p>
              </div>
              <button type="button" onClick={() => setMode(Mode.SM_SECOND)}>
                <NextImage src={rightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#FF60FA] mr-[60%]" />
          </>
        );
      case Mode.DEV_FIRST:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#5137FF] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>
                  欸新來的，你應該不知道點數是甚麼意思吧哈哈
                  讓我來跟你介紹一下吧～Sprint Point目的是為了
                  <span className="text-[#FFCB2D]">衡量速度</span>，是用
                  <span className="text-[#FFCB2D]">
                    任務大概將花費的時間來預估出相對的點數。
                  </span>
                </p>
              </div>
              <button type="button" onClick={() => setMode(Mode.DEV_SECOND)}>
                <NextImage src={rightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#5137FF] ml-[20%]" />
          </>
        );
      case Mode.DEV_SECOND:
        return (
          <>
            <div className="flex justify-evenly h-max mx-8 border border-solid border-[#5137FF] text-[#FFF9F6] mt-20 p-6 rounded-[24px]">
              <div className="mr-4">
                <p>
                  小碼哥說的沒錯，我已經把剛剛討論好的點數標上去囉～
                  你來試著把任務排到短衝清單上吧！
                </p>
                <p>
                  BTW，我們平常管理任務是使用
                  <span className="text-[#FFCB2D]">Jira</span>
                  這套軟體，你有時間記得先去註冊和熟悉一下唷！
                </p>
              </div>
              <button type="button" onClick={() => router.push("sprint")}>
                <NextImage src={rightArrow} alt="rightArrow" />
              </button>
            </div>
            <div className="w-1 h-32 bg-[#5137FF] ml-[60%]" />
          </>
        );
      default:
        return <></>;
    }
  }, [mode, router]);

  const goBack = () => {
    console.log("mode", mode);
    switch (mode) {
      case Mode.SM_FIRST:
        router.push("/dragAndDrop");
        break;
      case Mode.SM_SECOND:
        setMode(Mode.PO_SECOND);
        break;
      case Mode.PO_FIRST:
        setMode(Mode.SM_FIRST);
        break;
      case Mode.PO_SECOND:
        setMode(Mode.PO_FIRST);
        break;
      case Mode.DEV_FIRST:
        setMode(Mode.SM_SECOND);
        break;
      case Mode.DEV_SECOND:
        setMode(Mode.DEV_FIRST);
        break;
      default:
        router.push("/dragAndDrop");
    }
  };

  return (
    <div className="flex flex-col items-center relative h-screen overflow-auto">
      <Header progress={"w-[50%]"} goBack={goBack} />
      <div className="relative max-w-[1200px] w-full flex flex-col items-center mb-8 bg-[#2B2B2B] h-[537px] rounded-[24px]">
        {content}
        <div className="w-full flex justify-evenly absolute -bottom-1/2 left-0 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <NextImage src={poSmall} alt="poSmall" className="mb-6" />
            <p>PO 小敏</p>
          </div>
          <div className="flex flex-col items-center">
            <NextImage src={smSmall} alt="smSmall" className="mb-6" />
            <p>SM 小捷</p>
          </div>
          <div className="flex flex-col items-center">
            <NextImage src={dev1Small} alt="dev1Small" className="mb-6" />
            <p>開發 小碼</p>
          </div>
          <div className="flex flex-col items-center">
            <NextImage src={dev2Small} alt="dev2Small" className="mb-6" />
            <p>開發 小扣</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introspection;
