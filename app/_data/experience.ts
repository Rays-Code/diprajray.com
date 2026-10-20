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
                    text: "FullStack Intern",
                    colour: "text-blue-400"
                },
                current: true,
                location: "Bangalore, India • Remote ",
                duration: "Jan 2026 - Present",
                description: ["Built a vehicle listing platform serving owners and businesses across India, featuring search, filters, and service booking flows.", 
                              "Developed an admin panel with RBAC across 4 user roles for managing listings, users, and service workflows.",
                              "Designed 25+ REST APIs with MongoDB and mobile-first React.js frontends; query optimization made dashboards load 70% faster.",
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
                description: ["Built and shipped 6 client products (web apps, a mobile app, brand websites) end to end, from database schema and REST APIs to AWS deployment.", 
                              "Integrated 2 payment gateways (Razorpay, Stripe), 2 AI providers (OpenAI, Gemini), and secure video sessions across Next.js, React, and React Native apps.",
                              "Converted Figma designs into responsive Next.js and Tailwind CSS interfaces; designed PostgreSQL schemas with Prisma and Supabase backends for web and mobile apps.",
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
                duration: "May 2025 - Jul 2025",
                description: ["Built student registration, parent dashboard, and admin views for Raising Right, a pre-school student management portal, using React, Node.js, Express.js, and MongoDB.", 
                              "Developed a multi-step form with partial student entry and a parent-side flow to complete details; created a responsive React and Tailwind CSS UI for 3 product pages.",
                              "Developed secure REST APIs on MongoDB with JWT auth and S3 media uploads, cutting data retrieval time by 25% through query optimization.",
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
                name: "Birla Institute of Technology and Science, Pilani",
                degree: "BSc. Computer Science",
                location: "Hyderabad, India",
                duration: "Aug 2024 - Jul 2027",
                classes: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Object-Oriented Programming"],
                type: "education"
            }
        ]
    }
}

export default expData;