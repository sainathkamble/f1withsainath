import "./global.css";
import Hero from "./home";


export default function Home() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Hero currentGp="Le Mans"/>
    </div>
  );
}
