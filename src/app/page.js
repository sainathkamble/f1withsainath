import "./global.css";
import Hero from "./components/home";


export default function Home() {

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Hero currentGp="British Grand Prix 2024"/>
    </div>
  );
}
