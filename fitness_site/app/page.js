import Footer from "@/components/module/Footer/Footer";
import Navbar from "@/components/module/Navbar/Navbar";
import AboutUs from "@/components/template/About/AboutUs";
import Blog from "@/components/template/Blog/Blog";
import FitPage from "@/components/template/FitPage/FitPage";
import Hero from "@/components/template/HeroPage/Hero";
import Service from "@/components/template/ServicePage/Service";
import Social from "@/components/template/Social/Social";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <AboutUs/>
      <FitPage/>
      <Blog/>
      <Social/>
      <Footer/>
    </div>
  );
}
