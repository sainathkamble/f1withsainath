'use client'
import "../global.css";
import Link from "next/link";
import {React , useRef,useEffect } from "react";
import Typed from "typed.js";

export default function Hero(){

   //typed js
       const el = useRef(null);
        useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>Watch<i> F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!'],
            typeSpeed: 100,
          });
          return () => {
            typed.destroy();
          };
        }, []);

     //Get race date  logic automatic
     //Once race is over then just need to add dates of new race and GP name
     let currentGp = ""; let gpHeader = "GP 2024"; let gpButton = "Grand Prix"

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];

     let currentDate = new Date().getDate();
  
     let dayBeforeGp = new Date("April 18, 2024").getDate();
     let gpDayOne = new Date("April 19, 2024").getDate();
     let gpDayTwo = new Date("April 20, 2024").getDate();
     let gpDayThree = new Date("April 21, 2024").getDate();

     if(currentDate == gpDayOne || currentDate == gpDayTwo || currentDate == gpDayThree || currentDate == dayBeforeGp){
      currentGp = "Chinese"; gpHeader = gpHeader; gpButton = gpButton; 
      gpDayOne = gpDayOne; gpDayTwo = gpDayTwo; gpDayThree = gpDayThree; currentMonth = currentMonth; 
     }else{
      currentGp = "No GP scheduled for now"; gpHeader = ""; gpButton = "";
      gpDayOne = "--"; gpDayTwo = "--"; gpDayThree = "--"; currentMonth = "--"; 
     }

    return(
        <>
        <section className="h-[80vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

         <div className="h-auto w-screen bg-slate-950 flex justify-center items-center text-2xl font-bold text-slate-50">
            <span ref={el} />
          </div>

          <div className="w-screen flex justify-center">
          <div className="h-auto w-3/4 px-4 py-1.5 rounded-xl grid place-items-center border sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 2xl:w-1/4 2xl:py-2">
             <p className=" text-lg my-3">{currentGp} {gpHeader} {gpDayOne} to {gpDayThree} {currentMonth}</p>

              <div className="h-auto w-auto text-slate-50 text-lg">
                <p className="flex justify-center">{gpDayOne} {currentMonth}</p>
                <p>Free Practice 1 :- 8:00AM</p>
                <p>Free Practice 2 :- 11:30AM</p>
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg">
                <p className="flex justify-center">{gpDayTwo} {currentMonth}</p> 
                <p>Free Practice 3 :- 8:00AM</p>
                <p>Qualifying :- 11:30AM</p>
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg">
                <p className="flex justify-center">{gpDayThree} {currentMonth}</p>
                <p>Race :- 10:30AM</p>
              </div>
             <Link href="./livestream" className="my-3 py-2 px-3 bg-red-600 rounded-xl text-lg font-semibold">{currentGp} {gpButton}</Link>
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