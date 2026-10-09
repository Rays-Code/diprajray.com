
const contactData = {
    label: "GET IN TOUCH",
    heading: {
        highlighted: "Let’s Work",
        base: "Together"
    },
    desc: {
        line1: "Have a project in mind, a collaboration idea, or just want to say hello?",
        line2: "Feel free to reach out — I'd love to hear from you!"
    },

    left: {
        label: "CONTACT ME",
        heading: {
            line1: "Turn Your Ideas",
            line2: {
                base: "Into",
                highlighted: "Reality."
            }
        },
        desc: "Whether you have a project, a question, or just want to connect, I'm here to help. Let's create something amazing together.",
        email: "raydipraj1234@gmail.com"
    },

    right: {
        heading: {
            text: "Send a Message",
            icon: {
                name: "Send icon",
                src: "/ui/plane.png"
            }
        },
        desc: "Fill out the form below and I'll get back to you as soon as possible.",

        form: {
            field1: {
                heading: "PROJECT TYPE",
                contactOptions: [
                    "Landing Page",
                    "Business Website",
                    "E-commerce",
                    "Web Application",
                    "Custom Solution",
                ]
            },
            field2: {
                heading: "NAME",
                placeholder: "NAME"
            },
            field3: {
                heading: "EMAIL",
                placeholder: "EMAIL"
            },
            field4: {
                heading: "MESSAGE",
                placeholder: "YOUR_QUERY"
            },
            submitBtn: {
                text: "SEND MESSAGE",
                icon: {
                    name: "Send icon",
                    src: "/ui/send.png"
                }
            }
        },

        statusMsgs: {
            success: {
                icon: "✦",
                heading: "Message sent",
                desc: "Thanks for reaching out. I'll get back to you within 24-48 hours."
            },
            error: {
                heading: "Couldn't send",
                desc: "Something broke on my end. Please try again, or email me directly at",
                email: "raydipraj1234@gmail.com"
            },
            topic: {
                heading: "Pick a project type",
                desc: "Tell me what you're building. Pick a project type above."
            }
        }
    }
}

export default contactData;