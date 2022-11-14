import Image from "next/image";
import greenLogo from "../../public/image/greenLogo.png";
import rectangle from "../../public/image/rectangle.png";

export const Header = () => (
  <header className="flex justify-between relative">
    <div className="flex text-[#424242] items-end justify-center h-14 ml-10 mt-7">
      <Image src={greenLogo} className="h-14" alt="greenLogo" />
      GNSign
    </div>
    <Image src={rectangle} className="absolute top-0 right-0" alt="rectangle" />
  </header>
);

export default Header;
