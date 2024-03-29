import "../global.css"

export default function Footer(){
    return(
        <section className="h-[10vh] w-screen bg-slate-950 flex justify-center items-center py-4">
           <p className="text-slate-50 text-lg">Created and maintained by Sainath Kamble</p>
            {/* <div className="social-media h-full w-2/3 py-0.5 flex justify-between items-center">
                  <a className="text-slate-50" href="https://github.com/sainathkamble">
                  <FontAwesomeIcon icon={faHouse}  className="text-2xl hover:underline"/>
                  </a>
                  <a className="text-slate-50" href="https://www.instagram.com/sainath.io/">
                  <FontAwesomeIcon icon={faHouse}  className="text-2xl hover:underline"/>
                  </a>
                  <a className="text-slate-50" href="https://twitter.com/Sainath83162517">
                  <FontAwesomeIcon icon={faHouse}  className="text-2xl hover:underline"/>
                  </a>
                  <a className="text-slate-50" href="#">
                  <FontAwesomeIcon icon={faHouse}  className="text-2xl hover:underline"/>
                  </a>
            </div>  */}
       </section> 
    );
}