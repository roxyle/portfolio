import { bss, cardmarket, alex, neting, fisio } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    blender,
    procreate,
    isotope,
    datatables,
    tictactoe,
    bootstrap,
    trello,
    angular,
    rpa,
    reacttailwind,
    mulesoft,
    dataweave,
    sqlicon,
    sqllang
} from "../assets/icons";

export const skillsLang = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        id: "html"
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        id: "css"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        id: "js"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        id: "ts"
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        id: "tw"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
        id: "java"
    },
    {
        imageUrl: sqllang,
        name: "SQL",
        type: "Backend",
        id: "SQL"
    },
    {
        imageUrl: dataweave,
        name: "DataWeave",
        type: "Backend",
        id: "dataWeave"
    }
];

export const skillsFrameLab = [
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
        id: "next"
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        id: "react"
    },
    {
        imageUrl: mulesoft,
        name: "MuleSoft",
        type: "Backend",
        id: "mulesoft"
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
        id: "angular"
    },

];
export const otherSkills = [
    {
        imageUrl: blender,
        name: "Blender",
        type: "Graphic",
        id: "blender"
    },
    {
        imageUrl: procreate,
        name: "Procreate",
        type: "Graphic",
        id: "procreate"
    },
    {
        imageUrl: trello,
        name: "Trello",
        type: "Organize",
        id: "trello"
    },
]

export const experiences = [
        {
        title: "Web Dev - React Next TypeScript",
        id: "fisio",
        company_name: "Studio Fisioterapia Bruno",
        icon: fisio,
        iconBg: "#f6f6f6",
        date: "2024 - 2025",
        points: [
        "Designed and developed a fully responsive website using React, Next.js, and TypeScript",
        "Collaborated directly with the client to define structure, content, and branding",
        "Implemented SEO best practices and optimized performance for production",
        "Deployed the site on Vercel and redirect to the official domain",
        "Provides ongoing support by implementing client-requested updates and modifications to the site",
        ],
    },
    {
        title: "Stage - JavaScript",
        id: "neting",
        company_name: "Neting SRL",
        icon: neting,
        iconBg: "#f6f6f6",
        date: "2023",
        points: [
            "Reproduced web pages using display flex",
            "Used DataTable for creating tables containing objects from APIs",
            "Used Isotope for creating dynamic lists",
            "Wrote articles for the company blog (using Yoast for SEO alignment)",
        ],
    },
    {
        title: "RPA Development - NICE Technology",
        id: "bss",
        company_name: "BSS-ONE",
        icon: bss,
        iconBg: "#f6f6f6",
        date: "2022",
        points: [
            "Developed a Login and Search Automatism in NICE technology",
            "Created and modified manuals and tech analysis for developer's team and clients (CheBanca!)",
            "Supported the Project Manager and Dev Team",
        ],
    },
    {
        title: "Freelance Translator",
        id: "mkm",
        company_name: "Cardmarket.com",
        icon: cardmarket,
        iconBg: "#f6f6f6",
        date: "2018 - 2021",
        points: [
            "Translated articles about TCG (Trading Card Games: Magic, YGO, Vanguard, Pokemon, ...)",
            "Formatted documents to maintain the original layout",
        ],
    },
    {
        title: "Graphic Artist",
        id: "alex",
        company_name: "Alexander's Company",
        icon: alex,
        iconBg: "#f6f6f6",
        date: "2014 - 2017",
        points: [
            "Created business cards",
            "Flyers and promotional graphics",
            "Billboards and leasing company graphics"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    // {
    //     name: 'GitHub',
    //     iconUrl: github,
    //     link: 'https://github.com/ylerox',
    // },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ylerox',
    }
];

export const projects = [
    {
        iconUrl: reacttailwind,
        id: "reacttailwind", 
        theme: 'btn-back-blue',
        name: 'Physiotherapy Clinic Website',
        description: "Professional website built with React and Next.js featuring responsive design, optimized user experience, and ongoing client maintenance.",
        link: 'https://www.fisioterapistacaserta.it/',
    },
        {
        iconUrl: sqlicon,
        id: "sql", 
        theme: 'btn-back-green',
        name: 'Query SQL',
        description: "This repository contains two data-analysis projects created to demonstrate my skills in SQL and relational databases.",
        link: 'https://github.com/roxyle/SQL',
    },
    {
        iconUrl: mulesoft,
        id: "mulesoft",
        theme: 'btn-back-yellow',
        name: 'Payment Orchestration',
        description: "Payment Processing System built with MuleSoft, implementing Compensation Patterns and Idempotency Handling for distributed transactions.",
        link: 'https://github.com/roxyle/mulesoft-payment-orchestration'
    },
        {
        iconUrl: reacttailwind,
        id: "reacttailwind", 
        theme: 'btn-back-pink',
        name: 'Crypto Market Dashboard',
        description: "Interactive cryptocurrency dashboard built with React, Next.js, and Recharts. Features real-time API integration, responsive charts, and CSV export functionality. Developed through pair programming approach.",
        link: 'https://crypto-dash-wine-seven.vercel.app/',
    },
    {
        iconUrl: rpa,
        id: "rpa",
        theme: 'btn-back-red',
        name: 'RPA',
        description: "RPA NICE Technology: Developed automation for bank employee to login, navigate, do some multi-criteria data filtering, and export to structured files. (I'm working on a NDA-safe side project to show what I can do).",
        link: '',        
    },
    {
        iconUrl: bootstrap,
        id: "bootstrap",
        theme: 'btn-back-green',
        name: 'Accordion',
        description: 'Bootstrap Exercise: Interactive FAQ component built with Bootstrap Accordions, featuring smooth transitions, responsive design, and clean layout to deliver a user-friendly, expandable interface.',
        link: 'https://www.order42.info/accordion/',
    },
    {
        iconUrl: datatables,
        id: "datatable",
        theme: 'btn-back-purple',
        name: 'API Table',
        description: 'DataTables Exercise in JS: Interactive DataTables.js project with API integration: fetches objects from an API, supports advanced multi-filtering, search, sorting, and pagination for efficient data exploration.',
        link: 'https://www.order42.info/dataTable/',
    },    
    {
        iconUrl: isotope,
        id: "isotope",
        theme: 'btn-back-yellow',
        name: 'Isotope - Selecting Items',
        description: 'Isotope exercise in JS: Interactive grid layout using Isotope.js: supports dynamic filtering, sorting, and animations to present numeric items in a responsive, visually engaging way with smooth transitions.',
        link: 'https://www.order42.info/isotope/numeri/',
    },
    // {
    //     iconUrl: tictactoe,
    //     id: "tictactoe",
    //     theme: 'btn-back-black',
    //     name: 'Tris',
    //     description: 'JS exercise: TicTacToe or Tris. Create a fixed game grid where players X and O take turns. Once a cell is chosen by a player, it should no longer be available. When a player gets three in a row, all cells should become unselectable and the game should reset',
    //     link: 'https://www.order42.info/games/tris/',
    // },

    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-green',
    //     name: 'Project Work - caricamento in corso (il link non funziona ancora)',
    //     description: 'Project Work per il corso Progettista Multimediale con l\'obiettivo di creare una Landing Page dinamica che abbia: una intestazione larga quanto il viewport; un menu di navigazione tra le pagine; un form di contatto; una sezione prodotti recuperati dall\'endpoint remoto dummyjson.com',
    //     link: '',
    // }
];