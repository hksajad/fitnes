import Navbar from "@/components/module/Navbar/Navbar";
import Hero from "@/components/template/HeroPage/Hero";
import Service from "@/components/template/ServicePage/Service";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
    </div>
  );
}
