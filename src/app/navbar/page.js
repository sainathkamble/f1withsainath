import "../global.css";
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] w-screen bg-black text-slate-50 text-xl flex justify-evenly items-center">
          <Link href="./" className="px-2 py-2 hover:bg-slate-500">Home</Link>
          <Link href="./livestream" className="px-2 py-2 hover:bg-slate-500">Livestrem</Link>
          <Link href="./about" className="px-2 py-2 hover:bg-slate-500">About</Link>
        </nav>
        </>
    );
}