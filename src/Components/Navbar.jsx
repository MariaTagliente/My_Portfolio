import { FaBars } from "react-icons/fa";
import { HiBars3, HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router";

export default function Navbar(){
    return(
        <>
           <div className="w-full font-inter uppercase z-50">
            <div className="container mx-auto px-6 md:px-0 navbar">

                <div className="navbar-start flex items-center mt-1">

                    {/* LOGO */}
                    <span className="ml-3 lg:ml-0 flex items-end text-4xl font-orbitron font-semibold bg-clip-text text-transparent" style={{backgroundImage:`linear-gradient(120deg, rgba(0, 255, 255, 2), rgba(220, 105, 255, 1))`}}>
                        MT.                        
                    </span>                          
                </div>

                <div className="navbar-center hidden lg:flex text-white mt-3">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            <li><a href="" className="hover:text-gray-400">chi sono</a></li>
                            <li><a href="" className="hover:text-gray-400">competenze</a></li>
                            <li><a href="" className="hover:text-gray-400">formazione</a></li>
                            <li><a href="" className="hover:text-gray-400">progetti</a></li>
                            <li><a href="" className="hover:text-gray-400">passioni</a></li>
                            <li><a href="" className="hover:text-gray-400">contatti</a></li>
                        </ul>               
                    </div> 

                    <div className="navbar-end gap-4 mt-1">
                        <button className="px-4 py-0.5 md:px-8 md:py-1.5 rounded-md border border-(--turchese) text-sm md:text-base text-white">IT / EN</button>

                        {/* DROPDOWN MOBILE */}
                        <div className="dropdown lg:hidden relative">
                            <div tabIndex={0} role="button" className="text-2xl text-gray-300">
                                <HiMiniBars3/>                     
                            </div>
                            
                            <ul className="menu dropdown-content gap-1 absolute right-0 translate-x-2 mt-4 z-[100] p-4 border border-(--turchese)/20 bg-(--violetDark)/70 backdrop-blur-sm rounded-box w-60 text-white">
                               <li><a className="hover:text-gray-400">chi sono</a></li>
                               <li><a className="hover:text-gray-400">competenze</a></li>
                               <li><a className="hover:text-gray-400">formazione</a></li>
                               <li><a className="hover:text-gray-400">progetti</a></li>
                               <li><a className="hover:text-gray-400">passioni</a></li>
                               <li><a className="hover:text-gray-400">contatti</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
            
          </div>
        </>
    )
}