import { bss, cardmarket, alex, neting } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
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
    angular
} from "../assets/icons";

export const skillsLang = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
];

export const skillsFrameLab = [
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },

];
export const otherSkills = [
    {
        imageUrl: blender,
        name: "Blender",
        type: "Graphic",
    },
    {
        imageUrl: procreate,
        name: "Procreate",
        type: "Graphic",
    },
    {
        imageUrl: trello,
        name: "Trello",
        type: "Organize",
    },
]

export const experiences = [
    {
        title: "Stage - JavaScript",
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
        title: "RPA Development - NICE",
        company_name: "BSS-ONE",
        icon: bss,
        iconBg: "#f6f6f6",
        date: "2022",
        points: [
            "Developed a Login Dashboard and Search Automatism in NICE technology",
            "Created and/or modified manuals and tech analysis for developer's team and clients (CheBanca!)",
            "Supported the Project Manager and Dev Team",
        ],
    },
    {
        title: "Freelance Translator",
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
        iconUrl: bootstrap,
        theme: 'btn-back-pink',
        name: 'Accordion',
        description: 'Bootstrap Exercise: Create a user interface using Bootstrap Accordions',
        link: 'https://www.order42.info/accordion/',
    },
    {
        iconUrl: datatables,
        theme: 'btn-back-blue',
        name: 'API Table',
        description: 'DataTables Exercise in JS: Table. Create a table that fetches a series of objects via API. Allow the user to search or filter the items',
        link: 'https://www.order42.info/dataTable/',
    },    
    {
        iconUrl: isotope,
        theme: 'btn-back-yellow',
        name: 'Isotope - Selecting Items',
        description: 'Isotope exercise in JS: Numbers. Create a list of numbers that can be rearranged and filtered by the user',
        link: 'https://www.order42.info/isotope/numeri/',
    },
    {
        iconUrl: tictactoe,
        theme: 'btn-back-black',
        name: 'Tris',
        description: 'JS exercise: TicTacToe or Tris. Create a fixed game grid where players X and O take turns. Once a cell is chosen by a player, it should no longer be available. When a player gets three in a row, all cells should become unselectable and the game should reset',
        link: 'https://www.order42.info/games/tris/',
    },
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-green',
    //     name: 'Project Work - caricamento in corso (il link non funziona ancora)',
    //     description: 'Project Work per il corso Progettista Multimediale con l\'obiettivo di creare una Landing Page dinamica che abbia: una intestazione larga quanto il viewport; un menu di navigazione tra le pagine; un form di contatto; una sezione prodotti recuperati dall\'endpoint remoto dummyjson.com',
    //     link: '',
    // }
];