import "../global.css"
import Link from "next/link";
import React from "react";
import Typed from "typed.js";
// import Navbar from "./navbar/page";
// import Footer from "./footer/page";

export default function Hero(){

    let currentRace = "Japanese"; 

    let utcTime = 0;
    let cetTime = 0; 
    let etTime = 0;
    let ptTime = 0;
    let aedtTime = 0; 
    let jstTime = 0; 
    let istTime = 0;  
  do{
   cetTime = utcTime + 1; 
   etTime = utcTime - 5;
   ptTime = utcTime + 5;
   aedtTime = utcTime + 11; 
   jstTime = utcTime + 9; 
   istTime = utcTime + 5.5;  
  }
  while(utcTime<=24);

  //typed js
       const el = React.useRef(null);
      
        React.useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>Watch<i> F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!'],
            typeSpeed: 100,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);

    return(
        <>
        {/* <Navbar/> */}
        <section className="h-[70vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

         <div className="h-[10vh] w-screen bg-slate-950 flex justify-center items-center text-lg text-slate-50 py-4">
            <span ref={el} />
          </div>

          <div className="h-20 w-2/3 px-4 py-4 grid place-items-center rounded-xl border overflow-y-hidden hover:h-auto">
           <p className="text-lg">Check race time in your time zone</p>
           <ul className="grid grid-cols-4 grid-rows-2 gap-4 my-2">
               <li>UTC</li><p>{utcTime}</p>
               <li>CET</li><p>{cetTime}</p>
               <li>ET</li><p>{etTime}</p>
               <li>PT</li><p>{ptTime}</p>
               <li>AEDT</li><p>{aedtTime}</p>
               <li>JST</li><p>{jstTime}</p>
               <li>IST</li><p>{istTime}</p>
           </ul>
          </div>

          <div className="h-auto w-2/3 px-4 py-4 rounded-xl grid place-items-center border">
             <p className="text-lg my-2">Watch {currentRace} Grand Prix</p>
             <Link href="./livestreams/page" className=" my-2 py-2 px-2 bg-red-600 rounded-xl">Click here</Link>
          </div>

          <div className="h-auto w-2/3 bg-red-600 py-2 rounded-xl flex justify-center items-end border">
          <Link href="./calender/page" className=" text-slate-50 text-lg">F1 Calender 2024</Link>
          </div>
          
      </section>
      {/* <Footer/> */}
        </>
    );
}