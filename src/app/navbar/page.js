import "../global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[8vh] w-screen bg-black text-slate-50 text-xl flex justify-evenly items-end">
          <Link href="./" className="h-full w-1/3 flex justify-center items-center text-xl font-bold hover:bg-slate-800">Home</Link>
          <Link href="./livestream" className="h-full w-1/3 flex justify-center items-center text-xl font-bold  hover:bg-slate-800">Livestrem</Link>
          {/* <Link href="./racetime" className="h-full w-1/3 flex justify-center items-center text-xl font-bold  hover:bg-slate-500">Race time</Link> */}
          <Link href="./about" className="h-full w-1/3 flex justify-center items-center text-xl font-bold  hover:bg-slate-800">About</Link>
        </nav>
        </>
    );
}