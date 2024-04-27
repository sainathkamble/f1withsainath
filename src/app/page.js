import "./global.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Hero from "./home/page";
import Image from "next/image";


export default function Home() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar/>
      {/* <Image className="h-[82vh] w-full bg-cover -z-10"
        src="/herobg.jpg" width={100} height={100} alt="Background image"></Image> */}
      <Hero />
      <Footer/>
    </div>
  );
}
