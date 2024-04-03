import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Time(){
    let utcTime = 10;
    let cetTime=0; let etTime=0; let ptTime=0; let aedtTime=0; let jstTime=0; let istTime=0;
    if(utcTime<=24){
     return   cetTime=utcTime+5;
    }
  return(
    <>
    <Navbar/>
    <section className="h-[80vh] w-screen px-4 py-4 grid place-items-center bg-slate-950 overflow-y-hidden">
           <p className="text-xl text-slate-50">Check race time in your time zone</p>
           <ul className="grid grid-cols-2 grid-rows-7 my-2 text-slate-50">
               <li>UTC</li><p>{utcTime}</p>
               <li>CET</li><p>{cetTime}</p>
               <li>ET</li><p>{etTime}</p>
               <li>PT</li><p>{ptTime}</p>
               <li>AEDT</li><p>{aedtTime}</p>
               <li>JST</li><p>{jstTime}</p>
               <li>IST</li><p>{istTime}</p>
           </ul>
    </section>
    <Footer/>
    </>
  );
}