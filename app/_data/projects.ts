import { ProjectData } from "../_types/projects";
import SectionHeadingProps from "../_types/sectionHeading";

const projectData: ProjectData = {
    heading: [{
        word: "Featured",
        tone: "secondary"
    },
    {
        word: "Projects",
        tone: "primary"
    }] as SectionHeadingProps[],

    projects: [
        {
            banner: {
                type: "video", // "image" or video
                pos: "left",
                video: "/projects/swadhyaya-samsthanam/swadhyaya-walkthrough.mp4",
                videoWidth: "380px",
                Logo: {
                    name: "",
                    src: ""
                }
            },
            technologies: [
                {
                    name: "Next.js",
                    src: "/dev-icons/nextjs-icon.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "Tailwind CSS",
                    src: "/dev-icons/tailwind-icon.svg"
                },
                {
                    name: "Prisma",
                    src: "/dev-icons/prisma.svg"
                },
                {
                    name: "Cloudflare R2",
                    src: "/dev-icons/cloudflare-icon.svg"
                }
            ],
            heading: {
                text: "Sri Swadhyaya Samsthanam"
            },
            description: {
                text: `A scholarly multilingual platform for exploring Indian philosophy, Vedanta research, teachings, publications, and events.`,
            },
            live: {
                url: "https://www.swadhyayasamsthanam.org/",
                color: "bg-orange-400"
            },
            githubUrl: ""
        },

        {
            banner: {
                type: "image", // "image" or video
                pos: "right",
                screens: [{   // max 3, optional
                    name: "Vehiculr Screen 1",
                    pos: "left",
                    src: "/projects/vehiculr/vehiculr-screen1.svg"
                },
                {
                    name: "Vehiculr Screen 2",
                    pos: "middle",
                    src: "/projects/vehiculr/vehiculr-screen2.svg"
                },
                {
                    name: "Vehiculr Screen 3",
                    pos: "right",
                    src: "/projects/vehiculr/vehiculr-screen3.svg"
                }
                ],
                Logo: {
                    name: "Vehiculr Logo",
                    src: "/projects/vehiculr/vehiculr.png"
                }
            },
            technologies: [
                {
                    name: "React",
                    src: "/dev-icons/react.svg"
                },
                {
                    name: "Node.js",
                    src: "/dev-icons/nodejs-icon.svg"
                },
                {
                    name: "Express.js",
                    src: "/dev-icons/express.svg"
                },
                {
                    name: "MongoDB",
                    src: "/dev-icons/mongodb-icon.svg"
                },
                {
                    name: "AWS",
                    src: "/dev-icons/aws.svg"
                }
            ],
            heading: {
                text: "Vehiculr"
            },
            description: {
                text: `An automotive super app for discovering vehicles, booking services, and connecting with a community of car enthusiasts.`,
            },
            live: {
                url: "https://www.vehiculr.com/start",
                color: "bg-blue-400"
            },
            githubUrl: ""
        },

        {
            banner: {
                type: "video", // "image" or video
                pos: "left",
                video: "/projects/gyan-setu/gyan-setu-walkthrough.mp4",
                videoWidth: "380px",
                Logo: {
                    name: "",
                    src: ""
                }
            },
            technologies: [
                {
                    name: "Next.js",
                    src: "/dev-icons/nextjs-icon.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "Tailwind CSS",
                    src: "/dev-icons/tailwind-icon.svg"
                },
                {
                    name: "Prisma",
                    src: "/dev-icons/prisma.svg"
                },
                {
                    name: "PostgreSQL",
                    src: "/dev-icons/postgresql.svg"
                },
                {
                    name: "AWS",
                    src: "/dev-icons/aws.svg"
                },
                {
                    name: "Razorpay",
                    src: "/dev-icons/razorpay.svg"
                },
                {
                    name: "Google Gemini",
                    src: "/dev-icons/gemini.svg"
                },
            ],
            heading: {
                text: "Gyan Setu"
            },
            description: {
                text: `GyanSetu connects users with verified experts for 1-on-1 paid consultations, with expert profiles, instant booking, and secure video sessions.`,
            },
            live: {
                url: "https://www.gyansetu.life/",
                color: "bg-purple-400"
            },
            githubUrl: ""
        },

        {
            banner: {
                type: "image",
                pos: "right",
                screens: [
                    {
                        name: "Flow365 Screen 1",
                        pos: "left",
                        src: "/projects/flow365/flow365-screen1.svg"
                    },
                    {
                        name: "Flow365 Screen 2",
                        pos: "middle",
                        src: "/projects/flow365/flow365-screen2.svg"
                    },
                    {
                        name: "Flow365 Screen 3",
                        pos: "right",
                        src: "/projects/flow365/flow365-screen3.svg"
                    }
                ],
                Logo: {
                    name: "Flow365 Logo",
                    src: ""
                }
            },

            technologies: [
                {
                    name: "React Native",
                    src: "/dev-icons/react-native.svg"
                },
                {
                    name: "Expo",
                    src: "/dev-icons/expo.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "OpenAI",
                    src: "/dev-icons/openai-icon.svg"
                },
                {
                    name: "Supabase",
                    src: "/dev-icons/supabase-icon.svg"
                },
                {
                    name: "AWS",
                    src: "/dev-icons/aws.svg"
                }
            ],

            heading: {
                text: "Flow365"
            },

            description: {
                text: `Flow365 is an AI-powered fertility and period tracking app delivering personalized cycle insights and private reproductive health management.`
            },

            live: {
                url: "https://staging.f365.app/",
                color: "bg-pink-400"
            },

            githubUrl: ""
        },

        {
            banner: {
                type: "video",
                pos: "left",
                video: "/projects/padam/padam-walkthrough.mp4",
                videoWidth: "380px",
                Logo: {
                    name: "Padam Dance Academy Logo",
                    src: "/projects/padam/padam.png"
                }
            },

            technologies: [
                {
                    name: "Next.js",
                    src: "/dev-icons/nextjs-icon.svg"
                },
                {
                    name: "React",
                    src: "/dev-icons/react.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "Tailwind CSS",
                    src: "/dev-icons/tailwind-icon.svg"
                },
                {
                    name: "EmailJS",
                    src: "/dev-icons/emailjs.svg"
                },
                {
                    name: "WhatsApp API",
                    src: "/dev-icons/whatsapp-icon.svg"
                }
            ],

            heading: {
                text: "Padam Dance Academy"
            },

            description: {
                text: `Padam is a modern dance academy website showcasing classes, instructors, programs, and the academy’s artistic identity through an engaging digital experience.`
            },

            live: {
                url: "https://www.padamdanceacademy.in/",
                color: "bg-[#C9A227]"
            },

            githubUrl: ""
        },

        {
            banner: {
                type: "image",
                pos: "right",
                screens: [
                    {
                        name: "EaseLaw Screen 1",
                        pos: "middle",
                        src: "/projects/easelaw/easelaw-screen1.svg"
                    },
                    {
                        name: "EaseLaw Screen 3",
                        pos: "right",
                        src: "/projects/easelaw/easelaw-screen2.svg"
                    }
                ],
                Logo: {
                    name: "EaseLaw Logo",
                    src: ""
                }
            },

            technologies: [
                {
                    name: "React",
                    src: "/dev-icons/react.svg"
                },
                {
                    name: "Vite",
                    src: "/dev-icons/vite.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "Tailwind CSS",
                    src: "/dev-icons/tailwind-icon.svg"
                },
                {
                    name: "FastAPI",
                    src: "/dev-icons/fastapi-icon.svg"
                },
                {
                    name: "PostgreSQL",
                    src: "/dev-icons/postgresql.svg"
                },
                {
                    name: "AWS",
                    src: "/dev-icons/aws.svg"
                },
                {
                    name: "Stripe",
                    src: "/dev-icons/stripe.svg"
                }
            ],

            heading: {
                text: "EaseLaw"
            },

            description: {
                text: `EaseLaw is an AI-powered legal assistant for Australia, enabling users to draft Wills and Powers of Attorney and securely manage important legal documents online in minutes.`
            },

            live: {
                url: "https://www.easelaw.com.au/",
                color: "bg-purple-500"
            },

            githubUrl: ""
        },

        {
            banner: {
                type: "video",
                pos: "left",
                video: "/projects/parui/parui-walkthrough.mp4",
                videoWidth: "410px",
                Logo: {
                    name: "Parui Enterprices Logo",
                    src: ""
                }
            },

            technologies: [
                {
                    name: "Next.js",
                    src: "/dev-icons/nextjs-icon.svg"
                },
                {
                    name: "React",
                    src: "/dev-icons/react.svg"
                },
                {
                    name: "TypeScript",
                    src: "/dev-icons/typescript-icon.svg"
                },
                {
                    name: "Tailwind CSS",
                    src: "/dev-icons/tailwind-icon.svg"
                },
                {
                    name: "Prisma",
                    src: "/dev-icons/prisma.svg"
                },
                {
                    name: "PostgreSQL",
                    src: "/dev-icons/postgresql.svg"
                },
                {
                    name: "AWS",
                    src: "/dev-icons/aws.svg"
                }
            ],

            heading: {
                text: "Parui Enterprices"
            },

            description: {
                text: `Parui Enterprises is a luxury jewellery brand showcasing handcrafted collections, bespoke designs, and premium craftsmanship for discerning clients.`
            },

            live: {
                url: "https://www.paruienterprises.in/",
                color: "bg-[#D99143]"
            },

            githubUrl: ""
        },

    ]
}


export default projectData;