'use client'
import "../global.css";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import {React , useState} from "react";
import { GPs } from "../gps.js";

export default function Hero(){

let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

let currentDate = new Date().getDate();
let currentGp = ""; let gpButton = "";

const getGpDates = GPs.some( (gp)=>{
  if( currentDate == gp.reference || currentDate == gp.reference+1 || currentDate == gp.reference+2 || currentDate == gp.reference+3){
    setGpDayOne = gp.firstGpDate; setGpDayTwo = gp.secondGpDate; setGpDayThree = gp.thirdGpDate;
    currentGp = gp.currentGp; gpButton = gp.currentGp;
    return true;
  }else{
    setGpDayOne = "--"; setGpDayTwo = "--"; setGpDayThree = "--";
    return false;
  }
 }
);

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const date = new Date();
let currentMon = monthNames[date.getMonth()];

return(
        <>
        <section className="bg-image h-[100vh] w-screen grid grid-cols-1">
         <Navbar/>
          <div className="h-[80vh] w-screen flex justify-center content-evenly">

           <div className="h-auto w-screen py-2 font-semibold grid place-items-center">
             <div className="text-white text-2xl grid place-items-center">
               { getGpDates ? <p>{currentGp}</p> : <p>No GP schedulded for now!</p> }
             </div>

             <p className="text-white text-2xl grid place-items-center">{setGpDayOne} to {setGpDayThree} {currentMon}</p>

              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayOne} {currentMon}</p>
                <p>Free Practice 1 :- 5:00 PM</p>
                <p>Free Practice 2 :- 8:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMon}</p> 
                <p>Free Practice 3 :- 4:00 PM</p>
                <p>Qualifying :- 7:30 PM</p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMon}</p>
                <p>Race :- 6:30 PM</p>
              </div>
              <Link href="./hungariangp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
              { getGpDates ? <p>{gpButton}</p> : <p>No Grand Prix</p> }
              </Link>
           </div>
         </div>
         <Footer/>
      </section>
    </>
    );
}
