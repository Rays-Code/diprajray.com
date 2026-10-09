
const getCurrentYear = () => new Date().getFullYear();

const footerData = {
    navigate: {
        heading: "NAVIGATE",
        options: [
            {
                name: "Home",
                href: "#"
            },
            {
                name: "Work",
                href: "#experience"
            },
            {
                name: "Resume",
                href: "#"
            },
            {
                name: "Projects",
                href: "#projects"
            },
            {
                name: "Contact",
                href: "#contact"
            }
        ]
    },

    connect: {
        heading: "CONNECT",
        options: [
            {
                name: "LinkedIn",
                img: "/dev-icons/linkedin.svg",
                href: "https://www.linkedin.com/in/dipraj-ray"
            },
            {
                name: "GitHub",
                img: "/dev-icons/github.svg",
                href: "https://github.com/Rays-Code"
            },
            {
                name: "X",
                img: "/dev-icons/x.svg",
                href: "#"
            },
            {
                name: "Email",
                img: "/dev-icons/email.svg",
                email: "raydipraj1234@gmail.com"
            }
        ]
    },

    copywright: {
        text: `© ${getCurrentYear()} Dipraj Ray. All rights reserved.`
    }
}

export default footerData;