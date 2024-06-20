'use client'
import "../global.css";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import { useState } from "react";

export default function Time(props){
   
  let currentGp = props.currentGp;
 
  let [time,setTime] = useState({FP1: 13.5, FP2: 17, FP3: 12.5, Quali: 16, Race: 15});

  let [selectedTz,setSelectedTz] = useState("Local Time" || "UTC(Universal Time Coordinated)" || "CET(Central European Time)" || "ET(Eastern Time)" ||
  "PT(Pacific Time)" || "AEDT(Australian Eastern Daylight Time)" || "JST(Japan Standard Time)" || "IST(Indian Standard Time)");
 
  if(selectedTz == "Local Time"){
  setTime.FP1 = time.FP1, setTime.FP2 = time.FP2, setTime.FP3 = time.FP3, setTime.Quali = time.Quali,setTime.Race = time.Race;
  }else if(selectedTz == "UTC(Universal Time Coordinated)"){
    setTime.FP1 = time.FP1 + 4, setTime.FP2 = time.FP2 + 4, setTime.FP3 = time.FP3 + 4, setTime.Quali = time.Quali + 4, setTime.Race = time.Race + 4;
  }else if(selectedTz == "PT(Pacific Time)"){
    setTime.FP1 = time.FP1 - 3, setTime.FP2 = time.FP1 - 3, setTime.FP3 = time.FP3 - 3, setTime.Quali = time.Quali - 3, setTime.Race = time.Race - 3;
  } else if(selectedTz == "BST(British Standard Time)"){
    setTime.FP1 = time.FP1 + 5 , setTime.FP2 = time.FP2 + 5 , setTime.FP3 = time.FP3 + 5 , setTime.Quali = time.Quali + 5 , setTime.Race = time.Race + 5 ;
  } else if(selectedTz == "CET(Central European Time)"){
    setTime.FP1 = time.FP1 + 6 , setTime.FP2 = time.FP2 + 6 , setTime.FP3 = time.FP3 + 6 , setTime.Quali = time.Quali + 6 , setTime.Race = time.Race + 6 ;
  }else if(selectedTz == "ET(Eastern Time)"){
    setTime.FP1 = time.FP1 + 0, setTime.FP2 = time.FP2 + 0, setTime.FP3= time.FP3 + 0, setTime.Quali = time.Quali + 0, setTime.Race = time.Race + 0;
  }else if(selectedTz == "IST(Indian Standard Time)"){
    setTime.FP1 = time.FP1 + 3.5, setTime.FP2 = time.FP2 + 3.5, setTime.FP3 = time.FP3 + 3.5, setTime.Quali = time.Quali + 3.5, setTime.Race = time.Race + 3.5;
  }else if(selectedTz == "JST(Japan Standard Time)"){
    setTime.FP1 = time.FP1 - 11, setTime.FP2 = time.FP2 - 11, setTime.FP3 = time.FP3 - 11, setTime.Quali = time.Quali - 11, setTime.Race = time.Race - 11;
  }else if(selectedTz == "AEDT(Australian Eastern Daylight Time)"){
    setTime.FP1 = time.FP1 - 10, setTime.FP2 = time.FP2 - 10, setTime.FP3 = time.FP3 - 10, setTime.Quali = time.Quali - 10, setTime.Race = time.Race - 10;
  }else{
    setTime.FP1 = "", setTime.FP2 = "", setTime.FP3 = "", setTime.Quali = "", setTime.Race = "";
  }
  return(
    <>
   <section className="bg-image h-[100vh] w-screen bg-slate-950">
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
              ["1","Select your time zone"],
              ["2","Local Time"],
              ["3","BST(British Standard Time)"],
              ["4","UTC(Universal Time Coordinated)"],
              ["5","CET(Central European Time)"],
              ["6","ET(Eastern Time)"],
              ["7","PT(Pacific Time)"],
              ["8","AEDT(Australian Eastern Daylight Time)"],
              ["9","JST(Japan Standard Time)"],
              ["10","IST(Indian Standard Time)"],
            ].map(([key,Timezone])=>(
              <option key={key} value={Timezone} className="h-auto w-auto  bg-slate-950 text-white">{Timezone}</option>
            ))}
           </select>
          </div>

          <div className="h-[55vh] w-screen grid grid-cols-1 grid-rows-5 place-items-center">
            {[
                ["1","Free Practice 1",setTime.FP1],
                ["2","Free Practice 2",setTime.FP2],
                ["3","Free Practice 3",setTime.FP3],
                ["4","Qualifying",setTime.Quali],
                ["5","Race",setTime.Race],
              ].map(([key,session,time]) =>(
                <p key={key} className="text-lg font-semibols text-white">{session} :- {time}</p>
              ))}
          </div>

        </div>
      <Footer/>
    </section>
    </>
  );
}