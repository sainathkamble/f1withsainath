'use client'
import "../global.css";
import Link from "next/link";
import Navbar from "../navbar/page";
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
        <section className="bg-image h-[90vh] w-screen grid grid-cols-1">
          <Navbar/>
          <div className="h-[80vh] w-screen flex justify-center content-evenly">

           <div className="h-auto w-screen py-2 font-semibold grid place-items-center">
             <div className="text-white hover:text-black text-2xl grid place-items-center">
               {currentGp} {gpHeader} 
               <p className="text-white hover:text-black text-2xl">{setGpDayOne} to {setGpDayThree} {currentMonth}</p>
             </div>

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
              <Link href="./livestream" className="px-2 py-2 rounded-xl text-lg font-bold text-white bg-red-600">
                {currentGp} {gpButton}
              </Link>
           </div>
         </div>
      </section>
    </>
    );
}
