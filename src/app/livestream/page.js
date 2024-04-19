import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <Navbar/>
      <section className="h-[82vh] w-screen bg-slate-950">
      <iframe src="https://wikisport.se/strm/30.php" 
      allow="autoplay; encrypted-media" height="100%" width="100%" framebborder="0" scrolling="no" allowFullScreen></iframe>
      </section>
      <Footer/>
      </>
    );
  }
  