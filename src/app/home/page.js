'use client'
import "../global.css";
import Link from "next/link";
import Navbar from "../navbar/page";
import {React , useState} from "react";

export default function Hero(){
    
    let dayBeforeGp = new Date("May 16, 2024").getDate();
    let firstGpDate = new Date("May 17, 2024").getDate();
    let secondGpDate = new Date("May 18, 2024").getDate();
    let finalGpDate = new Date("May 19, 2024").getDate();
    
     //Get race date  logic automatic
     let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
     let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
     let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

     gpDayOne == dayBeforeGp || gpDayOne == firstGpDate || gpDayOne == secondGpDate || gpDayOne == finalGpDate ?
      setGpDayOne = new Date("May 17, 2024").getDate() : setGpDayOne = "--"; 

     gpDayTwo == dayBeforeGp || gpDayTwo == firstGpDate || gpDayOne == secondGpDate || gpDayTwo == finalGpDate ?
      setGpDayTwo = new Date("May 18, 2024").getDate() : setGpDayTwo = "--";

     gpDayThree == dayBeforeGp || gpDayThree == firstGpDate || gpDayOne == secondGpDate || gpDayThree == finalGpDate ?
      setGpDayThree = new Date("May 19, 2024").getDate() : setGpDayThree = "--";

     let currentGp = ""; let gpHeader = "GP 2024"; let gpButton = "Grand Prix";

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];
   
     let currentDate = new Date().getDate();

     if(currentDate == dayBeforeGp || currentDate == firstGpDate || gpDayOne == secondGpDate || currentDate == finalGpDate ){
      currentGp = "Imola"; gpHeader = gpHeader; gpButton = gpButton;
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
             <div className="text-white text-2xl grid place-items-center">
               {currentGp} {gpHeader} 
               <p className="text-white text-2xl">{setGpDayOne} to {setGpDayThree} {currentMonth}</p>
             </div>

              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayOne} {currentMonth}</p>
                <p>Free Practice 1 :-  5:00 PM</p>
                <p>Free Practice 2 :- 8:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMonth}</p> 
                <p>Free Practice 3 :- 4:00 PM</p>
                <p>Qualifying :- 7:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>Race :- 6:30 PM</p>
              </div>
              <Link href="./imolagp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
                {currentGp} {gpButton}
              </Link>
           </div>
         </div>
      </section>
    </>
    );
}
