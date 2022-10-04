import { me, apollo, express, figma, firebase, git, graphql, js, mongodb, node, react, redux, sass, styled, postgresql, sequelize, ts, linkedinicon, linkedinround, mylinkedin, mygithub, githubicon, trainingapp, weatherapp, foodapp, eventsapp } from './assets';
import { FrontendIcon, BackendIcon } from './assets/svg';

export const pages = {
    about: {
        title: "about me",
        mini: "A bit",
        text:{
            normal: [
                "I began my technological journey in highschool, where I learned a bit of C, C++, Assembly and PLC programming with multiple software. It was here that I discovered my love for automation, be it of systematic procedures or solution development.",
                "I’m a Javascript lover, web development fan and, overall, a tech enthusiast, everywhere from electronics to programming. Today, I’m learning the ins and outs of the web, always aiming to be a better developer than yesterday."
            ],
            important: {
                text: "But enough talking, ",
                remark: "let’s get to work."
            },
        },
        skills:[
            {
                title: "Frontend development",
                icon: FrontendIcon(),
                text: "I develop beautiful, scalable, fully responsive applications, always adapted to the user’s needs."
            },
            {
                title: "Backend development",
                icon: BackendIcon(),
                text: "Untangled coding ensures quick feature implementation and readability. Aimed at reaching the best performance for a seamless, lagless experience."
            }
        ],
        bulletin:{
            title: "Ignacio Cava",
            subtitle: "Full Stack Web Developer",
            images: me
        }
    },
    skills: {
        title: "my skills",
        mini: "some of",
        text: {
            normal: ["I’m a Full Stack Web Developer with an ambition-fueled desire for constant growth and self improvement. I’m passionate about learning new tecnologies, always pointing towards finding the most versatile and robust solutions possible."]
        },
        skills: [
            {
                title: "Soft Skills",
                list: [
                    "Quick, hands-on learner.",
                    "Complete predisposition to teamwork and team learning.",
                    "Critical thinker, capable of taking context-based decisions.",
                    "Foresight of problems an implementation may cause.",
                    "Problem solver.",
                    "Strong written and verbal communication skills.",
                    "High adaptability to new environments.",
                ]
            },
            {
                title: "Experience"
            }
        ],
        bulletin:{
            title: "My stack",
            images: [
                {src: js, label: "Javascript"},
                {src: ts, label: "TypeScript"},
                {src: react, label: "React"},
                {src: node, label: "Node"},
                {src: sass, label: "Sass"},
                {src: styled, label: "Styled Components"},
                {src: figma, label: "Figma"},
                {src: mongodb, label: "MongoDB"},
                {src: postgresql, label: "PostgreSQL"},
                {src: express, label: "Express"},
                {src: graphql, label: "GraphQL"},
                {src: redux, label: "Redux"},
                {src: sequelize, label: "Sequelize"},
                {src: apollo, label: "Apollo"},
                {src: firebase, label: "Firebase"},
                {src: git, label: "Git"},
            ]
        }
    },
    projects: {
        title: 'my projects',
        mini: 'these are',
        skills: [{
            title: 'xd'
        }],
        bulletin: {
            // title: 'my projects',
            images: [
                {src: trainingapp, label: "Traing", deployment:'', github:''},
                {src: weatherapp, label: "Weather", deployment:'', github:''},
                {src: foodapp, label: "food", deployment:'', github:''},
                {src: eventsapp, label: "event", deployment:'', github:''},
            ]
        }
    },
    contact: {
        title: 'let\'s talk',
        mini: 'now\'s the moment, ',
        text:{
            normal: [
                "You can reach me out through LinkedIn, Github, or by sending me an email.",
            ]
        },
        skills: [
            {
                title: 'Email form',
                text: 'form'
            }
        ],
        bulletin:{
            images: [
                {
                    src: linkedinround,
                    hoverSrc: mylinkedin,
                    link: 'https://www.linkedin.com/in/ignacio-cava/'
                },
                {
                    src: githubicon,
                    hoverSrc: mygithub,
                    link: 'https://github.com/IgnacioCava'
                },
            ]
        }
    }
}

const {about, skills, projects, contact} = pages

export {
    about,
    skills,
    projects,
    contact
}