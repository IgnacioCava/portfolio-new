import { projects } from "../../../pages"
import { Section } from "../../../styleConfig/"
import { GitHubIcon, OutboundLink } from "../../../assets/svg"
import { useAutoScrollRef } from "../../../helpers"
import LazyImage from "../../LazyImage"
import { Image, ProjectMedia } from './styled'

const Projects = () => {
    const scrollRef = useAutoScrollRef(.5, 1)
    
    return (
        <Section ref={scrollRef}>
            {projects.bulletin.images.map(({src, label, deployment, github}, index) => 
            <Image key={index}>
                <LazyImage src={src} alt={label || 'project'}/>
                <ProjectMedia>
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
