import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <section className="bg-image h-[90vh] w-screen bg-transparent">
      <Navbar/>
      <iframe src="https://latifistreams.com/channel/raw2?url=aHR0cHM6Ly9pbnN0MS5pZ25vcmVzLnRvcC9qcy9mMS1xdWFsaWZ5aW5nLWYxLW1haW4tcmFjZS8xL3BsYXlsaXN0Lm0zdTg=" 
      allow="autoplay encrypted-media" height="90%" width="100%" scrolling="no" allowfullscreen=""></iframe>
      </section>
      <Footer/>
      </>
    );
  }
  