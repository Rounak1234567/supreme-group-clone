import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GetInTouch />
      <Footer />
    </div>
  );
}
