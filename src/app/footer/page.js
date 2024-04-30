import "../global.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub , faInstagram , faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <section className="h-[10vh] w-screen bg-black flex justify-between place-items-center px-4 py-2">

           <p className="h-auto text-slate-50 font-normal hover:text-red-600 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-4/5 2xl:w-4/5 sm:text-md md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
            Created and maintained by Sainath Kamble
           </p>
          
           <div className="h-auto flex justify-evenly items-cente sm:w-2/5 md:2/5 lg:w-2/5 xl:w-1/5 2xl:w-1/5">
           <Link href="https://github.com/sainathkamble">
             <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://www.instagram.com/sainath.io/">
             <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://twitter.com/sainaththedev">
             <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:text-xl xl:text-2xl  2xl:text-2xl 2xl:h-6 2xl:w-6"/>
           </Link>
           </div>
       </section> 
    );
}