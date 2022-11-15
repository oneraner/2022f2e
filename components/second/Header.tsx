import Image from "next/image";
import { useRouter } from "next/router";
import greenLogo from "../../public/image/greenLogo.png";
import rectangle from "../../public/image/rectangle.png";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between relative">
      <button
        className="flex text-[#424242] items-end justify-center h-14 ml-10 mt-7"
        onClick={() => router.push("/f2eSecond")}
      >
        <Image src={greenLogo} className="h-14" alt="greenLogo" />
        GNSign
      </button>
      <Image
        src={rectangle}
        className="absolute top-0 right-0"
        alt="rectangle"
      />
    </header>
  );
};

export default Header;
