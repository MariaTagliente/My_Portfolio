import { useState } from "react";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Projects({data}){

    const [projectIndex, setProjectIndex] = useState(0);

    const perPage = 3;

    const prevProject = ()=>{
        setProjectIndex((prev)=>Math.max(prev - 1, 0));
    }

    const nextProject = ()=>{
        setProjectIndex((prev)=>Math.min(prev + 1, data.projects.length - perPage));
    }

    const visibleProjects = data.projects.slice(projectIndex, projectIndex + perPage);

    return(
        <>
          <div className="relative group">
            <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2  px-2 text-4xl z-10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
               <IoIosArrowBack onClick={prevProject} className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-xl border border-(--turchese)/30 text-(--turchese) shadow-lg transition hover:scale-110 hover:bg-(--turchese)/10"/>
               <IoIosArrowForward onClick={nextProject} className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-xl border border-(--turchese)/30 text-(--turchese) shadow-lg transition hover:scale-110 hover:bg-(--turchese)/10"/>
            </div>

            {/* MOBILE: tutti i progetti */}
            <div className="grid grid-cols-1 gap-6 md:hidden">
                {data.projects.map((project)=>(
                    <div key={project.id} className="flex flex-col border border-(--turchese)/40 rounded-lg bg-(--violetLight)/40 backdrop-blur-lg shadow-lg shadow-black/40">
                        <img src={project.image} alt="card project" className="w-full rounded-lg object-cover"/>
                        
                        <div className="px-4 py-4 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-(--turchese) uppercase text-lg">
                                    {project.title}
                                </h3>
                                
                                {project.featured && (
                                    <span className="text-xs px-2 py-1 rounded bg-(--turchese)/20 text-(--turchese) border border-(--turchese)/40">
                                        Featured
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-gray-300 text-sm">
                                {project.description}
                            </p>
                            
                            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm">
                                {project.technologies.map((tech)=>(
                                    <li key={tech} className="border border-(--turchese)/40 rounded-md px-2.5 py-1">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex justify-between mt-auto pt-3 text-(--turchese)">
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" className="flex items-center gap-2">
                                        Demo <FaArrowRightLong />
                                    </a>
                                )}
                                
                                <a href={project.links.github} target="_blank" className="flex items-center gap-2">
                                    GitHub <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SCHERMO MEDIO  */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
                {visibleProjects.map((project) => (
                    <div key={project.id} className="flex flex-col border border-(--turchese)/40 rounded-lg bg-(--violetLight)/40 backdrop-blur-lg shadow-lg shadow-black/40 transition duration-300 hover:border-(--turchese) hover:shadow-xl animate-[fadeSlide_350ms_ease-out]">
                        <img src={project.image} alt="card project" className="w-full rounded-lg object-cover"/>
                        
                        <div className="px-4 md:px-5 py-4 flex flex-col flex-1 gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-(--turchese) uppercase text-lg">
                                    {project.title}
                                </h3>
                                
                                {project.featured && (
                                    <span className="text-xs px-2 py-1 leading-none rounded bg-(--turchese)/20 text-(--turchese) border border-(--turchese)/40">
                                        Featured
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-gray-300 min-h-24 text-sm md:text-base">
                                {project.description}
                            </p>
                            
                            <ul className="text-gray-300 flex flex-wrap gap-3 text-sm md:text-base">
                                {project.technologies.map((tech)=>(
                                    <li key={tech} className="border border-(--turchese)/40 rounded-md px-2.5 py-1">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex justify-between mt-auto pt-3 text-(--turchese)">
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" className="flex items-center gap-2 cursor-pointer">
                                        Demo 
                                        <FaArrowRightLong/>
                                    </a>
                                )}
                                
                                <a href={project.links.github} target="_blank" className="flex items-center gap-2 cursor-pointer">
                                    GitHub
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </div>            
                ))}
            </div>
          </div>
        </>
    )
}