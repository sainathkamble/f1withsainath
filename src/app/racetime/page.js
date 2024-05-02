'use client'
import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { useState } from "react";

export default function Time(){
   
  let currentGp = "Miami";
 
  let [time,setTime] = useState({FP1: 0, SpQuali: 0, SpRace: 0, Quali: 0, Race: 0,});

  let [selectedTz,setSelectedTz] = useState("Local Time" || "UTC(Universal Time Coordinated)" || "CET(Central European Time)" || "ET(Eastern Time)" ||
  "PT(Pacific Time)" || "AEDT(Australian Eastern Daylight Time)" || "JST(Japan Standard Time)" || "IST(Indian Standard Time)");
 
  if(selectedTz == "Local Time"){
  setTime.FP1 = "12:30 PM", setTime.SpQuali = "4:30 PM", setTime.SpRace = "12:00 PM", setTime.Quali = "4:00 PM", setTime.Race = "4:00 PM";
  }else if(selectedTz == "UTC(Universal Time Coordinated)"){
    setTime.FP1 = "5:30 PM", setTime.SpQuali = "7:30 PM", setTime.SpRace = "5:00 PM", setTime.Quali = "9:00 PM", setTime.Race = "9:00 PM";
  }else if(selectedTz == "PT(Pacific Time)"){
    setTime.FP1 = "9:30 AM", setTime.SpQuali = "1:30 PM", setTime.SpRace = "9:00 AM", setTime.Quali = "1:00 PM", setTime.Race = "1:00 PM";
  } else if(selectedTz == "BST(British Standard Time)"){
    setTime.FP1 = "5:30 AM", setTime.SpQuali = "9:30 PM", setTime.SpRace = "5:00 AM", setTime.Quali = "9:00 PM", setTime.Race = "9:00 PM";
  } else if(selectedTz == "CET(Central European Time)"){
    setTime.FP1 = "6:30 PM", setTime.SpQuali = "8:30 PM", setTime.SpRace = "6:00 PM", setTime.Quali = "10:00 PM", setTime.Race = "10:00 PM";
  }else if(selectedTz == "ET(Eastern Time)"){
    setTime.FP1 = "12:30 PM", setTime.SpQuali = "4:30 PM", setTime.SpRace = "12:00 PM", setTime.Quali = "4:00 PM", setTime.Race = "4:00 PM";
  }else if(selectedTz == "IST(Indian Standard Time)"){
    setTime.FP1 = "10:00 PM", setTime.SpQuali = "2:00 AM", setTime.SpRace = "9:30 PM", setTime.Quali = "1:30 AM", setTime.Race = "1:30 AM";
  }else if(selectedTz == "JST(Japan Standard Time)"){
    setTime.FP1 = "1:30 AM", setTime.SpQuali = "5:30 AM", setTime.SpRace = "1:00 AM", setTime.Quali = "5:00 AM", setTime.Race = "5:00 AM";
  }else if(selectedTz == "AEDT(Australian Eastern Daylight Time)"){
    setTime.FP1 = "2:30 AM", setTime.SpQuali = "6:30 AM", setTime.SpRace = "2:00 AM", setTime.Quali = "6:00 AM", setTime.Race = "6:00 AM";
  }else{
    setTime.FP1 = "", setTime.SpQuali = "", setTime.SpRace = "", setTime.Quai = "", setTime.Race = "";
  }
   
  return(
    <>
   <section className="bg-image h-[90vh] w-screen bg-slate-950">
    <Navbar/>
        <div className="h-[80vh] w-screen grid">

         <p className="h-[10vh] w-screen text-xl font-semibold text-slate-50 flex justify-center items-center p-4">
          Check {currentGp} Grand Prix time in your time zone
         </p>
          

          <div className="h-[15vh] w-screen flex justify-evenly items-center flex-wrap">

           <select className="h-[10vh] w-4/5 bg-transparent border text-white flex justify-center items-center
            sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5" 
            value={selectedTz} onChange={e => setSelectedTz(e.target.value)}>
            {[
              ["Select your time zone"],
              ["Local Time"],
              ["BST(British Standard Time)"],
              ["UTC(Universal Time Coordinated)"],
              ["CET(Central European Time)"],
              ["ET(Eastern Time)"],
              ["PT(Pacific Time)"],
              ["AEDT(Australian Eastern Daylight Time)"],
              ["JST(Japan Standard Time)"],
              ["IST(Indian Standard Time)"],
            ].map(([Timezone])=>(
              <option value={Timezone} className="h-auto w-auto  bg-slate-950 text-white">{Timezone}</option>
            ))}
           </select>
          </div>

          <div className="h-[55vh] w-screen grid grid-cols-1 grid-rows-5 place-items-center">
            <p className="text-lg font-semibols text-white">Free Practice 1 :- {setTime.FP1}</p>
            <p className="text-lg font-semibols text-white">Sprint Qualifying :- {setTime.SpQuali}</p>
            <p className="text-lg font-semibols text-white">Sprint Race :- {setTime.SpRace}</p>
            <p className="text-lg font-semibols text-white">Qualifying :- {setTime.Quali}</p>
            <p className="text-lg font-semibols text-white">Race :- {setTime.Race}</p>
          </div>

         </div>
    </section>
    <Footer/>
    </>
  );
}