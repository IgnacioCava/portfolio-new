import { projects } from "../../pages"
import styled from "styled-components"
import { Section } from "../../styleConfig/scroll"
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
                <ProjectMedia className='project-media'>
                    <span>{label}</span>
                    <div className='links'>
                        <div onClick={() => window.open(deployment, deployment)} title={deployment}>
                            <OutboundLink />
                        </div>
                        <div onClick={() => window.open(github, github)} title={github}>
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
    background-color: white;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    height: 0%;
    overflow: hidden;
    z-index: 50;
    transition: .3s;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    font-size: 30px;
    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        >div{
            display: flex;
            cursor: pointer;
        }
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
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
    :hover{
        ${ProjectMedia}{
            height: 10%;
            padding: 5px 15px;
        }
    }
`