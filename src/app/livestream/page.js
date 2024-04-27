import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Home() {
    return (
      <>
      <Navbar/>
      <section className="h-[82vh] w-screen bg-slate-950">
      <iframe src="https://latifistreams.com/channel/raw?url=aHR0cHM6Ly9saXZlLWN0di52aWRlby45YzltZWRpYS5jb20vZi9UU04vVFNONS9tYW5pZmVzdC5tcGQ=&amp;k1=Y2I1Nzc0MWExY2VlNDIyNjkwYzYyOTRhMDZlYjEzMjA=&amp;k2=N2EwY2ZkNDkzZGY2ZWY3Y2MwZDBiYjNhZDk1Y2VjOGM=" 
      allow="autoplay; encrypted-media" height="100%" width="100%" scrolling="no" allowFullScreen=""></iframe>
      </section>
      <Footer/>
      </>
    );
  }
  