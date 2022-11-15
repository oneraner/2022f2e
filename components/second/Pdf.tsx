import { useEffect, useRef, useState } from "react";
import usePdfStore from "../../zustand/store";
import { Document, Page, pdfjs } from "react-pdf";
import { useRouter } from "next/router";
import Image from "next/image";
import rightArrow from "../../public/image/rightArrow.png";
import leftArrow from "../../public/image/leftArrow.png";
import zoomIn from "../../public/image/zoomIn.svg";
import zoomOut from "../../public/image/zoomOut.svg";
import pancel from "../../public/image/pancel.svg";
import hook from "../../public/image/hook.svg";
import calendar from "../../public/image/calendar.svg";
import text from "../../public/image/text.svg";
import Button from "./Button";
import Modal from "./Modal";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Pdf = ({ pages, setPagePositon }) => {
  const router = useRouter();
  const { pdf } = usePdfStore();
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [signList, setSignList] = useState(false);
  const [mapSize, setMapSize] = useState(0);

  const divRef = useRef(null);
  const pageRef = useRef<Map<number, string>>(new Map());

  useEffect(() => {
    const postionArray: number[] = [];
    pageRef.current.forEach((item) => {
      postionArray.push(Number(item));
    });
    setPagePositon(postionArray);
  }, [mapSize, setPagePositon]);

  useEffect(() => {
    setCurrentPages(pages);
  }, [pages]);

  const setPageRef = (index: number) => (node: any) => {
    const map = pageRef.current;
    if (node) {
      map.set(index, node.pageElement.current.offsetTop);
      setMapSize(node.pageElement.current.offsetTop);
    } else {
      map.delete(index);
    }
  };

  return (
    <div className="bg-[#f0f0f0]" ref={divRef}>
      <Document
        file={pdf}
        className="pb-28"
        onLoadSuccess={({ numPages }) => {
          setTotalPages(numPages);
        }}
        noData={
          <div className="flex flex-col justify-center items-center h-screen">
            <p className="mb-4">目前沒有上傳的 PDF，請重新上傳</p>
            <Button onClick={() => router.push("/f2eSecond")}>回到首頁</Button>
          </div>
        }
      >
        {Array.from({ length: totalPages }, (_item, index) => (
          <Page
            key={index + 1}
            pageNumber={index + 1}
            ref={setPageRef(index + 1)}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
      <div className="fixed bottom-0 left-0 w-full bg-white">
        <ul className="flex justify-center ">
          <li className="flex justify-around items-center px-4 my-4 h-14 bg-white shadow-[1px_4px_6px_rgba(0,0,0,0.3)] rounded-2xl mr-2.5">
            <button
              type="button"
              className="mr-8"
              onClick={() => {
                console.log(
                  "pageRef.current[currentPages - 1]",
                  pageRef.current.get(currentPages - 1),
                  typeof pageRef.current.get(currentPages - 1)
                );
                window.scrollTo({
                  top: Number(pageRef.current.get(currentPages - 1)),
                  behavior: "smooth",
                });
                setCurrentPages(currentPages - 1);
              }}
            >
              <Image src={leftArrow} alt="leftArrow" />
            </button>
            <p className="mr-8">
              {currentPages} / {totalPages}
            </p>
            <button
              type="button"
              onClick={() => {
                setCurrentPages(currentPages + 1);
              }}
            >
              <Image src={rightArrow} alt="rightArrow" />
            </button>
          </li>
          <li className="flex justify-around items-center px-4 my-4 h-14 bg-white shadow-[1px_4px_6px_rgba(0,0,0,0.3)] rounded-2xl mr-14">
            <button type="button" className="mr-8">
              <Image src={zoomIn} alt="zoomIn" />
            </button>
            <p className="mr-8">100%</p>
            <button type="button">
              <Image src={zoomOut} alt="zoomOut" />
            </button>
          </li>
          <li className="flex justify-around items-center mr-20">
            <button type="button" className="flex flex-col items-center  mr-6">
              <Image src={pancel} alt="pancel" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">簽名</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <Image src={hook} alt="hook" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">勾選</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <Image src={calendar} alt="calendar" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">日期</span>
            </button>
            <button type="button" className="flex flex-col items-center mr-6">
              <Image src={text} alt="text" className="mb-1" />
              <span className="text-xs text-[#B7B7B7]">插入文字</span>
            </button>
          </li>
          <li className="flex justify-center items-center">
            <Button className="px-14 text-lg">完成簽署</Button>
          </li>
        </ul>
      </div>
      <Modal isOpen={signList} onDismiss={() => setSignList(false)}>
        <div></div>
      </Modal>
    </div>
  );
};

export default Pdf;
