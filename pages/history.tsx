import Footer from "../components/second/Footer";
import Header from "../components/second/Header";
import Image from "next/image";
import bigPottedPlant from "../public/image/bigPottedPlant.png";

export const History = () => (
  <>
    <Header />
    <div className="flex flex-col justify-center items-center h-[calc(100vh_-_84px_-_48px)] relative">
      <Image src={bigPottedPlant} className="mb-8" alt="bigPottedPlant" />
      尚無任何紀錄
    </div>
    <Footer />
  </>
);
export default History;
