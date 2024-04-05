import "./global.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Hero from "./home/page";


export default function Home() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
