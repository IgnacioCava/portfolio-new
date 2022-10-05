import styled from "styled-components";
import { Scrollable } from "../styleConfig/scroll";
import LazyImage from "../components/LazyImage";
import { GitHubIcon, OutboundLink } from "../assets/svg"
import { memo, useState, useRef } from "react";
import emailjs from '@emailjs/browser'

const autogrow = (event) => {
    const {target} = event
    if(!target.value) return target.style.height = '100px'
    target.style.height = target.scrollHeight+'px'
}

const PageContent = ({page, setPage}) => {

    const formRef = useRef(null)

    const {mini, title, text, skills} = page

    const [formData, setFormData] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
console.log(formRef)
        emailjs.sendForm('service_lalpxes', 'template_11qvbyb', formRef.current,'user_4yJsJ2XQLH5OA0ZuQCfyh')
    }

    return (
        <PageData>
            <PageTitle>{mini && <Mini>{mini} </Mini>}{title}</PageTitle>
            <PageText>
                {text?.normal?.map((text, index) => {
                    return (
                        <p key={index}>{text}</p>
                    )
                })}
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
                            : <ListIcon src={skill.icon} alt='skill icon'/>)
                            }
                            {skill.list
                                ? skill.list.map((item, index) => {
                                    return typeof item === 'string' 
                                        ?   <ListItem key={index}>{item}</ListItem>
                                        :   <ProjectItem>
                                                <img src={item.icon} alt='list icon'/>
                                                <ProjectData>
                                                    <ProjectTitle>{item.title}</ProjectTitle>
                                                    <p>{item.description}</p>
                                                    <span>{item.tags.map(tag => <LazyImage src={tag} alt={'icon'}/>)}</span>                                                                                                      
                                                </ProjectData>
                                                <div className='links'>
                                                    <div onClick={() => window.open(item.deployment, item.deployment)} title={item.deployment}>
                                                        <OutboundLink />
                                                    </div>
                                                    <div onClick={() => window.open(item.github, item.github)} title={item.github}>
                                                        <GitHubIcon />
                                                    </div>
                                                </div> 
                                            </ProjectItem>
                                        }
                                    ) 
                                :   <span>
                                        {skill.text !== 'form' 
                                        ?   skill.text 
                                        :   <EmailForm onSubmit={handleSubmit} ref={formRef}>
                                                <input placeholder="Your name or corporation" name='name' onChange={handleChange}/>
                                                <input placeholder="Your email address" name='email' onChange={handleChange}/>
                                                <input placeholder="Subject" name='subject' onChange={handleChange}/>
                                                <textarea placeholder="Message" name='message' onChange={(event) => {autogrow(event); handleChange(event)}}/>
                                                <button type='submit'>Submit</button>
                                            </EmailForm>
                                        }
                                    </span>
                            }
                        </List>
                    </Skill>
                )}
            </PageSkills>
        </PageData> 
    )
}

export default memo(PageContent);

const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    input, textarea, button{
        background-color: transparent;
        border: 1px solid #232526;
        outline: 0;
        color: white;
        font-size: 1rem;
        padding: 5px;
        border-radius: 3px;
        transition: .2s;
        transition-property: background-color, color, border-left;
        font-weight: 400;
        font-family: 'Poppins';
            :focus{
                background-color: #232526;
                border-left: 5px solid goldenrod;
            }
            ::-webkit-scrollbar{
                background-color: transparent;
                width: 5px;
            }
            ::-webkit-scrollbar-thumb{
                background-color: goldenrod;
            }
    }
    button{
    width: fit-content !important;
    align-self: flex-end;
    cursor: pointer;
    :hover{
        background-color: goldenrod;
        color: black;
    }
    }
    textarea{
        resize: none;
        padding: 10px;
        overflow: hidden;
        min-height: 100px;
        height: auto;
        box-sizing: border-box;
    }
`

const ProjectTitle = styled.span`
    font-size: 1.5rem;
`

const ProjectData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span{
            display: flex;
            gap: 5px;
        }
    p{
        font-weight: 300;
    }
    img{
        width: 30px;
    }
`

const ProjectItem = styled.div`
    :hover{
        background-color: #232526;
        color: goldenrod;
    }
    border: 1px solid transparent;
    border-radius: 5px;
    border-left: 5px solid goldenrod;
    display: flex;
    height: 200px;
    gap: 10px;
    white-space: pre-line;
    padding: 5px;
    transition: .3s;
    >img{
        width: 25%;
    }
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        >div{
            display: flex;
            cursor: pointer;
        }
        path{
            fill: white;
        }
    }
`

const ListIcon = styled.img`
    height: 100%;
`

const ListSVGIcon = styled.div`
    margin: 0 auto;
`
const List = styled.div`
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ListItem = styled.span`
    border: 1px solid transparent;
    border-radius: 5px;
    border-left: 5px solid goldenrod;
    padding: 10px;
    font-weight: 300;
    padding-left: 20px;
    font-size: 1.1rem !important;
    white-space: pre-line;
    position: relative;
    transition: .3s;
    cursor: default;
    :hover{
        background-color: #232526;
        color: goldenrod;
    }
    >img{
        width: 15%;
        object-fit: contain;
    }
`

const PageSkills = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-around;
    gap: 10%;
    padding: 15px;
    padding-top: 10%;
`

const SkillTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    border-bottom: 1px solid #383838;
`

const Skill = styled.div`
    >span{font-size: 1rem;}
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #161618;
    padding: 1.2rem;
    box-sizing: border-box;
    justify-content: flex-start;
    gap: 1rem;
    box-shadow: -8px 8px 8px 0px #00000080;
    text-align: left;
    height: fit-content;
`

const Mini = styled.span`
    font-size: .8rem;
    color: #606060;
`

const Attention = styled.p`
    margin-top: 1.5rem !important;
    span{
        font-size: 1.6rem;
        color: goldenrod;
        cursor: pointer;
        text-decoration: underline;
        transition: .25s;
        :hover{
            filter: brightness(1.3);
            text-decoration: none;
        }
    }
`

const PageTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1rem;
    position: sticky;
    top: -20%;
    z-index: 90;
`

const PageText = styled.span`
    font-size: 1rem;
    color: #B4B4B4;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    p{margin:0;}
`

const PageData = styled(Scrollable).attrs({size: 3})`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    color: white;
    text-align: left;
    box-sizing: border-box;
    padding-top: 8%;
    margin-right: 4%;
    padding-right: 5px;
    padding-bottom: 2%;
    ${PageTitle}, ${PageText} {
        backdrop-filter: blur(6px);
    }
`


