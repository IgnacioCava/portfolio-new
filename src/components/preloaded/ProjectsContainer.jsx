import { pages, projects } from "../../pages"
import styled from "styled-components"
import { Scrollable, Section } from "../../styleConfig/scroll"
import { GitHubIcon, OutboundLink } from "../../assets/svg"
import { useAutoScrollRef } from "../../helpers"
import LazyImage from "../LazyImage"


const Projects = () => {
    const scrollRef = useAutoScrollRef(.5, 1)
    return (
        <Section ref={scrollRef}>
            {projects.bulletin.images.map(({src, label, deployment, github}, index) => 
            <Image key={index}>
                <LazyImage src={src} alt={label || 'project'}/>
                <ProjectMedia className='project-media' style={{background: 'white'}}>
                    <span>{label}</span>
                    <div className='links'>
                        <div onClick={()=>{
                            window.open(deployment, deployment)
                        }}>
                            <OutboundLink />
                        </div>
                        <div onClick={()=>{
                            window.open(github, github)
                        }}>
                            <GitHubIcon />
                        </div>
                    </div>
                </ProjectMedia>
            </Image>
            )}
        </Section>
    )
}

export default Projects

const ProjectMedia = styled.div`
    display: flex;
    color: black;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    opacity: 0;
    z-index: 100;
    transition: .3s;
    .links{
        display: flex;
        flex-direction: row;
    }
`

const Image = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img{
        width: 100%;
        height: 100%;
        object-fit: unset;
    }
    span{
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
    :hover{
        ${ProjectMedia}{
            opacity: 1;
        }
    }
`