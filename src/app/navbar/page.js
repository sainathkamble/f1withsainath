import "../global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] w-screen bg-transparent text-xl flex justify-evenly items-end">
          <Link href="./" className="nav-item h-full w-1/3 text-lg font-semibold sm:text-sm sm:font-medium md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl
           grid grid-cols-1 grid-rows-1 place-items-center text-white hover:text-red-600">
            <p>Home</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          <Link href="./calendar" className="nav-item h-full w-1/3 text-lg font-semibold sm:text-sm sm:font-medium md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl
          grid grid-cols-1 grid-rows-1 place-items-center text-white hover:text-red-600">
            <p>Calendar</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          <Link href="./gptime" className="nav-item h-full w-1/3 text-lg font-semibold sm:text-sm sm:font-medium md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl
          grid grid-cols-1 grid-rows-1 place-items-center text-white hover:text-red-600">
           <p>GP time</p>
           <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          <Link href="./about" className="nav-item h-full w-1/3 text-lg font-semibold sm:text-sm sm:font-medium md:text-md lg:text-lg xl:text-2xl 2xl:text-2xl
          grid grid-cols-1 grid-rows-1 place-items-center text-white hover:text-red-600">
            <p>About</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>
        </nav>
        </>
    );
  }