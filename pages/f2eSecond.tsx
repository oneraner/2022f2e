import dynamic from "next/dynamic";
import { useState } from "react";
import Footer from "../components/second/Footer";
import Button from "../components/second/Button";
import Header from "../components/second/Header";
import Modal from "../components/second/Modal";
import Upload from "../components/second/Upload";
import Image from "next/image";
import floor from "../public/image/floor.png";
import pottedPlants from "../public/image/pottedPlants.png";
import seed from "../public/image/seed.png";
import girl from "../public/image/secondGirl.png";
import girl1 from "../public/image/secondGirl1.png";
import girl2 from "../public/image/secondGirl2.png";
import man from "../public/image/secondMan.png";
import { useRouter } from 'next/router'



export const Canvas = () => {
  const router = useRouter()
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[calc(100vh_-_84px_-_48px)] relative">
        <div className="w-full relative max-w-[1036px] h-[558px] flex bg-[#F0F0F094]/[38] rounded-[34px]">
          <button className="absolute -top-20 right-4 border-2 border-solid border-[#1C8B6A] text-[#1C8B6A] rounded-2xl py-2 px-8" onClick={()=>{router.push('/history')}}>
            歷史紀錄
          </button>
          <div className="w-1/2">
            <div className="bg-gradient-to-r from-[#35A483] to-[#077854] text-2xl text-white w-56 h-[62px] flex justify-center items-center rounded-tl-[34px] rounded-br-[34px] mb-14">
              免費試用版
            </div>
            <div>
              <h1 className="text-5xl text-[#35A483] leading-[72px] font-bold mb-1.5 ml-11">
                小綠簽
              </h1>
              <div className="text-[#424242] text-lg ml-11">
                <p>護樹、永續、減碳的綠色生活</p>
                <p>響應環保無紙化電子簽署，</p>
                <p>省時便利又環保。</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 pt-7">
            <Upload />
          </div>
          <div className="absolute -bottom-10 right-0">
            <Image src={floor} alt="floor" />
            <Image
              src={pottedPlants}
              className="absolute bottom-12 right-48"
              alt="pottedPlants"
            />
            <Image
              src={seed}
              className="absolute bottom-10 right-48"
              alt="seed"
            />
            <Image
              src={girl}
              className="absolute bottom-10 right-[272px]"
              alt="girl"
            />
            <Image
              src={girl1}
              className="absolute bottom-10 right-[440px]"
              alt="girl"
            />
            <Image
              src={girl2}
              className="absolute bottom-16 right-24 z-10"
              alt="girl"
            />
            <Image
              src={man}
              className="absolute bottom-40 right-16"
              alt=" man"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Canvas;
