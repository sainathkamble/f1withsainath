import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <section className="bg-image h-[100vh] w-screen bg-transparent">
      <Navbar/>
      <iframe id="iframe" src="https://streambtw.com/iframe/f1.php" 
      allow="autoplay; encrypted-media" height="80%" width="100%" frameborder="0" Scrolling="no" allowfullscreen=""></iframe>
      <Footer/>
      </section>
      </>
    );
  }
  