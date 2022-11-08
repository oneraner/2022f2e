import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import card1 from "../../public/image/card1.png";
import card2 from "../../public/image/card2.png";
import card3 from "../../public/image/card3.png";

export const Solution = () => {
  return (
    <div className="flex justify-center min-h-screen relative bg-[url('../public/image/brickWall.png')]">
      <div className="max-w-[1440px] w-full flex flex-col pt-24 lg:pt-12">
        <div className="w-full flex mb-7">
          <div className="max-w-[510px] lg:max-w-[1005px] lg:w-[1005px] border-[3px] border-solid border-[#FDFFA9] rounded-[20px] flex flex-col-reverse lg:flex-row items-center justify-between relative px-4 lg:px-24 py-[60px] card__shadow">
            <Image
              src={card1}
              alt="card1"
              className="w-[222px] h-[222px] lg:w-[300px] lg:h-[300px]"
            />
            <div className="p-6 lg:p-3 mb-7 lg:mb-0">
              <p className="text-white mr-2">WEEK1</p>
              <p className="font-jf text-[40px] card__border mb-6">
                The F2E 活動網站設計
              </p>
              <p className="text-[#BDBDBD] mb-4">
                The F2E 的黑客松活動網頁設計
              </p>
              <div className="text-white mb-6">
                <p>#視差滾動</p>
                <p>#版塊設計</p>
              </div>
              <p className="text-white flex justify-center">
                <a href="https://2022.thef2e.com/news/week1">
                  <button className="border border-solid border-[#bdbdbd] py-2.5 px-10 rounded-[10px] font-jf hover:border-[#FDFFA9] hover:text-[#FDFFA9]">
                    查看關卡細節
                  </button>
                </a>
              </p>
            </div>
            <div className="absolute top-4 left-4 lg:top-5 lg:left-5 border-t-[3px] border-l-[3px] border-t-solid border-l-solid border-[#F1BBBB] w-[170px] h-[164px] rounded-tl-[10px]"></div>
            <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 border-b-[3px] border-r-[3px] border-b-solid border-r-solid border-[#9AFFFF] w-[170px] h-[164px] rounded-br-[10px]"></div>
          </div>
        </div>
        <div className="w-full flex justify-end mb-7">
          <div className="max-w-[510px] lg:max-w-[1005px] lg:w-[1005px] border-[3px] border-solid border-[#FDFFA9] rounded-[20px] flex flex-col-reverse lg:flex-row items-center justify-between relative px-4 lg:px-24 py-[60px] card__shadow">
            <Image
              src={card2}
              alt="card2"
              className="w-[222px] h-[222px] lg:w-[300px] lg:h-[300px]"
            />
            <div className="max-w-[430px] p-6 lg:p-3 mb-7 lg:mb-0">
              <p className="text-white mr-2">WEEK2</p>
              <p className="font-jf text-[40px] card__border mb-6">
                今晚，我想來點點簽
              </p>
              <p className="text-[#BDBDBD] mb-4">
                每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web
                版本的簽名服務吧！
              </p>
              <div className="text-white mb-6">
                <p>#Canvas</p>
                <p>#凱鈿行動科技</p>
              </div>
              <p className="text-white flex justify-center">
                <a href="https://2022.thef2e.com/news/week2">
                  <button className="border border-solid border-[#bdbdbd] py-2.5 px-10 rounded-[10px] font-jf hover:border-[#FDFFA9] hover:text-[#FDFFA9]">
                    查看關卡細節
                  </button>
                </a>
              </p>
            </div>
            <div className="absolute top-4 left-4 lg:top-5 lg:left-5 border-t-[3px] border-l-[3px] border-t-solid border-l-solid border-[#F1BBBB] w-[170px] h-[164px] rounded-tl-[10px]"></div>
            <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 border-b-[3px] border-r-[3px] border-b-solid border-r-solid border-[#9AFFFF] w-[170px] h-[164px] rounded-br-[10px]"></div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-[510px] max-w-[510px] lg:max-w-[1005px] lg:w-[1005px] border-[3px] border-solid border-[#FDFFA9] rounded-[20px] flex flex-col-reverse lg:flex-row items-center justify-between relative px-4 lg:px-24 py-[60px] card__shadow">
            <Image
              src={card3}
              alt="card3"
              className="w-[222px] h-[222px] lg:w-[300px] lg:h-[300px]"
            />
            <div className="max-w-[430px] md:w-[430px] p-6 lg:p-3 mb-7 lg:mb-0">
              <p className="text-white mr-2">WEEK3</p>
              <p className="font-jf text-[40px] card__border mb-6">
                Scrum 新手村
              </p>
              <p className="text-[#BDBDBD] mb-4">
                新加坡商鈦坦科技致力於推廣敏捷開發
              </p>
              <div className="text-white mb-6">
                <p>#JS draggable</p>
                <p>#新加坡商鈦坦科技</p>
              </div>
              <p className="text-white flex justify-center">
                <a href="https://2022.thef2e.com/news/week3">
                  <button className="border border-solid border-[#bdbdbd] py-2.5 px-10 rounded-[10px] font-jf hover:border-[#FDFFA9] hover:text-[#FDFFA9]">
                    查看關卡細節
                  </button>
                </a>
              </p>
            </div>
            <div className="absolute top-4 left-4 lg:top-5 lg:left-5 border-t-[3px] border-l-[3px] border-t-solid border-l-solid border-[#F1BBBB] w-[170px] h-[164px] rounded-tl-[10px]"></div>
            <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 border-b-[3px] border-r-[3px] border-b-solid border-r-solid border-[#9AFFFF] w-[170px] h-[164px] rounded-br-[10px]"></div>
          </div>
        </div>
      </div>
      <div className="ball1 absolute top-[.2%] right-[1%] lg:top-[3%]  lg:right-[5%] w-[62px] lg:w-[176px] h-[62px] lg:h-[176px]" />
      <div className="ball2 absolute top-[2%] right-[10%] lg:top-[12%] lg:right-[11%] w-11 lg:w-[123px] h-11 lg:h-[123px]" />
      <div className="ball3 absolute top-[42%] left-[5%] w-[123px] h-[123px]" />
      <div className="ball4 absolute top-[43%] left-[8%] w-[176px] h-[176px]" />
    </div>
  );
};

export default Solution;
