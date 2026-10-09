
const heroData = {
    availability: {
        label: "Available for projects",
        country: {
            name: "India",
            src: "/india.svg",
            alt: "Indian Flag"
        }
    },

    intro: {
        greeting: "Hey There! I'm",
        name: "Dipraj",
        careers: ["Full Stack Developer", "Software Engineer", "Web Developer"],
    },

    headline: {
        firstLine: "From Idea to Production",
        secondLine: "I Build for the",
        highlightedWord: "Web",
    },

    description: {
        line1: "I design and build fast, scalable websites, web applications,",
        line2: "and SaaS products — from frontend to backend.",
    },

    cta: {
        primary: {
            label: "Start a Project",
            action: "#contact",
        },
        secondary: {
            label: "View My Work",
            action: "#projects",
        },
    },

    skills: [
        { name: "Next.js", src: "/dev-icons/nextjs-icon.svg", hover: "hover:border-white", iconBg: "" },
        { name: "Node.js", src: "/dev-icons/nodejs-icon.svg", hover: "hover:border-[#339933]", iconBg: "" },
        { name: "TypeScript", src: "/dev-icons/typescript-icon.svg", hover: "hover:border-[#3178C6]", iconBg: "" },
        { name: "PostgreSQL", src: "/dev-icons/postgresql.svg", hover: "hover:border-[#336791]", iconBg: "" },
        { name: "AWS", src: "/dev-icons/aws-TP.svg", hover: "hover:border-[#FF9900]", iconBg: "bg-white p-0.5" },
    ]
};

export default heroData;