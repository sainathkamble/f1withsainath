'use client'
import "../global.css";
import Link from "next/link";
import {React , useRef,useEffect } from "react";
import Typed from "typed.js";

export default function Hero(){

    let currentRace = "Japanese"; 

   //typed js
       const el = useRef(null);
      
        useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>Watch<i> F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!'],
            typeSpeed: 100,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);

     //Race time countdown

      const useCountdown = () => {
        const countDownDate = new Date("Apr 05, 2024 08:00:00").getTime();
      
        const [countDown, setCountDown] = useState(
          countDownDate - new Date().getTime()
        );
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
          }, 1000);
      
          return () => clearInterval(interval);
        }, [countDownDate]);
      
        return getReturnValues(countDown);
      };
      
      const getReturnValues = (countDown) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      
        return [days, hours, minutes, seconds];
      };
      

    return(
        <>
        <section className="h-[80vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

         <div className="h-[10vh] w-screen bg-slate-950 flex justify-center items-center text-4xl font-bold text-slate-50 py-4">
            <span ref={el} />
          </div>

          <div className="w-screen flex justify-center">
          <div className="h-auto w-2/3 px-4 py-2 rounded-xl grid place-items-center border sm:2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 2xl:w-1/4 2xl:py-2">
             <p className=" text-lg my-3">{currentRace} GP 2024 5-7 Apr</p>

              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                Free Practice 1 :- 8:00AM
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
              Free Practice 2 :- 11:30AM
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                Free Practice 3 :- 8:00AM
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                Qualifying :- 11:30AM
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                Race :- 10:30AM
              </div>
             <Link href="./livestream" className=" my-3 py-2 px-2.5 bg-red-600 rounded-xl text-xl font-semibold">{currentRace} Grand Prix</Link>
          </div>
          </div>

          <div className="w-screen flex justify-center">
            <div className="h-auto w-2/3 grid place-items-center rounded-xl py-2  bg-red-600 border sm:2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 2xl:w-1/4 ">
             <Link href="./calendar" className=" text-slate-50 text-xl font-bold">F1 Calender 2024</Link>
           </div>
          </div>
          
      </section>
        </>
    );
}