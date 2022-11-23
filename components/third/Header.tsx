import NextImage from "next/image";
import leftArrow from "../../public/image/thirdLeftArrow.svg";

export const Header = ({ progress, goBack }) => (
  <>
    <div className="w-full pt-4 pl-6">
      <button type="button" className="flex justify-center items-center" onClick={() => goBack()}>
        <NextImage src={leftArrow} alt="leftArrow"/>
        回上一頁
      </button>
    </div>
    <div className="w-full max-w-[1200px] pt-4">
      <div className="bg-[#E0E0E0] rounded-3xl h-6 relative mb-4">
        <div
          className={`absolute top-0 left-0 bg-[#FFCB2D] h-6 rounded-3xl ${progress}`}
        />
      </div>
    </div>
  </>
);
