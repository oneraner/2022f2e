import { useEffect } from "react";
import { gsap } from "gsap";

export const Description = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#description",
        start: "top center",
        end: "top top+=400",
        scrub: 1,
      },
      defaults: { duration: 10 },
    });
    tl.fromTo("#time", { opacity: 0 }, { opacity: 1 });
    tl.fromTo("#gallery", { opacity: 0 }, { opacity: 1, delay: 5 });
    tl.fromTo("#game", { opacity: 0 }, { opacity: 1, delay: 10 });
  }, []);

  return (
    <div className="flex justify-center min-h-screen relative bg-[#061b34] overflow-hidden">
      <div className="max-w-[1440px] w-full flex flex-col items-center pt-12 lg:pt-24">
        <h3 id="description" className="h3 text-2xl lg:text-5xl mb-[70px] lg:mb-28">
          活動說明
        </h3>
        <div className="w-full flex lg:flex-col pb-20 lg:pb-0">
          <div className="h-full lg:h-2 bg-[#F19AFF] w-2 lg:w-full ml-16 lg:ml-0" />
          <div className="w-full flex flex-col lg:flex-row justify-evenly pb-[84px] lg:pb-0">
            <div
              id="time"
              className="flex flex-col items-start lg:items-center ml-12 lg:ml-0 relative pt-[84px]"
            >
              <div className="absolute top-1/2 lg:-top-[34px] -left-8 lg:left-1/2 -translate-x-1/2 border-solid border-t-[24px] lg:border-t-[30px] border-b-[24px] lg:border-b-[30px] border-l-[41px] lg:border-l-[52px] border-t-transparent border-r-transparent border-b-transparent border-l-[#f19aff]" />
              <p className="text-white text-3xl lg:text-[40px] mb-9">
                報名時間
              </p>
              <p className="text-white">10/13~10/30</p>
              <p className="text-white">截止前可修改組別</p>
            </div>
            <div
              id="gallery"
              className="flex flex-col items-start lg:items-center ml-12 lg:ml-0 relative pt-[84px]"
            >
               <div className="absolute top-1/2 lg:-top-[34px] -left-8 lg:left-1/2 -translate-x-1/2 border-solid border-t-[24px] lg:border-t-[30px] border-b-[24px] lg:border-b-[30px] border-l-[41px] lg:border-l-[52px] border-t-transparent border-r-transparent border-b-transparent border-l-[#f19aff]" />
              <p className="text-white text-3xl lg:text-[40px] mb-9">
                登錄作品
              </p>
              <p className="text-white">10/31~11/28</p>
              <p className="text-white">10/31(一) UI、團體組開賽</p>
              <p className="text-white">11/7(一) 前端組開賽</p>
            </div>
            <div
              id="game"
              className="flex flex-col items-start lg:items-center ml-12 lg:ml-0 relative pt-[84px]"
            >
               <div className="absolute top-1/2 lg:-top-[34px] -left-8 lg:left-1/2 -translate-x-1/2 border-solid border-t-[24px] lg:border-t-[30px] border-b-[24px] lg:border-b-[30px] border-l-[41px] lg:border-l-[52px] border-t-transparent border-r-transparent border-b-transparent border-l-[#f19aff]" />
              <p className="text-white text-3xl lg:text-[40px] mb-9">
                額外競賽
              </p>
              <p className="text-white">主題豐厚獎金等著你</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -left-16 -rotate-45 bg-[#9affff] rounded-[10px] w-[184px] h-1.5" />
      <div className="absolute top-0 left-0 -rotate-45 bg-[#F19AFF] rounded-[10px] w-[184px] h-1.5" />
      <div className="absolute top-40 -left-24 -rotate-45 bg-[#FDFF9A] rounded-[10px] w-[184px] h-1.5" />
      <div className="absolute bottom-32 right-16  -rotate-45 bg-[#9affff] rounded-[10px] w-[184px] h-1.5" />
      <div className="absolute bottom-40 -right-16 -rotate-45 bg-[#F19AFF] rounded-[10px] w-[184px] h-1.5" />
      <div className="absolute bottom-0 right-10  -rotate-45 bg-[#FDFF9A] rounded-[10px] w-[184px] h-1.5" />
    </div>
  );
};

export default Description;
