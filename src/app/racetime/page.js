import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Time(){
     
  let currentRace = "Japanese Grand Prix"; 

  return(
    <>
    <Navbar/>
    <section className="h-[80vh] w-screen bg-slate-950">

          <p className="h-auto w-screen text-xl text-slate-50 flex justify-center py-4 px-4">{currentRace} time in your time zone</p>

          <div className="h-[85%] w-screen flex justify-evenly items-start flex-wrap py-4 px-[10%] overflow-y-scroll container">

           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">UTC(Coordinate Universal Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','2:30AM'],['Free Practice 2','6:00AM'],['Free Practice 3','2:30AM'],['Qualifying','6:00AM'],['Race','5:00AM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>
            
           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">CET(Central European Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','4:30AM'],['Free Practice 2','8:00AM'],['Free Practice 3','4:30AM'],['Qualifying','8:00AM'],['Race','7:00AM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">ET(Eastern Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','10:30PM'],['Free Practice 2','2:00AM'],['Free Practice 3','10:30PM'],['Qualifying','2:00AM'],['Race','1:00AM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">PT(Pacific Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','7:30PM'],['Free Practice 2','11:00PM'],['Free Practice 3','7:30PM'],['Qualifying','11:00PM'],['Race','10:PM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">AEDT(Australian Eastern Daylight Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','1:30PM'],['Free Practice 2','5:00PM'],['Free Practice 3','1:30PM'],['Qualifying','5:00PM'],['Race','3:00PM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-4/5 rounded-lg px-2 py- mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">JST(Japan Standard Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','11:30AM'],['Free Practice 2','3:00PM'],['Free Practice 3','11:30AM'],['Qualifying','3:00PM'],['Race','2:00PM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-4/5 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">IST(Indian Standard Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','8:00AM'],['Free Practice 2','11:30AM'],['Free Practice 3','8:00AM'],['Qualifying','11:30AM'],['Race','10:30AM'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul> 
           </div>

          </div>
    </section>
    <Footer/>
    </>
  );
}