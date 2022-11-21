import { useRef, useState } from "react";
import usePdfStore from "../../zustand/store";
import { pdfjs } from "react-pdf";
import NextImage from "next/image";
import rightArrow from "../../public/image/rightArrow.png";
import leftArrow from "../../public/image/leftArrow.png";
import zoomIn from "../../public/image/zoomIn.svg";
import zoomOut from "../../public/image/zoomOut.svg";
import pancel from "../../public/image/pancel.svg";
import hook from "../../public/image/hook.svg";
import calendar from "../../public/image/calendar.svg";
import text from "../../public/image/text.svg";
import Button from "./Button";
import CreateSign from "./CreateSign";
import SelectSign from "./SelectSign";
import ViewPdf from "./viewPdf";
import jsPDF from "jspdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Pdf = () => {
  const { totalPage, pageImage } = usePdfStore();

  const [currentPages, setCurrentPages] = useState(1);
  const [signList, setSignList] = useState(false);
  const [createSign, setCreateSign] = useState(false);
  const [currentSign, setCurrentSign] = useState("");
  const [selectSign, setSelectSign] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={divRef}>
        <ViewPdf setPage={currentPages} />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ul className="flex justify-center ">
          <li className="flex justify-around items-center px-4 my-4 h-14 bg-white shadow-[1px_4px_6px_rgba(0,0,0,0.3)] rounded-2xl mr-2.5">
            <button
              type="button"
              className="mr-8"
              onClick={() => {
                if (currentPages - 1 < 1) return;
                setCurrentPages(currentPages - 1);
              }}
            >
              <NextImage src={leftArrow} alt="leftArrow" />
            </button>
            <p className="mr-8">
              {currentPages} / {totalPage}
            </p>
            <button
              type="button"
              onClick={() => {
                if (currentPages + 1 > (totalPage ?? 0)) return;
                setCurrentPages(currentPages + 1);
              }}
            >
              <NextImage src={rightArrow} alt="rightArrow" />
            </button>
          </li>
          <li className="flex justify-around items-center px-4 my-4 h-14 bg-white shadow-[1px_4px_6px_rgba(0,0,0,0.3)] rounded-2xl mr-14">
            <button type="button" className="mr-8">
              <NextImage src={zoomIn} alt="zoomIn" />
            </button>
            <p className="mr-8">100%</p>
            <button type="button">
              <NextImage src={zoomOut} alt="zoomOut" />
            </button>
          </li>
          <li className="flex justify-around items-center mr-20">
            <button
              type="button"
              className="flex flex-col items-center mr-6"
              onClick={() => setSignList(true)}
            >
              <NextImage src={pancel} alt="pancel" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">簽名</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <NextImage src={hook} alt="hook" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">勾選</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <NextImage src={calendar} alt="calendar" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">日期</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <NextImage src={text} alt="text" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">插入文字</span>
            </button>
          </li>
          <li className="flex justify-center items-center">
            <Button
              className="px-14 text-lg"
              onClick={() => {
                const jsPdf = new jsPDF({});
                const pageOneData = pageImage.get(1) ?? "";
                jsPdf.addImage(
                  pageOneData,
                  "png",
                  0,
                  0,
                  jsPdf.internal.pageSize.width,
                  jsPdf.internal.pageSize.height
                );
                for (let i = 1; i < (totalPage ?? 0); i++) {
                  jsPdf.addPage();
                  jsPdf.setPage(i + 1);
                  const pageIData = pageImage.get(i + 1) ?? "";
                  jsPdf.addImage(
                    pageIData,
                    "png",
                    0,
                    0,
                    jsPdf.internal.pageSize.width,
                    jsPdf.internal.pageSize.height
                  );
                }
                jsPdf.save("download.pdf");
              }}
            >
              完成簽署
            </Button>
          </li>
        </ul>
      </div>
      <SelectSign
        isOpen={signList}
        onDismiss={() => setSignList(false)}
        buttonClick={() => setCreateSign(true)}
        selectClick={(item) => setCurrentSign(item)}
      />
      <CreateSign
        isOpen={createSign}
        onDismiss={() => setCreateSign(false)}
        clientX={divRef.current?.clientWidth}
        clientY={divRef.current?.clientHeight}
      />
    </>
  );
};

export default Pdf;
