'use client'
import "../global.css";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import {React , useState} from "react";
import { GPs } from "../gps.js";

export default function Hero(props){

  let dayBeforeGp = new Date("June 27, 2024").getDate();
  let firstGpDate = new Date("June 28, 2024").getDate();
  let secondGpDate = new Date("June 29, 2024").getDate();
  let finalGpDate = new Date("June 30, 2024").getDate();
    
     //Get race date  logic automatic
     let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
     let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
     let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

     gpDayOne == dayBeforeGp || gpDayOne ==  firstGpDate || gpDayOne == secondGpDate || gpDayOne == finalGpDate ?
     setGpDayOne = new Date("June 28, 2024").getDate() : setGpDayOne = "--";

     gpDayTwo == dayBeforeGp || gpDayTwo ==  firstGpDate || gpDayTwo == secondGpDate || gpDayTwo == finalGpDate ?
      setGpDayTwo = new Date("June 29, 2024").getDate() : setGpDayTwo = "--";

     gpDayThree == dayBeforeGp || gpDayThree ==  firstGpDate || gpDayThree == secondGpDate || gpDayThree == finalGpDate ?
     setGpDayThree = new Date("June 30, 2024").getDate() : setGpDayThree = "--";
     

     const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
     const date = new Date();
     let currentMonth = monthNames[date.getMonth()];
   

     let currentGp = props.currentGp; 
     let gpHeader = "GP 2024"; 
     let gpButton = "2024";
     let currentDate = new Date().getDate();

     if(currentDate == dayBeforeGp || currentDate == firstGpDate || gpDayOne == secondGpDate || currentDate == finalGpDate ){
      currentGp = currentGp; gpHeader = gpHeader; gpButton = gpButton;
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
                <p>Free Practice 1 :- 4:00 PM</p>
                <p>Sprint Qualifying :- 8:00 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMonth}</p> 
                <p>Sprint Race :- 3:30 PM</p>
                <p>Qualifying :- 7:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>Race :- 6:30 PM</p>
              </div>
              <Link href="./austriangp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
                {currentGp} {gpButton}
              </Link>
           </div>
         </div>
         <Footer/>
      </section>
    </>
    );
}
