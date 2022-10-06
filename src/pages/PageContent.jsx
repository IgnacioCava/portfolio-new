import { withTheme } from "styled-components";
import { memo, useRef } from "react";
import ProjectItem from "../components/pageContent/ProjectItem";
import ContactForm from "../components/ContactForm";
import { CV } from "../assets";
import {PageData, PageTitle, Mini, PageText, Attention, PageSkills, Skill, SkillTitle, List, ListSVGIcon, ListIcon, ListItem, Link} from './styled'

const PageContent = ({page, setPage}) => {

    const containerRef = useRef(null)
    const {mini, title, text, skills} = page

    containerRef?.current?.scrollTo({top: 0})

    return (
        <PageData ref={containerRef}>
            <PageTitle>{mini && <Mini>{mini} </Mini>}{title}</PageTitle>
            <PageText>
                {text?.normal?.map((text, index) => <p key={index}>{text}</p>)}
                {text?.important && 
                    <Attention>
                        {text.important.text} <span onClick={() => setPage('projects')}>{text.important.remark}</span>
                    </Attention>
                }
            </PageText>
            <PageSkills>
                {skills?.map((skill, index) => 
                    <Skill key={index}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <List>
                            {skill.icon && (
                                typeof skill.icon === 'object' 
                                    ? <ListSVGIcon>{skill.icon}</ListSVGIcon>
                                    : <ListIcon src={skill.icon} alt='skill icon'/>
                            )}
                            {skill.list
                                ? skill.list.map((item, index) => 
                                    typeof item === 'string' 
                                        ?   <ListItem key={index}>{item}</ListItem>
                                        :   <ProjectItem key={index} item={item}/>
                                    
                                    ) 
                                :   skill.text !== 'form' 
                                    ?   skill.title === 'CV' 
                                        ? <Link href={CV} download alt='CV'>{skill.text}</Link> 
                                        : skill.text
                                    
                                    :   <ContactForm container={containerRef}/>
                            }
                        </List>
                    </Skill>
                )}
            </PageSkills>
        </PageData> 
    )
}

export default withTheme(memo(PageContent));


