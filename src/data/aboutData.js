import { BsRocketTakeoff } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { MdFilterCenterFocus } from "react-icons/md";

export const aboutData = {
    title: "chi sono",
    description: "Junior Full-Stack Web Developer specializzata in React, con background in Industrial Design che mi consente di unire competenze tecniche, creatività e attenzione all'utente. Mi appassiona creare interfacce web moderne e responsive, curando sia la qualità del codice che la User Experience. Curiosa e determinata, affronto ogni nuova sfida come un'opportunità di crescita professionale e personale.",

    cards: [
        {
            id: 1,
            icon: MdFilterCenterFocus,
            title: "focus",
            items: ["React", "Laravel", "UX/UI"]

        },

        {
            id: 2,
            icon: FaCode,
            title: "approccio",
            items: ["Problem Solving", "Clean Code", "Continuous Learning"]
        },

        {
            id: 3,
            icon: BsRocketTakeoff,
            title: "obiettivo",
            items: ["Crescere come", "Frontend/Full Stack", "Developer"]
        },
    ]
}