import SectionHeadingProps from "../_types/sectionHeading";


const expData = {
    heading: [{
        word: "Experience",
        tone: "primary"
    },
    ] as SectionHeadingProps[],

    work: {
        organisations: [
            {
                logo: {
                    name: "Vehiculr Logo",
                    src: "/companies/Vehiculr_Logo.svg"
                },
                name: "VEHICULR",
                designation: {
                    text: "FullStack Engineer",
                    colour: "text-blue-400"
                },
                current: true,
                location: "Bangalore, India • Remote ",
                duration: "Jan 2026 - Present",
                description: ["Developed and maintained a vehicle listing platform serving vehicle owners and businesses across India, building search, filter, and listing management features end to end.", 
                              "Built a full-featured admin panel with role-based access control, enabling internal teams to manage listings, users, and service workflows across the platform with zero manual overhead.",
                              "Designed and integrated REST APIs for automotive services and booking flows, connecting backend business logic to responsive React.js frontends optimized for mobile-first users across India.",
                              "Built and optimized performance-critical dashboards for operational visibility, reducing data retrieval latency through query optimization and efficient state rendering on the frontend."
            ],
            type: "work"
            },
            {
                logo: {
                    name: "Lemon Studios Logo",
                    src: "/companies/Lemon_Studios_Logo.svg"
                },
                name: "LEMON STUDIOS",
                designation: {
                    text: "SDE(FullStack) Intern",
                    colour: "text-yellow-200"
                },
                current: false,
                location: "Kolkata, India • Remote ",
                duration: "Feb 2026 - Aug 2026",
                description: [" Architected and shipped end-to-end scalable full stack applications — from database schema and backend API design to responsive frontend delivery — for multiple client-facing digital products.", 
                              "Built modular, data-driven dashboards with real-time state management using React.js and Next.js, reducing client reporting time by consolidating 5+ data sources into unified interfaces.",
                              "Designed and maintained RESTful APIs and backend services using Node.js, implementing input validation, error handling, and scalable routing patterns across 3+ production platforms.",
                              "Translated Figma designs into pixel-accurate, responsive components using React and Tailwind CSS, maintaining design-to-code fidelity across web and mobile breakpoints for all brand clients."
            ],
            type: "work"
            },
            {
                logo: {
                    name: "HelioWeb Logo",
                    src: "/companies/Helio_Web_Logo.svg"
                },
                name: "HELIO WEB",
                designation: {
                    text: "Web Developer Intern",
                    colour: "text-red-400"
                },
                current: false,
                location: "Texas, US • Remote ",
                duration: "May 2026 - Jul 2026",
                description: ["Developed and deployed RESTful APIs using Node.js, integrating SQL and NoSQL databases with optimized queries that reduced average data retrieval time by 25%.", 
                              "Delivered pixel-perfect, responsive UI components using React and Tailwind CSS, achieving design parity across 3 major product pages.",
                              "Built secure image storage and restoration pipelines using Multer and AWS S3, handling 100% of user-generated content uploads with zero data loss incidents.",
                              "Implemented authentication and authorization flows across all application endpoints, coordinating with a 4-person engineering team via Git throughout a 3-month sprint."
            ],
            type: "work"
            }
        ]
    },

    education: {
        organisations: [
            {
                logo: {
                    name: "BITS Pilani Logo",
                    src: "/companies/BITS_Pilani_Logo.svg"
                },
                name: "Birla Institue of Technology and Science, Pilani",
                degree: "BS Computer Science",
                location: "Hyderabad, India",
                duration: "Aug 2024 - Jul 2027",
                classes: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Object-Oriented Programming"],
                type: "education"
            }
        ]
    }
}

export default expData;