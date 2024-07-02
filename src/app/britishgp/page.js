import "../global.css";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

export default function Home() {
    return (
      <>
      <section className="bg-image h-[100vh] w-screen bg-traparent">
      <Navbar/>
      <iframe id="iframe" src="https://latifistreams.com/channel/raw2?url=aHR0cHM6Ly91cy5zY29yZTgwNi5jYy91a19zc2YxL2luZGV4Lm0zdTg="
      allow="autoplay; encrypted-media" height="80%" width="100%" frameBorder="0" Scrolling="no" allowFullScreen="true"></iframe>
      <Footer/>
      </section>
      </>

    );
  }
  