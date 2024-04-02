'use client'
import "../global.css";
import Link from "next/link";
import React from "react";
import Typed from "typed.js";

export default function Hero(){

    let currentRace = "Japanese"; 

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
        <section className="h-[80vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

         <div className="h-[10vh] w-screen bg-slate-950 flex justify-center items-center text-xl text-slate-50 py-4">
            <span ref={el} />
          </div>

          <div className="h-auto w-2/3 px-4 py-4 grid place-items-center rounded-xl border overflow-y-hidden">
           <p className="text-xl">Check race time in your time zone</p>
           <ul className="grid grid-cols-4 grid-rows-2 gap-4 my-2">
               <li>UTC</li><p>0</p>
               <li>CET</li><p>0</p>
               <li>ET</li><p>0</p>
               <li>PT</li><p>0</p>
               <li>AEDT</li><p>0</p>
               <li>JST</li><p>0</p>
               <li>IST</li><p>0</p>
           </ul>
          </div>

          <div className="h-auto w-2/3 px-4 py-4 rounded-xl grid place-items-center border">
             <p className="text-lg my-2">Watch {currentRace} Grand Prix</p>
             <Link href="./livestream" className=" my-2 py-2 px-2 bg-red-600 rounded-xl">Click here</Link>
          </div>

          <div className="h-auto w-2/3 bg-red-600 py-2 rounded-xl flex justify-center items-end border">
            <Link href="./calendar" className=" text-slate-50 text-lg">F1 Calender 2024</Link>
          </div>
          
      </section>
        </>
    );
}