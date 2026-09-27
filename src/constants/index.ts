import { bss, cardmarket, alex, neting, fisio, teach } from "../assets/images";
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
    earning,
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
    sqllang,
    phone
} from "../assets/icons";
import { Skill, PortfolioProject, ProjectCategory } from "@/types";

export const skillsLang: Skill[] = [
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
    },
    
];

export const skillsFrameLab: Skill[] = [
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
export const otherSkills: Skill[] = [
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
        title: "Trainer - AI for Business Processes",
        id: "gjordan",
        company_name: "GJordan, \"English, AI & Employability\" Academy (remote)",
        icon: teach,
        iconBg: "#f6f6f6",
        date: "2026 - present",
        points: [
            "Designed the 136 hour AI module: generative AI fundamentals, data security, business process mapping, prompt engineering, data analysis and reporting",
            "Built hands-on exercises on fictional company data: comparing outputs of the same prompt, checking AI outputs containing errors and unsupported data, redacting documents with confidential data",
            "Taught how to structure complex prompts with context, plus Markdown and markup basics",
            "Built with AI an HTML/JavaScript attendance register tool: decimal hour calculation, Excel export, JSON backup",
        ],
    },
        {
        title: "Web Dev - React Next TypeScript",
        id: "fisio",
        company_name: "Studio Fisioterapia Bruno",
        icon: fisio,
        iconBg: "#f6f6f6",
        date: "2024 - present",
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

export const projectCategories: ProjectCategory[] = ["Integration", "RPA", "Frontend", "Data"];

export const projects: PortfolioProject[] = [
    {
        iconUrl: reacttailwind,
        id: "physio-website",
        theme: 'btn-back-blue',
        name: 'Physiotherapy Clinic Website',
        category: 'Frontend',
        tags: ['React', 'Next.js'],
        description: "Live client website for a physiotherapy practice: responsive design, UX focus and ongoing maintenance.",
        link: 'https://www.fisioterapistacaserta.it/',
    },
    {
        iconUrl: earning,
        id: "gross-to-net",
        theme: 'btn-back-pink',
        name: 'Gross to Net salary calculator',
        category: 'Frontend',
        tags: ['JavaScript', 'Design doc'],
        description: "Projects annual net salary from gross, showing every deduction. Design document PDF (Italian) downloadable from the page.",
        link: 'https://roxyle.github.io/calcolatore-da-RAL-a-netto/'
    },
    {
        iconUrl: mulesoft,
        id: "mulesoft-ui",
        theme: 'btn-back-yellow',
        name: 'Payment Orchestration (Simulator)',
        category: 'Integration',
        tags: ['MuleSoft', 'Compensation', 'Idempotency'],
        description: "UI simulation of a MuleSoft payment processing system, with compensation patterns and idempotency handling for distributed transactions.",
        link: 'https://mulesoft-payment-ui-demo.vercel.app/'
    },
    {
        iconUrl: rpa,
        id: "rpa-nda",
        theme: 'btn-back-red',
        name: 'RPA',
        category: 'RPA',
        tags: ['NICE', 'RPA'],
        description: "Bank automation with NICE: login, navigation, multi criteria filtering and export to structured files. Under NDA, see \"RPA (Simulation)\".",
        link: '',
    },
    {
        iconUrl: rpa,
        id: "rpa-simulation",
        theme: 'btn-back-red',
        name: 'RPA (Simulation)',
        category: 'RPA',
        tags: ['Next.js', 'TypeScript'],
        description: "Replicates the logic of a real automation under NDA: the robot navigates a mock portal, applies filters, paginates results and exports a CSV.",
        link: 'https://rpa-simulator.vercel.app/dashboard',
    },
    {
        iconUrl: sqlicon,
        id: "sql",
        theme: 'btn-back-blue',
        name: 'Query SQL (GitHub)',
        category: 'Data',
        tags: ['SQL'],
        description: "Two data analysis projects showing SQL queries on relational databases.",
        link: 'https://github.com/roxyle/SQL',
    },
    {
        iconUrl: mulesoft,
        id: "mulesoft-code",
        theme: 'btn-back-yellow',
        name: 'Payment Orchestration (GitHub)',
        category: 'Integration',
        tags: ['MuleSoft', 'Source code'],
        description: "Source code of the MuleSoft payment processing system: compensation patterns and idempotency handling for distributed transactions.",
        link: 'https://github.com/roxyle/mulesoft-payment-orchestration'
    },
    {
        iconUrl: reacttailwind,
        id: "crypto-dashboard",
        theme: 'btn-back-pink',
        name: 'Crypto Market Dashboard',
        category: 'Frontend',
        tags: ['React', 'Next.js', 'Recharts'],
        description: "Crypto dashboard with live API data, responsive charts and CSV export. Built in pair programming.",
        link: 'https://crypto-dash-wine-seven.vercel.app/',
    },
    {
        iconUrl: phone,
        id: "call-simulator",
        theme: 'btn-back-green',
        name: 'Call Simulator',
        category: 'Frontend',
        tags: ['Next.js', 'TypeScript'],
        description: "Just for fun: a mobile first app that fakes an ongoing phone call, with random timer, fake home screen and saved settings.",
        link: 'https://call-simulator.vercel.app/'
    },
    {
        iconUrl: pricewise,
        id: "ecommerce-api",
        theme: 'btn-back-blue',
        name: 'Project Work: API fetch for fake E-commerce store',
        category: 'Frontend',
        tags: ['React', 'REST API'],
        description: "Demo store fetching products from a remote API, with category navigation, product detail and error handling.",
        link: 'https://ecommerce-qubica-store-sigma.vercel.app/',
    },
    // Disabled projects: add category and tags before re-enabling them
    // {
    //     iconUrl: bootstrap,
    //     id: "bootstrap",
    //     theme: 'btn-back-green',
    //     name: 'Accordion',
    //     description: 'Bootstrap Exercise: Interactive FAQ component built with Bootstrap Accordions, featuring smooth transitions, responsive design, and clean layout to deliver a user-friendly, expandable interface.',
    //     link: 'https://www.order42.info/accordion/',
    // },
    // {
    //     iconUrl: datatables,
    //     id: "datatable",
    //     theme: 'btn-back-purple',
    //     name: 'API Table',
    //     description: 'DataTables Exercise in JS: Interactive DataTables.js project with API integration: fetches objects from an API, supports advanced multi-filtering, search, sorting, and pagination for efficient data exploration.',
    //     link: 'https://www.order42.info/dataTable/',
    // }, 
    // {
    //     iconUrl: isotope,
    //     id: "isotope",
    //     theme: 'btn-back-yellow',
    //     name: 'Isotope - Selecting Items',
    //     description: 'Isotope exercise in JS: Interactive grid layout using Isotope.js: supports dynamic filtering, sorting, and animations to present numeric items in a responsive, visually engaging way with smooth transitions.',
    //     link: 'https://www.order42.info/isotope/numeri/',
    // },
    // {
    //     iconUrl: tictactoe,
    //     id: "tictactoe",
    //     theme: 'btn-back-black',
    //     name: 'Tris',
    //     description: 'JS exercise: TicTacToe or Tris. Create a fixed game grid where players X and O take turns. Once a cell is chosen by a player, it should no longer be available. When a player gets three in a row, all cells should become unselectable and the game should reset',
    //     link: 'https://www.order42.info/games/tris/',
    // },
];