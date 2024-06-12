'use client'
import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Aabout(){
    
    return(
<>
   <section className="bg-image h-[100vh] w-screnn grid place-items-center">
    <Navbar/>
      <div className="h-[80vh] w-screen p-4 overflow-y-scroll custom overflow-x-hidden"> 
      <p className="h-auto w-screen m-2 text-2xl text-white font-semibold flex justify-center items-center">What is Formula 1?</p>
         <div className="h-auto w-screen grid grid-cols-1 grid-rows-13 place-items-center">
         {
            [
             ["1","1.Overview","Formula One:The pinnacle of single-seater motor racing, governed by the Fédération Internationale de l'Automobile (FIA)."],
             ["2","2.Team & Drivers","Teams: Typically, there are 10-12 teams, each with two drivers. Drivers: Professional racers contracted by teams. Each team fields two cars in every race."],
             ["3","3.Cars & Regulations","Cars: Highly advanced, open-wheel, single-seater vehicles. Engine: 1.6-liter V6 turbo hybrid power units. Aerodynamics: Key for performance, with strict regulations to ensure safety and competition. Tyres: Provided by a single manufacturer (currently Pirelli), with multiple compounds (soft, medium, hard, wet, intermediate)."],
             ["4","4.Season Structure","Calendar: Consists of 22-24 races held worldwide. Grand Prix: Each race event, typically over a weekend (Friday to Sunday)."],
             ["5","5.Race Weekend Format","Friday: Two practice sessions (FP1 and FP2) for teams to test setups and strategies. Saturday: One practice session (FP3) followed by Qualifying. Sunday: The main race."],
             ["6","6.Qualifying","Format: Divided into three sessions (Q1, Q2, Q3). Q1: All cars participate; the slowest five are eliminated. Q2: Remaining 15 cars; the slowest five are eliminated. Q3: Top 10 battle for pole position. Objective: Set the fastest lap time to determine the starting grid."],
             ["7","7.The Race","Distance: Around 305 km or 190 miles (except Monaco). Starting Grid: Determined by Qualifying results. Race Start: Formation lap followed by a standing start. Pit Stops: For tire changes and sometimes repairs. Safety Car: Deployed in case of incidents to control the race pace. Flags: Various flags signal different conditions (e.g., yellow for caution, red for stop, blue for letting faster cars pass)."],
             ["8","8.Scoring System","Points: Awarded to the top 10 finishers. 1st place: 25 points 2nd place: 18 points 3rd place: 15 points Down to 10th place: 1 point Fastest Lap: 1 extra point if in top 10."],
             ["9","9.Championship","Drivers' Championship: Individual title for drivers based on accumulated points. Constructors' Championship: Team title based on points accumulated by both drivers."],
             ["10","10.Rules and Reagulations","Technical Regulations: Detailed rules about car construction and performance. Sporting Regulations: Rules governing race procedures, conduct, and penalties."],
             ["11","11.Strategy","Tire Management: Choosing the right tires at the right time. Fuel Management: Efficient use to ensure optimal performance. Race Strategy: Pit stop timing, overtaking tactics, and adapting to race conditions."],
             ["12","12.Safety","Driver Safety: Helmets, HANS devices, fireproof suits. Car Safety: Crash structures, halo devices, regular FIA inspections. Track Safety: Barriers, run-off areas, marshals, and medical teams."],
             ["13","13.Technology & Innovation","Research and Development: Constant evolution in aerodynamics, materials, and electronics. Telemetry: Real-time data transmission for performance analysis. Hybrid Systems: Energy recovery systems (ERS) and electric motors integrated with the engine."],
            ].map(([key,header,description])=>(
              <div key={key} className="h-auto w-4/5 m-2 p-2 border rounded-lg info">
               <p className="h-auto w-full text-lg font-semibold text-white">{header}</p>
               <p className="h-auto w-full text-white">{description}</p>
              </div>
            ))}
         </div>
      </div>
    <Footer/>
  </section>
</>
    );
}