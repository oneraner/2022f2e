import React, { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import leftHand from "../../public/image/leftHand.png";
import rightHand from "../../public/image/rightHand.png";
import certificateOfMerit from "../../public/image/certificateOfMerit.png";
import base from "../../public/image/base.png";
import money from "../../public/image/money.png";
import gold from "../../public/image/gold.png";
import medalGold from "../../public/image/medalGold.png";
import medalGray from "../../public/image/medalGray.png";
import leftArrow from "../../public/image/leftArrow.svg";
import rightArrow from "../../public/image/rightArrow.svg";
import carpet from "../../public/image/carpet.png";
import AnimatedNumber from "animated-number-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const Game = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex justify-center min-h-screen relative bg-[url('../public/image/brickWall.png')]">
      <div className="max-w-[1440px] w-full flex flex-col items-center pt-24">
        <div className="flex justify-center mb-20">
          <Image src={leftHand} alt="leftHand" className="mr-12" />
          <h3 className="flex flex-col justify-center mr-12">
            <p className="h3 text-5xl">區區修煉已經無法滿足了嗎？</p>
            <p className="h3 text-5xl text-center">
              還有<span className="text-6xl">比賽</span>等著你！
            </p>
          </h3>
          <Image src={rightHand} alt="rightHand" />
        </div>
        <div className="max-w-[1280px] flex flex-col border border-solid border-[#FFBFFC] p-8 rounded-[20px]">
          <p className="text-white mb-4"> ** 評審機制 **</p>
          <p className="text-white">
            初選：將由六角學院前端、UI 評審進行第一波篩選。
          </p>
          <p className="text-white">
            決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
            由評審進行直播公布名單！
          </p>
        </div>
        <p>獎項</p>
        <Swiper
          initialSlide={1}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          navigation={{ prevEl: "navigationPrev", nextEl: "navigationNext" }}
          modules={[Navigation, Autoplay]}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 3000,
          }}
          className="w-full h-[500px] relative"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center justify-center h-[350px] ${
                  isActive ? "scale-120" : "scale-75"
                }`}
                onMouseEnter={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.stop();
                }}
                onMouseLeave={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.start();
                }}
              >
                <p
                  className={`flex justify-center items-center text-[40px] text-center mb-8 ${
                    isActive ? "text-[#FDFFA9]" : "text-[#bdbdbd]"
                  }`}
                >
                  <Image src={isActive ? medalGold : medalGray} alt="medal" />
                  團體企業獎
                </p>
                <div className="flex">
                  <Image src={gold} alt="gold" />
                  {isActive && (
                    <div className="flex flex-col justify-center items-center ml-6">
                      <p className="flex text-white text-3xl mr-4">
                        NT
                        <AnimatedNumber
                          value={isActive ? 3000 : 0}
                          formatValue={(value: number) => {
                            const numberToString = Math.floor(value).toString();
                            const regex = /(\d)(?=(?:\d{3})+$)/g;
                            return numberToString.replace(regex, "$1,");
                          }}
                          duration={2000}
                          includeComma
                        />
                        /位
                      </p>
                      <p className="text-[#bdbdbd]">(共六位)</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center justify-center ${
                  !isActive && "h-[350px]  scale-75"
                }`}
                onMouseEnter={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.stop();
                }}
                onMouseLeave={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.start();
                }}
              >
                <p
                  className={`flex justify-center items-center text-[40px] text-center mb-8 ${
                    isActive ? "text-[#FDFFA9]" : "text-[#bdbdbd]"
                  }`}
                >
                  <Image src={isActive ? medalGold : medalGray} alt="medal" />
                  初選佳作
                </p>
                <div className="flex justify-center">
                  <Image
                    src={certificateOfMerit}
                    alt="certificateOfMerit"
                    className="mb-4"
                  />
                  {isActive && (
                    <div className="flex flex-col justify-center items-center ml-6">
                      <p className="text-white text-3xl">數位獎狀</p>
                      <p className="text-[#bdbdbd]">(共六十位)</p>
                    </div>
                  )}
                </div>
                {isActive && <Image src={base} alt="base" />}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center justify-center h-[350px] ${
                  isActive ? "scale-120" : "scale-75"
                }`}
                onMouseEnter={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.stop();
                }}
                onMouseLeave={() => {
                  if (!swiperRef.current) return;
                  swiperRef.current.autoplay.start();
                }}
              >
                <p
                  className={`flex justify-center items-center text-[40px] text-center mb-8 ${
                    isActive ? "text-[#FDFFA9]" : "text-[#bdbdbd]"
                  }`}
                >
                  <Image src={isActive ? medalGold : medalGray} alt="medal" />
                  個人企業獎
                </p>
                <div className="flex">
                  <Image src={money} alt="money" />
                  {isActive && (
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-white text-3xl mr-4">
                        NT
                        <AnimatedNumber
                          value={isActive ? 10000 : 0}
                          formatValue={(value: number) => {
                            const numberToString = Math.floor(value).toString();
                            const regex = /(\d)(?=(?:\d{3})+$)/g;
                            return numberToString.replace(regex, "$1,");
                          }}
                          duration={1000}
                          includeComma
                        />
                        /組
                      </p>
                      <p className="text-[#bdbdbd]">(共三組)</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </SwiperSlide>
          <button
            type="button"
            className="navigationPrev absolute top-1/3 left-4 -translate-y-1/2 z-10"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={leftArrow} alt="leftArrow" />
          </button>
          <button
            type="button"
            className="navigationNext absolute top-1/3 right-4 -translate-y-1/2 z-10"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={rightArrow} alt="rightArrow" />
          </button>
          <Image src={carpet} alt="carpet" className="absolute bottom-0 left-0" />
        </Swiper>
      </div>
    </div>
  );
};

export default Game;
