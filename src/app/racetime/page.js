import "../global.css";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

export default function Time(){
     
  return(
    <>
    <Navbar/>
    <section className="h-[80vh] w-screen bg-slate-950">

          <p className="h-auto w-screen text-xl text-slate-50 flex justify-center py-4">Check race time in your time zone</p>

          <div className="h-[85%] w-screen flex justify-evenly items-start flex-wrap py-4 px-4 overflow-y-scroll container">

           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">UTC(Coordinate Universal Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>
            
           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">CET(Central European Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">ET(Eastern Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">PT(Pacific Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">AEDT(Australian Eastern Daylight Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-2/3 rounded-lg px-2 py- mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">JST(Japan Standard Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
               ].map(([session,time])=>(
                 <li className="text-slate-50 py-1">{session} : {time}</li>
               ))}
             </ul>
           </div>

           <div className="h-auto w-2/3 rounded-lg px-2 py-2 mx-1 my-2 sm:w-1/2 sm:my-4 md:w-1/3 lg:w-1/2 xl:w-1/4 2xl:w-1/4 border">
           <p className="text-slate-50 text-lg font-medium flex justify-center py-2">IST(Indian Standard Time)</p>
             <ul className="grid grid-cols-1 grid-rows-5 gap-1">
               {[
                ['Free Practice 1','0'],['Free Practice 2','0'],['Free Practice 3','0'],['Qualifying','0'],['Race','0'],
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