import "../global.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub , faInstagram , faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <section className="h-[10vh] w-screen bg-black flex justify-between place-items-center px-4 py-2">

           <p className="h-auto w-4/5 text-slate-50 font-normal hover:text-red-600 sm:text-md md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
            Created and maintained by Sainath Kamble
           </p>
          
           <div className="h-auto w-1/5 flex justify-evenly items-cente">
           <Link href="https://github.com/sainathkamble">
             <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:xl xl:text-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://www.instagram.com/sainath.io/">
             <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:xl xl:text-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           <Link href="https://twitter.com/sainaththedev">
             <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-slate-50 hover:text-red-600 sm:text-xl md:text-xl lg:xl xl:text-xl 2xl:h-6 2xl:w-6"/>
           </Link>
           </div>
       </section> 
    );
}