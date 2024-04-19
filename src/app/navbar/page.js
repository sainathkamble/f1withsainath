import "../global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] w-screen bg-black text-slate-50 text-xl flex justify-evenly items-end">
          <Link href="./" className="nav-item h-full w-1/3 text-lg font-semibold hover:bg-slate-800 lg:text-lg xl:text-xl 2xl:text-xl
           grid grid-cols-1 grid-rows-1 place-items-center">
            <p>Home</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          <Link href="./livestream" className="nav-item h-full w-1/3 text-lg font-semibold  hover:bg-slate-800 lg:text-lg xl:text-xl 2xl:text-xl
          grid grid-cols-1 grid-rows-1 place-items-center">
            <p>Livestream</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>

          {/* <Link href="./racetime" className="nav-item h-full w-1/3 flex text-lg font-semibold  hover:bg-slate-800 lg:text-lg xl:text-xl 2xl:text-xl
          grid grid-cols-1 grid-rows-1 place-items-center">
           <p>Race time</p>
           <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link> */}

          <Link href="./about" className="nav-item h-full w-1/3 text-lg font-semibold  hover:bg-slate-800 lg:text-lg xl:text-xl 2xl:text-xl
          grid grid-cols-1 grid-rows-1 place-items-center">
            <p>About</p>
            <div className="nav-underline h-1 w-full bg-red-600 invisible"></div>
          </Link>
        </nav>
        </>
    );
  }