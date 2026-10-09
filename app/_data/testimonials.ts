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
            avatar: "/clients/prajwal-client.png",
            description:
                "Dipraj combines strong technical skills with independent problem-solving, a proactive mindset, and a genuine willingness to learn. He takes ownership of his work and brings a positive attitude to the team.",
            rating: 5,
            name: "Prajwal N",
            designation: "Founder",
            company: "Vehiculr",
            companyLogo: "/companies/Vehiculr_Logo_noBg.svg",
        },
        {
            avatar: "/clients/diganta-mitra-client.png",
            description:
                "Dipraj quickly understood our requirements, delivered quality work on time, and kept us updated throughout. He was open to unlimited revisions and made the entire process smooth with his clear communication.",
            rating: 5,
            name: "Diganta Mitra",
            designation: "Founder",
            company: "Lemon Studios",
            companyLogo: "/companies/Lemon_Studios_Logo.svg",
        },
        {
            avatar: "/clients/ashish-patidar-client.jpg",
            description:
                "Working with Dipraj was a great experience. He was proactive, handled both frontend and backend development with confidence, took feedback well, and always focused on making the final product better.",
            rating: 5,
            name: "Ashish Patidar",
            designation: "Manager",
            company: "Vehiculr",
            companyLogo: "/companies/Vehiculr_Logo_noBg.svg",
        }
    ],
};

export default testimonialData;