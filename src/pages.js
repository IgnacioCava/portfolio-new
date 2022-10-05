import { me, apollo, express, figma, firebase, git, graphql, js, mongodb, node, react, redux, sass, styled, postgresql, sequelize, ts, linkedinround, mylinkedin, mygithub, githubicon, weatherapp, foodapp, trelloapp, countriesapp } from './assets';
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
                text: "I develop beautiful, scalable, fully responsive applications, always taylored to the user’s needs."
            },
            {
                title: "Backend development",
                icon: BackendIcon(),
                text: "Efficient coding ensures quick feature implementation and readability."
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
            normal: ["I’m a Full Stack Web Developer with a desire for constant growth and self improvement. I’m passionate about learning new technologies, always pointing towards finding the most versatile and robust solutions."]
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
                title: "Experience",
                list: [
                    `Software Developer at Remotebase
                    March 2022 - Present
                    
                    Worked designing and developing a Web3 based social media site.

                    Enhanced communication performance within the site with emphasis on
                    real-time video and audio streaming.`
                ]
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
        skills: [
            {
                title: 'Some of the SPAs I’ve worked on, with more to come',
                list: [
                    {title: "Trello Clone", icon: trelloapp, tags: [react, styled, node, express, mongodb, sequelize], deployment:'https://trelloclone2-client.vercel.app/', github:'https://github.com/IgnacioCava/trelloclone2',
                    description: `A Trello clone where users can create and share their boards.
                    Implemented frontend performance techniques like Optimistic UI and useMemo/useCallback hooks.`},
                    {title: "Countries App", icon: countriesapp, tags: [react, ts, styled, graphql], deployment:'https://kimche-challenge-ignaciocava.vercel.app/', github:'https://github.com/IgnacioCava/kimche-challenge',
                    description: `A simple app where users can search and see data about all countries.
                    Developed using GraphQL and Typescript (everywhere).`},
                    {title: "Food Recipes App", icon: foodapp, tags: [react, redux, styled, express, node, postgresql], deployment:'https://foodpi-front.herokuapp.com/', github:'https://github.com/IgnacioCava/Food',
                    description: 'Individual proyect at Henry. A responsive SPA that let\'s you search and filter recipes brought from an external API, as well as creating your own recipes and storing them in a relational database.'},
                    {title: "Weather App", icon: weatherapp, tags: [react], deployment:'https://weathernacho.netlify.app/', github:'https://github.com/IgnacioCava/WeatherReport',
                    description: 'My first project at the Henry Fullstack web development bootcamp with which I practiced my React, CSS and API usage abilities. A responsive SPA that takes information from an external API, bringing you weather data of whatever location in the world, like current temperature, weather cast, time of day, as well as counting with geolocation services.'},
                ]
            }
        ],
        bulletin: {
            images: [
                {src: trelloapp, label: "Trello Clone", deployment:'https://trelloclone2-client.vercel.app/', github:'https://github.com/IgnacioCava/trelloclone2'},
                {src: countriesapp, label: "Countries App", deployment:'https://kimche-challenge-ignaciocava.vercel.app/', github:'https://github.com/IgnacioCava/kimche-challenge'},
                {src: weatherapp, label: "Weather App", deployment:'https://weathernacho.netlify.app/', github:'https://github.com/IgnacioCava/WeatherReport'},
                {src: foodapp, label: "Food Recipes App", deployment:'https://foodpi-front.herokuapp.com/', github:'https://github.com/IgnacioCava/Food'},
            ]
        }
    },
    contact: {
        title: 'let’s talk',
        mini: 'now’s the moment, ',
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