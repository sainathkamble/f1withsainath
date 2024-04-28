import "../global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] w-screen bg-transparent text-white text-xl flex justify-evenly items-end">
          <Link href="./" className="nav-item h-full w-1/3 text-lg font-bold lg:text-2lg xl:text-2xl 2xl:text-2xl
           grid grid-cols-1 grid-rows-1 place-items-center">
            <p>Home</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          <Link href="./calendar" className="nav-item h-full w-1/3 text-lg font-bold lg:text-2lg xl:text-2xl 2xl:text-2xl
          grid grid-cols-1 grid-rows-1 place-items-center">
            <p>Calendar</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          {/* <Link href="./racetime" className="nav-item h-full w-1/3 flex text-lg font-semibold lg:text-lg xl:text-xl 2xl:text-xl
          grid grid-cols-1 grid-rows-1 place-items-center">
           <p>Race time</p>
           <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link> */}

          <Link href="./about" className="nav-item h-full w-1/3 text-lg font-bold lg:text-2lg xl:text-2xl 2xl:text-2xl
          grid grid-cols-1 grid-rows-1 place-items-center">
            <p>About</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>
        </nav>
        </>
    );
  }