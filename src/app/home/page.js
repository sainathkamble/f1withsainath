'use client'
import "../global.css";
import Link from "next/link";
import React from "react";
import Typed from "typed.js";

export default function Hero(){

    let currentRace = "Japanese"; 

   //typed js
       const el = React.useRef(null);
      
        React.useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>Watch<i> F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!','Watch F1 live for free!'],
            typeSpeed: 100,
          });
      
          return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);
     //Race time countdown
      let refQualiTime = new Date("apr 03, 2024 23:00:00").getTime();
      let refRaceTime = new Date("apr 03, 2024 24:00:00").getTime();
      let currentTime  = new Date().getTime();
      
      let differenceToQuali = refQualiTime - currentTime;
      let differenceToRace = refRaceTime - currentTime;

     let daysToQuali = Math.floor(differenceToQuali/(1000*60*60*24));
     let hoursToQuali = Math.floor((differenceToQuali%(1000*60*60*24))/(1000*60*60));
     let minToQuali = Math.floor((differenceToQuali%(1000*60*60))/(1000*60));
     let secToQuali = Math.floor((differenceToQuali%(1000*60))/1000);

     let daysToRace = Math.floor(differenceToRace/(1000*60*60*24));
     let hoursToRace = Math.floor((differenceToRace%(1000*60*60*24))/(1000*60*60));
     let minToRace = Math.floor((differenceToRace%(1000*60*60))/(1000*60));
     let secToRace = Math.floor((differenceToRace%(1000*60))/1000);

     //when countdoen is 0 then
     let quali =  "Quali :-"
     if(daysToQuali && hoursToQuali && minToQuali && secToQuali <= 0){
      quali = "The Quali is live!";
      daysToQuali =0; hoursToQuali = 0; minToQuali=0; secToQuali= 0;
     }

     let race =  "Race :-"
     if(daysToRace && hoursToRace && minToRace && secToRace <= 0){
      race = "The Race is live!";
      daysToRace =0; hoursToRace = 0; minToRace=0; secToRace= 0;
     }
    return(
        <>
        <section className="h-[80vh] w-screen bg-slate-950 text-slate-50 flex justify-evenly items-center flex-wrap">

         <div className="h-[10vh] w-screen bg-slate-950 flex justify-center items-center text-4xl font-bold text-slate-50 py-4">
            <span ref={el} />
          </div>

          <div className="h-auto w-2/3 px-4 py-4 rounded-xl grid place-items-center border">
             <p className="text-lg my-2">{currentRace} Grand Prix 2024 starts in</p>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                {quali} {daysToQuali} : {hoursToQuali} : {minToQuali} : {secToQuali}
              </div>
              <div className="h-auto w-auto text-slate-50 text-lg my-2">
                {race} {daysToRace} : {hoursToRace} : {minToRace} : {secToRace}
              </div>
             <Link href="./livestream" className=" my-2 py-2 px-2 bg-red-600 rounded-xl text-xl font-semibold">{currentRace} Grand Prix</Link>
          </div>

          <div className="h-auto w-2/3 bg-red-600 py-2 rounded-xl flex justify-center items-end border">
            <Link href="./calendar" className=" text-slate-50 text-xl font-bold">F1 Calender 2024</Link>
          </div>
          
      </section>
        </>
    );
}