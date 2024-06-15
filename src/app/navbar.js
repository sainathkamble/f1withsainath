import "./global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] w-screen bg-transparent text-xl flex justify-evenly items-end">
          {
            [
              ["1","Home","./"],
              ["2","Calendar","./calendar"],
              ["3","GP Time","./gptime"],
              ["4","About","./about"],
            ].map(([key,navitem,target])=>(
              <Link key={key} href={target} className="h-full w-1/3 text-lg font-semibold sm:text-sm sm:font-medium md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl
              grid grid-cols-1 grid-rows-1 place-items-center text-white hover:text-red-600 group">
              <p>{navitem}</p>
              <div className="h-1 w-full bg-red-600 invisible group-hover:visible"></div>
              </Link>
            ))}
        </nav>
        </>
    );
  }