import { FaCode } from "react-icons/fa6";
import { PiUserBold } from "react-icons/pi";
import { aboutData} from "../data/aboutData";
import AboutMe from "./AboutMe";
import Section from "./Section";
import Skills from "./Skills";
import { skillsData } from "../data/skillsData";
import { HiOutlineFolder } from "react-icons/hi";
import { projectsData } from "../data/projectsData";

export default function Main(){
    return(
        <>
          <main className="container mx-auto px-6 py-6 flex flex-col gap-12">

            <Section icon={PiUserBold} title={aboutData.title}>
              <AboutMe data={aboutData}/>
            </Section>

            <Section icon={FaCode} title={skillsData.title}>
              <Skills data={skillsData}/>
            </Section>

            <Section icon={HiOutlineFolder} title={projectsData.title} ></Section>

          </main>
        </>
    )
}    