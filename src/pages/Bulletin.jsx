import styled from "styled-components";
import { Scrollable } from "../styleConfig/scroll";
import { useAutoScrollRef } from "../helpers";
import { OutboundLink, GitHubIcon } from '../assets/svg';
import { useMemo, Suspense, useCallback } from "react";
import Skills from "../components/preloaded/SkillsContainer";
import Projects from "../components/preloaded/ProjectsContainer";
import Contact from '../components/preloaded/ContactContainer'

const Bulletin = ({page, title}) => {

    const scrollRef = useAutoScrollRef(.5, title === 'skills'? 3 : 1, page)

    const renderSection = useMemo(() => {
        const pages = {
            about: <img loading={"loading" in HTMLImageElement.prototype ? 'eager' : undefined} src={page?.images} alt='element'/>,
            skills: <Skills/>,
            projects: <Projects/>,
            contact: <Contact/>
        }
        return pages[title]
    }, [title])

    // const renderImages = useCallback(() => {
    //     switch(title) {
    //         case 'about': return (
    //             <img loading={"loading" in HTMLImageElement.prototype ? 'eager' : undefined} src={page?.images} alt='element'/>
    //         )
    //         case 'skills': return (
    //             //<Suspense fallback={<div style={{background: 'red'}}>loading</div>}>
    //             <Skills innerRef={scrollRef}/>
    //             //</Suspense>
    //         )
    //         case 'projects': return (
    //             <Projects innerRef={scrollRef}/>

    //         )
    //         case 'contact': return (
    //             <Contact/>
    //         )
    //         default: return null
    //     }
    // },[title])

    return(
        <BulletinContainer>

            {renderSection}
                
            {(page.title || page.subtitle) && <Title>
                <h1>{page?.title}</h1>
                {page?.subtitle && <span>{page?.subtitle}</span>}
            </Title>}
        </BulletinContainer>
    )
}

export default Bulletin;

const ProjectMedia = styled.div`
    display: flex;
    color: black;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    opacity: 0;
    .links{
        display: flex;
        flex-direction: row;
    }
`

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

const ImagesContainer = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`

`

const Image = styled.div`
    width: 30%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img{
        width: 100%;
        height: 80%;
        object-fit: contain;
    }
    span{
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
`

const ProjectsContainer = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap; 
justify-content: flex-start;
gap: 0 5%;
padding-inline: .5rem;
margin-block: .5rem;
box-sizing: border-box;
height: 100%;


${Image} {
    width: 100%;
    height: 50%;
    position: relative;
    padding-bottom: 10px;
    box-sizing: border-box;
    img{
        width: 100%;
        height: 100%;
        object-fit: unset;
    }
}
`

const ContactContainer = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap; 
justify-content: flex-start;
gap: 0 5%;
padding-inline: .5rem;
margin-block: .5rem;
box-sizing: border-box;
height: 100%;
${Image} {
    width: 100%;
    height: 50%;
    padding: 5px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: center;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: fit-content;
        transition: 1s;
    }
    #hover-img{
        cursor: pointer;
        width: 0%;
        max-height: 100%;
        background-color: white;
        object-fit: contain;
        
    }
    &:hover{
        #normal-img{
            width: 0%;
        }
        #hover-img{ 
            padding: 10px;
            width: 100% !important;
        }  
    }
}
`

const SkillsContainer = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap; 
    justify-content: flex-start;
    gap: 0 5%;
    padding-inline: .5rem;
    margin-block: .5rem;
    box-sizing: border-box;
    height: 100%;
`