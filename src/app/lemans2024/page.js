import "../global.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";

export default function Home() {
    return (
      <>
      <section className="bg-image h-[100vh] w-screen bg-traparent">
      <Navbar/>
      <iframe id="iframe" src="https://latifistreams.com/channel/iframe1"
      allow="autoplay; encrypted-media" height="80%" width="100%" frameBorder="0" Scrolling="no" allowFullScreen="true"></iframe>
      <Footer/>
      </section>
      </>

    );
  }
  