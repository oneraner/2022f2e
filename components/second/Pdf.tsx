import {  useMemo, useRef, useState } from "react";
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
import CreateSign from "./CreateSign";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Pdf = () => {
  const router = useRouter();
  const { pdf } = usePdfStore();
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [mapSize, setMapSize] = useState(0);

  const [signList, setSignList] = useState(false);
  const [createSign, setCreateSign] = useState(false);

  const divRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<Map<number, string>>(new Map());
  const butterRef = useRef(true);

  const pagePosition = useMemo(() => {
    const postionArray: number[] = [];
    pageRef.current.forEach(item => {
      postionArray.push(Number(item));
    });
    return postionArray;
  }, [mapSize]);

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
    <div
      className="w-full flex justify-center h-screen overflow-scroll bg-[#f0f0f0] scroll-smooth"
      ref={divRef}
      onScroll={e => {
        if (!butterRef.current) return;
        const currentPositon = (e.target as Element).scrollTop;
        const readedQuantity = pagePosition.filter(
          item => item < currentPositon
        );
        if (readedQuantity.length === 0) {
          setCurrentPages(1);
          return;
        }
        setCurrentPages(readedQuantity.length);
      }}
    >
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
                if (!divRef.current || currentPages < 1) return;
                butterRef.current = true;
                divRef.current.scrollTo(
                  0,
                  Number(pageRef.current.get(currentPages - 1))
                );
                setCurrentPages(currentPages - 1);
                butterRef.current = false;
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
                if (!divRef.current || currentPages > totalPages) return;
                butterRef.current = true;
                divRef.current.scrollTo(
                  0,
                  Number(pageRef.current.get(currentPages + 1))
                );
                setCurrentPages(currentPages + 1);
                butterRef.current = false;
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
            <button
              type="button"
              className="flex flex-col items-center mr-6"
              onClick={() => setCreateSign(true)}
            >
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
        <div className="bg-[#F0F0F0] rounded-2xl w-[320px]">
          <div className="flex justify-center text-[#1C8B6A] mb-3">
            請選擇簽名
          </div>
          <ul className="mb-3">
            <li>
              <div className="bg-white h-16"></div>
            </li>
          </ul>
          <button type="button" className="flex justify-start text-[#1C8B6A]">
            +新增簽名
          </button>
        </div>
      </Modal>
      <Modal isOpen={createSign} onDismiss={() => setCreateSign(false)}>
        <CreateSign clientX={divRef.current?.clientWidth} clientY={divRef.current?.clientHeight}/>
      </Modal>
    </div>
  );
};

export default Pdf;
