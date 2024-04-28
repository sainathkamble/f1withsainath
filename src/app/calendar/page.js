import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";

export default function Calender(){
    return(
        <>
        <div className="bg-image h-[90vh] w-screen px-4 grid place-items-center bg-cover text-slate-50 bg-slate-950 overflow-x-hidden overflow-y-hidden">
        <Navbar/>
         <Image src="/calendar.webp" width="400" height="900" className="bg-cover" alt="F1 2024 Calendar image"/>
        </div>
        <Footer/>
        </>
    );
}

