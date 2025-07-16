import React from 'react';
import Image from "next/image";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full h-[70px] bg-white top-0 left-0 relative">
            <div className="flex items-center h-full ml-4 lg:ml-20">
                <Image
                    src="/logo.jpg"
                    alt="Supreme Group Logo"
                    width={50}
                    height={50}
                    className="w-12 h-12"
                    priority
                />
                <div className="ml-2">
                    <span className="block font-bold text-xl leading-6 text-[#2175bb]">SUPREME</span>
                    <span className="block font-bold leading-5 text-[#4bb3e7]">GROUP</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;