import "../global.css"
import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <nav className="h-[10vh] width-screen bg-slate-950 text-slate-50 text-xl flex justify-evenly items-center">
          <Link src="./" className="hover:bg-slate-500">Home</Link>
          <Link src="./livestream" className="hover:bg-slate-500">Livestrem</Link>
          <Link src="./about" className="hover:bg-slate-500">About</Link>
        </nav>
        <div>abc</div>
        </>
    );
}