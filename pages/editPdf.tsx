import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import greenLogo from "../public/image/greenLogo.png";

const Pdf = dynamic(() => import("../components/second/Pdf"), {
  ssr: false,
});

export const Editpdf = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full">
        <button
          className="flex text-[#424242] items-end justify-center h-14 ml-10 mt-7"
          onClick={() => router.push("/f2eSecond")}
        >
          <Image src={greenLogo} className="h-14" alt="greenLogo" />
          GNSign
        </button>
      </div>
      <Pdf />
    </>
  );
};

export default Editpdf;
