import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Profile from "../../assets/profile.jpg";
import CornerFrame from "./CornerFrame";

export default function Hero(){
    return(
        <>
          <section className="min-h-screen flex items-center relative overflow-hidden hero-gradient py-16 md:py-0">

            {/* SFONDO ANIMATO */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"/>
            <div className="absolute w-[500px] h-[500px] bg-(--violetDark)/40 blur-[140px] rounded-full top-[-150px] left-[-150px] float-slow" />
            <div className="absolute w-[500px] h-[500px] bg-(--turchese)/40 blur-[140px] rounded-full top-[-150px] left-[-150px] float-slow" />
            <div className="absolute w-[500px] h-[500px] bg-(--pink)/30 blur-[140px] rounded-full bottom-[-150px] right-[-150px] float-slow" />

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 mx-auto px-6 md:px-0 items-center">
                {/* COLONNA SX TESTO */}
                <div className="text-center md:text-left">
                    <span className="text-(--pink) uppercase font-semibold">Ciao, sono</span>

                    <h1 className="mt-3 text-4xl md:text-6xl uppercase font-orbitron font-semibold">
                        <span className="block text-white cyber-name">Maria</span>
                        <span className="block text-(--turchese) cyber-surname">Tagliente</span>
                    </h1>

                    <div className="mt-4 inline-block px-4 py-2 md:px-5 md:py-3 rounded-md border border-(--turchese) bg-(--turchese)/10 backdrop-blur-sm text-white font-semibold uppercase text-sm md:text-base">
                        Junior Full-Stack Web Developer
                    </div>

                    <p className="mt-4 text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
                        Trasformo idee in applicazioni web moderne e responsive, con focus su React e tecnologie full stack. Sempre alla ricerca di nuove sfide e opportunità per crescere come sviluppatrice.
                    </p>

                    <div className="mt-6 flex flex-col md:flex-row gap-6 font-semibold text-sm items-center md:items-start justify-center md:justify-start">
                        <button className="px-5 py-2.5 cursor-pointer rounded-md bg-(--turchese) text-(--violetDark) uppercase shadow-lg shadow-gray-950 hover:scale-105 transition duration-300 flex items-center gap-3">
                            Scopri i miei progetti
                            <FaArrowRightLong size={25} className="text-(--violetDark)"/>
                        </button>
                        
                        <button className="px-5 py-2.5 cursor-pointer rounded-md border border-(--turchese)/50 text-white uppercase shadow-lg shadow-gray-950 hover:border-(--turchese) transition flex items-center gap-3">
                            Scarica cv
                            <MdOutlineFileDownload size={25} className="text-(--turchese)"/>
                        </button>
                    </div>
                </div>
            
                {/* COLONNA DX FOTO */}
                <div className="flex justify-center">
                    <div className="relative group w-[300px] md:w-[400px]">

                        <div className="absolute inset-0 bg-(--turchese)/20 blur-3xl scale-110"/>

                        <CornerFrame>
                            <div className="relative w-full h-full p-[2px] rounded-xl overflow-hidden transition-all duration-500" style={{background: "linear-gradient(135deg,var(--turchese),var(--pink))"}}>
                                <img src={Profile} alt="Maria Tagliente" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105 cursor-pointer"/>
                            </div>                           
                        </CornerFrame>
      
                    </div>
                </div>

            </div>

            
          </section>
          
        </>
    )
}