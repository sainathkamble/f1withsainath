import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Aabout(){
    return(
        <>
        <Navbar/>
        <div className="h-[82vh] w-screnn grid grid-cols-1 grid-rows-3 place-items-center bg-slate-950 py-8">
         <p className="w-screen text-xl px-8  text-slate-50 flex justify-center">This is just a fun website to enjoy watching Formula 1 created by Sainath Kamble</p>
         <p className="w-screen text-xl px-8 text-slate-50 flex justify-center">Please take a note Its not based on official or legal contract basis FIA please do not sue me :)</p>
         <p className="w-screen text-xl px-8 text-slate-50 flex justify-center">At the time it is a F1 live streaming plateform further upgrade will be done soon like checking different time zones and user sign etc.</p>
        </div>
        <Footer/>
        </>
    );
}