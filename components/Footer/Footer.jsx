// components/Footer/Footer.tsx

import Image from "next/image";
import FooterColumn from "./FooterColumn";
import { footerData } from "./footerData";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-[#e6f0fa] pt-12 pb-6 text-[#222] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-10 lg:ml-40">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Supreme Group Logo"
              width={56}
              height={56}
              className="w-14 h-14"
              priority
            />
            <div>
              <span className="block font-bold text-2xl leading-6 text-[#2175bb]">SUPREME</span>
              <span className="block font-bold text-lg leading-5 text-[#4bb3e7]">GROUP</span>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-between gap-10 text-center sm:text-left lg:mx-40">
          {footerData.map((column, idx) => (
            <FooterColumn key={idx} title={column.title} links={column.links} />
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4 text-sm lg:mx-40">
          <span className="text-[#222]">&copy;{new Date().getFullYear()}. All Rights Reserved.</span>
          <span className="text-[#222] text-center md:text-right">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
