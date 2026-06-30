import converseImg from "../assets/projects/Converse.png";
import rehacktorImg from "../assets/projects/Rehacktor.png";
import pomodoroImg from "../assets/projects/Pomodoro.png";
import portfolioImg from "../assets/projects/Portfolio.png";
import prestoImg from "../assets/projects/Presto.png";

export const projectsData = {
    title: "progetti",
    
    projects: [

        {
            id: 1,
            title: "Rehacktor", 
            description: "Piattaforma interattiva in stile cyberpunk per la scoperta e la gestione di videogiochi, con autenticazione, recensioni.",
            image: rehacktorImg,
            technologies: [ "React", "Javascript", "Supabase", "Tailwind CSS", "DaisyUI"],

            links:{
                demo: "https://rehacktor-progetto-react.vercel.app",
                github: "https://github.com/MariaTagliente/REHACKTOR_progetto-React"
            },

            featured: true
        },

        {
            id: 2,
            title: "Presto",
            description: "Piattaforma annunci che permette agli utenti di pubblicare, cercare e gestire annunci con sistema di ruoli e moderazione contenuti.",
            image: prestoImg,
            technologies: ["Laravel", "PHP", "MySQL", "Google Vision API", "Bootstrap"],

            links:{
                demo: "",
                github: "https://github.com/MariaTagliente/Presto.it"
            },

            featured: true
        },

        {
            id: 3,
            title: "Pomodoro Timer",
            description: "App per la produttività con timer configurabile. Include la personalizzazione del tema dell'interfaccia e la scelta di effetti sonori, con asset audio ottenuti da Pixabay.",
            image: pomodoroImg,
            technologies: ["React", "Javascript", "Tailwind CSS"],

            links:{
                demo: "",
                github: "https://github.com/MariaTagliente/Pomodoro-Timer"
            }
        },

        {
            id: 4,
            title: "E-commerce Converse Style",
            description: "E-commerce front-end ispirato a Converse. Include homepage e pagina shop con filtri per categoria, prezzo e ricerca prodotti.",
            image: converseImg,
            technologies: [ "HTML", "CSS", "Javascript", "Bootstrap"],
            links:{
                demo: "",
                github: "https://github.com/MariaTagliente/E-Commerce-PRESTO"
            }
        },

        {
            id: 5,
            title: "Portfolio",
            description: "Portfolio personale sviluppato con React orientato alla UX.",
            image: portfolioImg,
            technologies: [ "React", "Javascript", "Tailwind CSS", "DaisyUI"],
            links:{
                demo: "",
                github: "https://github.com/MariaTagliente/My_Portfolio"
            }
        },

        

        
    ]
}