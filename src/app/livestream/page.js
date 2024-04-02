import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <Navbar/>
       <p className="h-[80vh]">This is a streaming page</p>
      <Footer/>
      </>
    );
  }
  