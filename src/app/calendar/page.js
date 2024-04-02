import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";

export default function Calender(){
    return(
        <>
        <Navbar/>
        <div className="h-[80vh] w-screen px-4 grid place-items-center bg-cover bg-slate-950">
         <Image src="/calendar.webp" width={400} height={900} alt="F1 2024 Calendar image"/>
        </div>
        <Footer/>
        </>
    );
}