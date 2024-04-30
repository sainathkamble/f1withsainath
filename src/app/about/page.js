import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Aabout(){
    return(
        <>
        <div className="bg-image h-[90vh] w-screnn grid place-items-center y-8">
         <Navbar/>
         <div className="h-[80vh] w-screen grid grid-cols-1 grid-rows-3 place-items-center">
         <p className="w-screen text-xl px-8 font-semibold text-white flex justify-center">
            This is just a fun website to enjoy watching Formula 1
         </p>
         <p className="w-screen text-xl px-8 font-semibold text-white flex justify-center">
            Please take a note Its not based on official or legal contract basis FIA please do not sue me :)
         </p>
         <p className="w-screen text-xl px-8 font-semibold text-white flex justify-center">
            At the time it is a F1 live streaming plateform further upgrade will be done soon. 
         </p>
         </div>
        </div>
        <Footer/>
        </>
    );
}