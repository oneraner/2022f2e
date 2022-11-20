import Image from "next/image";
import tree from "../../public/image/secondTree.png";
import block from "../../public/image/secondBlock.png";

export const Footer = () => (
  <footer className="relative w-full flex justify-end bottom-0">
    <Image src={tree} className="absolute bottom-0 left-0 z-20" alt="tree" />
    <Image src={block} className="absolute -top-44 left-0 z-10" alt="block" />
    <p className="text-xs p-4">小綠簽 © Code: Jeff Chao / Design: KT</p>
  </footer>
);

export default Footer;
