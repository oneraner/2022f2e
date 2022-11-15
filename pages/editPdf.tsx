import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import greenLogo from "../public/image/greenLogo.png";

const Pdf = dynamic(() => import("../components/second/Pdf"), {
  ssr: false,
});

export const Editpdf = () => {
  const router = useRouter();
  const [currentPages, setCurrentPages] = useState(1);
  const [pagePosition, setPagePositon] = useState([]);

  return (
    <div
      className="flex flex-col items-center bg-[#f0f0f0] h-screen overflow-scroll"
      onScroll={(e) => {
        const currentPositon = (e.target as Element).scrollTop;
        const readedQuantity = pagePosition.filter(
          (item) => item < currentPositon
        );
        if (readedQuantity.length === 0) {
          setCurrentPages(1);
          return;
        }
        setCurrentPages(readedQuantity.length);
      }}
    >
      <div className="w-full">
        <button
          className="flex text-[#424242] items-end justify-center h-14 ml-10 mt-7"
          onClick={() => router.push("/f2eSecond")}
        >
          <Image src={greenLogo} className="h-14" alt="greenLogo" />
          GNSign
        </button>
      </div>
      <Pdf pages={currentPages} setPagePositon={setPagePositon} />
    </div>
  );
};

export default Editpdf;
