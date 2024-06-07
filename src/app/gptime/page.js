'use client'
import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { useState } from "react";

export default function Time(){
   
  let currentGp = "Miami";
 
  let [time,setTime] = useState({FP1: 0, FP2: 0, FP3: 0, Quali: 0, Race: 0,});

  let [selectedTz,setSelectedTz] = useState("Local Time" || "UTC(Universal Time Coordinated)" || "CET(Central European Time)" || "ET(Eastern Time)" ||
  "PT(Pacific Time)" || "AEDT(Australian Eastern Daylight Time)" || "JST(Japan Standard Time)" || "IST(Indian Standard Time)");
 
  if(selectedTz == "Local Time"){
  setTime.FP1 = "1:30 PM", setTime.FP2 = "5:00 PM", setTime.FP3 = "12:30 PM", setTime.Quali = "4:00 PM", setTime.Race = "3:00 PM";
  }else if(selectedTz == "UTC(Universal Time Coordinated)"){
    setTime.FP1 = "5:30 PM", setTime.FP2 = "9:00 PM", setTime.FP3 = "4:30 PM", setTime.Quali = "8:00 PM", setTime.Race = "6:00 PM";
  }else if(selectedTz == "PT(Pacific Time)"){
    setTime.FP1 = "10:30 AM", setTime.FP2 = "2:00 PM", setTime.FP3 = "9:30 AM", setTime.Quali = "1:00 PM", setTime.Race = "11:00 AM";
  } else if(selectedTz == "BST(British Standard Time)"){
    setTime.FP1 = "6:30 PM", setTime.FP2 = "10:00 PM", setTime.FP3 = "5:30 PM", setTime.Quali = "9:00 PM", setTime.Race = "7:00 PM";
  } else if(selectedTz == "CET(Central European Time)"){
    setTime.FP1 = "7:30 PM", setTime.FP2 = "11:00 PM", setTime.FP3 = "6:30 PM", setTime.Quali = "10:00 PM", setTime.Race = "8:00 PM";
  }else if(selectedTz == "ET(Eastern Time)"){
    setTime.FP1 = "1:30 PM", setTime.FP2 = "5:00 PM", setTime.FP3= "12:30 PM", setTime.Quali = "4:00 PM", setTime.Race = "2:00 PM";
  }else if(selectedTz == "IST(Indian Standard Time)"){
    setTime.FP1 = "11:00 PM", setTime.FP2 = "2:30 AM", setTime.FP3 = "10:00 PM", setTime.Quali = "1:30 PM", setTime.Race = "11:30 PM";
  }else if(selectedTz == "JST(Japan Standard Time)"){
    setTime.FP1 = "2:30 AM", setTime.FP2 = "6:00 AM", setTime.FP3 = "1:30 AM", setTime.Quali = "5:00 AM", setTime.Race = "3:00 AM";
  }else if(selectedTz == "AEDT(Australian Eastern Daylight Time)"){
    setTime.FP1 = "3:30 AM", setTime.FP2 = "7:00 AM", setTime.FP3 = "2:30 AM", setTime.Quali = "6:00 AM", setTime.Race = "4:00 AM";
  }else{
    setTime.FP1 = "", setTime.FP2 = "", setTime.FP3 = "", setTime.Quali = "", setTime.Race = "";
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
            <p className="text-lg font-semibols text-white">Free Practice 2 :- {setTime.FP2}</p>
            <p className="text-lg font-semibols text-white">Free Practice 3 :- {setTime.FP3}</p>
            <p className="text-lg font-semibols text-white">Qualifying :- {setTime.Quali}</p>
            <p className="text-lg font-semibols text-white">Race :- {setTime.Race}</p>
          </div>

         </div>
    </section>
    <Footer/>
    </>
  );
}