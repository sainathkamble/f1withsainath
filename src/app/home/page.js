'use client'
import "../global.css";
import Link from "next/link";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import {React , useState} from "react";

export default function Hero(){

  let dayBeforeGp = new Date("June 13, 2024").getDate();
  let firstGpDate = new Date("June 14, 2024").getDate();
  let secondGpDate = new Date("June 15, 2024").getDate();
  let finalGpDate = new Date("June 16, 2024").getDate();
    
     //Get race date  logic automatic
     let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
     let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
     let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

     gpDayOne == dayBeforeGp || gpDayOne ==  firstGpDate || gpDayOne == secondGpDate || gpDayOne == finalGpDate ?
     setGpDayOne = new Date("June 13, 2024").getDate() : setGpDayOne = "--";

     gpDayTwo == dayBeforeGp || gpDayTwo ==  firstGpDate || gpDayTwo == secondGpDate || gpDayTwo == finalGpDate ?
      setGpDayTwo = new Date("June 14, 2024").getDate() : setGpDayTwo = "--";

     gpDayThree == dayBeforeGp || gpDayThree ==  firstGpDate || gpDayThree == secondGpDate || gpDayThree == finalGpDate ?
     setGpDayThree = new Date("June 15, 2024").getDate() : setGpDayThree = "--";
     
     let currentGp = ""; let gpHeader = "2024"; let gpButton = "2024";

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];
   
     let currentDate = new Date().getDate();

     if(currentDate == dayBeforeGp || currentDate == firstGpDate || gpDayOne == secondGpDate || currentDate == finalGpDate ){
      currentGp = "Le Mans"; gpHeader = gpHeader; gpButton = gpButton;
     }else{
      currentGp = "No GP scheduled for now";
      gpHeader = ""; gpButton = "";
     }

return(
        <>
        <section className="bg-image h-[100vh] w-screen grid grid-cols-1">
         <Navbar/>
          <div className="h-[80vh] w-screen flex justify-center content-evenly">

           <div className="h-auto w-screen py-2 font-semibold grid place-items-center">
             <div className="text-white text-2xl grid place-items-center">
               {currentGp} {gpHeader} 
               <p className="text-white text-2xl">{setGpDayOne} to {setGpDayThree} {currentMonth}</p>
             </div>

              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayOne} {currentMonth}</p>
                <p>Free Practice 1 :- 1:30 AM</p>
                <p>Free Practice 2 :- 6:30 PM</p>
                <p>Hyperpole :- 11:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMonth}</p> 
                <p>Free Practice 3 :- 1:30 AM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>Warm Up :- 3:30 PM</p>
                <p>Race :- 7:30 PM</p>
              </div>
              <Link href="./spanishgp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
                {currentGp} {gpButton}
              </Link>
           </div>
         </div>
         <Footer/>
      </section>
    </>
    );
}
