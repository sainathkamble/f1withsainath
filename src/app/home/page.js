'use client'
import "../global.css";
import Link from "next/link";
import {React , useState} from "react";

export default function Hero(){

     //Get race date  logic automatic
     let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
     let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
     let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

     gpDayOne == new Date("May 02, 2024").getDate() || gpDayOne == new Date("May 03, 2024").getDate() || gpDayOne == new Date("May 04, 2024").getDate() || gpDayOne == new Date("May 05, 2024").getDate() ?
      setGpDayOne = new Date("May 03, 2024").getDate() : setGpDayOne = "--"; 

     gpDayTwo == new Date("May 02, 2024").getDate() || gpDayTwo == new Date("May 03, 2024").getDate() || gpDayTwo == new Date("May 04, 2024").getDate() || gpDayTwo == new Date("May 05, 2024").getDate() ?
      setGpDayTwo = new Date("May 04, 2024").getDate() : setGpDayTwo = "--";

     gpDayThree == new Date("May 02, 2024").getDate() || gpDayThree == new Date("May 03, 2024").getDate() || gpDayThree == new Date("May 04, 2024").getDate() || gpDayThree == new Date("May 05, 2024").getDate() ?
      setGpDayThree = new Date("May 05, 2024").getDate() : setGpDayThree = "--";

     let currentGp = ""; let gpHeader = "GP 2024"; let gpButton = "Grand Prix";

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];
   
     let currentDate = new Date().getDate();
     if(currentDate == setGpDayOne || currentDate == setGpDayTwo || currentDate == setGpDayThree){
      currentGp = "Miami"; gpHeader = gpHeader; gpButton = gpButton;
     }else{
      currentGp = "No GP scheduled for now";
      gpHeader = ""; gpButton = "";
     }

return(
        <>
        <section className="bg-image h-[82vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

          <div className="w-screen flex justify-center content-evenly z-10">
          <div className="h-auto w-screen px-4 py-1.5 grid place-items-center font-semibold sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 2xl:w-1/4 2xl:py-2">
             <p className="text-white hover:text-black text-xl my-3">{currentGp} {gpHeader} {setGpDayOne} to {setGpDayThree} {currentMonth}</p>

              <div className="h-auto w-auto text-white hover:text-black text-lg">
                <p className="flex justify-center">{setGpDayOne} {currentMonth}</p>
                <p>Free Practice 1 :- </p>
                <p>Sprint Qualifying :- </p>
              </div>
              <div className="h-auto w-auto text-white hover:text-black text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMonth}</p> 
                <p>Sprint Race :- </p>
                <p>Qualifying :- </p>
              </div>
              <div className="h-auto w-auto text-white hover:text-black text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>Race :- </p>
              </div>
             <Link href="./livestream" className="my-3 py-2 px-3 bg-red-600 rounded-xl text-lg font-semibold">{currentGp} {gpButton}</Link>
          </div>
          </div>

          <div className="w-screen flex justify-center z-10">
             <Link href="./calendar" 
             className="h-auto w-2/3 grid place-items-center rounded-xl py-2 text-2xl font-bold bg-transparent hover:bg-red-600 text-white
             sm:2/3 md:w-2/4 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
              F1 Calender 2024
             </Link>
          </div>
      </section>
    </>
    );
}
