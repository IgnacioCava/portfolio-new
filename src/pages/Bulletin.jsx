import styled from "styled-components";
import Skills from "../components/preloaded/SkillsContainer";
import Projects from "../components/preloaded/ProjectsContainer";
import Contact from '../components/preloaded/ContactContainer'
import LazyImage from "../components/LazyImage";
import {me} from '../assets'

const About = () => <LazyImage src={me} alt='me'/>

const pages = {
    about: <About/>,
    skills: <Skills/>,
    projects: <Projects/>,
    contact: <Contact/>
}

const Bulletin = ({page, title}) => 
    <BulletinContainer>
        {pages[title]}
        {(page.title || page.subtitle) && <Title>
            <h1>{page?.title}</h1>
            {page?.subtitle && <span>{page?.subtitle}</span>}
        </Title>}
    </BulletinContainer>


export default Bulletin;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7rem;
    justify-content: center;
    padding: 0 1rem;
    box-sizing: border-box;
    max-height: 20%;
    h1{
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
        padding-top: 10px;
    }
    span{
        color: goldenrod;
        font-size: 1.4rem;
        margin: 0;
    }
`

const BulletinContainer = styled.div`
    box-shadow: -8px 8px 8px 0px #00000080;
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
    color: white;
    background: #161618;
    box-sizing: border-box;
    justify-content: space-evenly;
    padding: 1rem 0;
    >img{
        width: 100%;
        max-height: 80%;
        object-fit: cover;
    }
`