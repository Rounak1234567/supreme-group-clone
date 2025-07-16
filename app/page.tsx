import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection";
import GetInTouch from "@/components/GetInTouch";
import AboutSection from "@/components/AboutSection/AboutSection";

export const metadata = {
  title: 'Supreme Group Clone',
};

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
