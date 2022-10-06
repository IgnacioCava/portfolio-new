import LazyImage from '../LazyImage'
import { OutboundLink, GitHubIcon } from '../../assets/svg'
import { ItemContainer, ProjectData, ProjectTitle, Tags } from './styled'

const ProjectItem = ({item}) => {

    const {icon, title, description, tags, deployment, github} = item

    return (
        <ItemContainer>
            <img src={icon} alt='list icon'/>
            <ProjectData>
                <ProjectTitle>{title}</ProjectTitle>
                <p>{description}</p>
                <Tags>
                    {tags.map((tag, index) => <LazyImage key={index} src={tag} alt={'icon'}/>)}
                </Tags>                                                                                                      
            </ProjectData>
            <div className='links'>
                <div onClick={() => window.open(deployment, deployment)} title={deployment}>
                    <OutboundLink />
                </div>
                <div onClick={() => window.open(github, github)} title={github}>
                    <GitHubIcon />
                </div>
            </div> 
        </ItemContainer>
    )
}

export default ProjectItem

