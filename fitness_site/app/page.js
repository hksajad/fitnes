import Navbar from "@/components/module/Navbar/Navbar";
import AboutUs from "@/components/template/About/AboutUs";
import FitPage from "@/components/template/FitPage/FitPage";
import Hero from "@/components/template/HeroPage/Hero";
import Service from "@/components/template/ServicePage/Service";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <AboutUs/>
      <FitPage/>
    </div>
  );
}
