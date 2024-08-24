import "../global.css";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

export default function Home() {
    return (
      <>
      <section className="bg-image h-[100vh] w-screen bg-traparent">
      <Navbar/>
      <iframe id="iframe" src="https://mazespin.live/channel/raw?id=TSN5CA"
      allow="autoplay; encrypted-media" height="80%" width="100%" frameBorder="0" Scrolling="no" allowFullScreen="true"></iframe>
      <Footer/>
      </section>
      </>
    );
  }
  