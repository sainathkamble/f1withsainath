import "../global.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub , faInstagram , faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <section className="h-[12vh] w-screen bg-black grid grid-cols-1 grid-rows-2 gap-2 place-items-center py-2">
           <p className="text-slate-50 text-md font-medium sm:text-xl md:text-xl lg:xl xl:twxt-xl 2xl:text-2xl ">Created and maintained by Sainath Kamble</p>
           <div className="h-auto w-2/5 flex justify-evenly items-cente">
           <Link href="https://github.com/sainathkamble">
             <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-slate-50 sm:text-xl md:text-xl lg:xl xl:twxt-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://www.instagram.com/sainath.io/">
             <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-slate-50 sm:text-xl md:text-xl lg:xl xl:twxt-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://twitter.com/sainaththedev">
             <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-slate-50 sm:text-xl md:text-xl lg:xl xl:twxt-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           </div>
       </section> 
    );
}