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
      setGpDayThree = new Date("May 06, 2024").getDate() : setGpDayThree = "--";

     let currentGp = ""; let gpHeader = "GP 2024"; let gpButton = "Grand Prix";

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];
   
     let currentDate = new Date().getDate();

     if(currentDate == new Date("May 02, 2024").getDate() || currentDate == new Date("May 03, 2024").getDate() || currentDate == new Date("May 04, 2024").getDate() || currentDate == new Date("May 05, 2024").getDate() || currentDate == new Date("May 06, 2024").getDate()){
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
             <div className="text-white text-2xl grid place-items-center">
               {currentGp} {gpHeader} 
               <p className="text-white text-2xl">{setGpDayOne} to {setGpDayThree} {currentMonth}</p>
             </div>

              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayOne} - 4 {currentMonth}</p>
                <p>3 May : Free Practice 1 :- 10:00 PM</p>
                <p>4 May : Sprint Qualifying :- 2:00 AM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} - 5 {currentMonth}</p> 
                <p>4 May : Sprint Race :- 9:30 PM</p>
                <p>5 May : Qualifying :- 1:30 AM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>6 May : Race :- 1:30 AM</p>
              </div>
              <Link href="./miamigp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
                {currentGp} {gpButton}
              </Link>
           </div>
         </div>
      </section>
    </>
    );
}
