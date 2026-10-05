import Testimonial from "../_types/testimonials";

const testimonialData: {
    icon: {
        src: string,
        label: string
    },
    heading: {
        words: string[],
        highlightedText: string,
    },
    allTestimonials: Testimonial[];
} = {
    icon: {
        src: "/ui/pin.svg",
        label: "red pin"
    },
    heading: {
        words: [
            "What",
            "People",
        ],
        highlightedText: "Say About Me",
    },

    allTestimonials: [
        {
            avatar: "/demo-avatar.png",
            description:
                "Dipraj was great to work with. He understood the requirements quickly, communicated clearly throughout the project, and delivered a polished product that worked exactly as expected.",
            rating: 5,
            name: "Ashish Patidar",
            designation: "Founder",
            company: "Lemon Studios",
            companyLogo: "/companies/Lemon_Studios_Logo.svg",
        },
        {
            avatar: "/demo-avatar3.avif",
            description:
                "What stood out most was Dipraj's attention to detail. He was proactive with ideas, responsive to feedback, and made sure everything was refined before delivery.",
            rating: 5,
            name: "Rahul Mehta",
            designation: "Product Manager",
            company: "TechNova",
            companyLogo: "/companies/Vehiculr_Logo.svg",
        },
        {
            avatar: "/demo-avatar4.webp",
            description:
                "What stood out most was Dipraj's attention to detail. He was proactive with ideas, responsive to feedback, and made sure everything was refined before delivery.",
            rating: 5,
            name: "Rahul Mehta",
            designation: "Product Manager",
            company: "TechNova",
            companyLogo: "/companies/Vehiculr_Logo.svg",
        }
    ],
};

export default testimonialData;