import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <Navbar/>
      <section className="h-[80vh] w-screen bg-slate-950">
      <iframe src="https://latifistreams.com/channel/raw?url=aHR0cHM6Ly9saW5lYXIwMzQtZ2ItZGFzaDEtcHJkLWxsLmNkbi5za3ljZHAuY29tLzAxNmEvQ29udGVudC9EQVNIXzAwM183MjBfMzAvTGl2ZS9jaGFubmVsKHNreXNwb3J0c2YxKS9tYW5pZmVzdF83MjAubXBk&amp;k1=MDAwNWI1N2I5YjQ3MTJlMjk2NDFhYzk4MWJhOGQzYzI=&amp;k2=Y2ExM2NkZDFiOTZiZjE4NzdkMmM3YWQ5ZWUzN2Q1MmU=" 
      allow="autoplay; encrypted-media" height="100%" width="100%" framebborder="0" scrolling="no" allowFullScreen></iframe>

      </section>
      <Footer/>
      </>
    );
  }
  