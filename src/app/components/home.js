'use client'
import "../global.css";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";
import {React , useState} from "react";
import { GPs } from "../gps.js";

export default function Hero(props){

let currentGp = props.currentGp; let gpButton = currentGp;

let [gpDayOne , setGpDayOne] = useState(new Date().getDate());
let [gpDayTwo , setGpDayTwo] = useState(new Date().getDate());
let [gpDayThree , setGpDayThree] = useState(new Date().getDate());

let currentDate = new Date("October 30, 2024").getDate();

const getGpDates = GPs.some( (gp)=>{
  if( currentDate == gp.dayBeforeGp ){
    setGpDayOne = gp.firstGpDate; setGpDayTwo = gp.secondGpDate; setGpDayThree = gp.thirdGpDate;
    return true;
  }else{
    setGpDayOne = "--"; setGpDayTwo = "--"; setGpDayThree = "--";
    gpButton = "No Grand Prix";
    return false;
  }
 }
);

const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const date = new Date();
let currentMonth = monthNames[date.getMonth()];
   
return(
        <>
        <section className="bg-image h-[100vh] w-screen grid grid-cols-1">
         <Navbar/>
          <div className="h-[80vh] w-screen flex justify-center content-evenly">

           <div className="h-auto w-screen py-2 font-semibold grid place-items-center">
             <div className="text-white text-2xl grid place-items-center">
               { getGpDates ? <p>{currentGp}</p> : <p>No GP schedulded for now!</p> }
             </div>

             <p className="text-white text-2xl grid place-items-center">{setGpDayOne} to {setGpDayThree} {currentMonth}</p>

              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayOne} {currentMonth}</p>
                <p>Free Practice 1 :- </p>
                <p>Sprint Qualifying :- </p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayTwo} {currentMonth}</p> 
                <p>Sprint Race :- </p>
                <p>Qualifying :- </p>
              </div>
              <div className="h-auto w-auto text-white text-lg">
                <p className="flex justify-center">{setGpDayThree} {currentMonth}</p>
                <p>Race :- </p>
              </div>
              <Link href="./britishgp" className="px-4 py-2 rounded-xl text-lg font-semibold text-white bg-red-600">
                {gpButton}
              </Link>
           </div>
         </div>
         <Footer/>
      </section>
    </>
    );
}
