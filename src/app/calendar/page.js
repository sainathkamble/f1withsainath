import "../global.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import Image from "next/image";

export default function Calender(){
    return(
        <>
        <section className="bg-image h-[100vh] w-screen grid place-items-center bg-cover text-slate-50 bg-slate-950 overflow-x-hidden overflow-y-hidden">
         <Navbar/>
         <div className="h-[80vh] w-screen flex justify-center items-center">
           <Image src="/calendar.webp" width="400" height="900" className="bg-cover" alt="F1 2024 Calendar image"/>
         </div>
         <Footer/>
        </section>
        </>
    );
}

