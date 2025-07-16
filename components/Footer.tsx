import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white to-[#e6f0fa] pt-12 pb-6 text-[#222] relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo at top-left */}
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

        {/* Footer columns */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-between gap-10 text-center sm:text-left lg:mx-40">
          {/* Applications */}
          <div>
            <h3 className="font-bold mb-8 text-base tracking-wide">APPLICATIONS</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-[#2175bb] transition">Apparel</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Automotive</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Filtration</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Customised Nonwoven</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-8 text-base tracking-wide">COMPANY</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-[#2175bb] transition">Who We Are</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Global Competency</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Innovation</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">ESG Impact</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-bold mb-8 text-base tracking-wide">MORE</h3>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-[#2175bb] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#2175bb] transition">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-8 text-base tracking-wide">FOLLOW US</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="hover:text-[#2175bb] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4 text-sm lg:mx-40">
          <span className="text-[#222]">&copy;{new Date().getFullYear()}. All Rights Reserved.</span>
          <span className="text-[#222] text-center md:text-right">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </span>
        </div>
      </div>
    </footer>
  );
}
