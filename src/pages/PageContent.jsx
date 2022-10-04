import styled from "styled-components";
import { Scrollable } from "../styleConfig/scroll";

const PageContent = ({page, setPage}) => {

    const {mini, title, text, skills} = page

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
                {skills?.map((skill, index) => {
                    return (
                        <Skill key={index}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <List>
                                {skill.icon && (
                                typeof skill.icon === 'object' 
                                ? <ListSVGIcon>{skill.icon}</ListSVGIcon>
                                : <ListIcon src={skill.icon} alt='skill icon'/>)
                                }
                                {skill.list
                                    ? skill.list.map((item, index) => 
                                        <ListItem key={index}>
                                            {typeof item === 'string' 
                                            ? item 
                                            :   <>
                                                <img src={item.icon} alt='list icon'/>
                                                {item.text}
                                                </>
                                            }
                                        </ListItem>) 
                                    : <span>{skill.text}</span>
                                }
                            </List>
                            
                        </Skill>
                    )
                })}
            </PageSkills>
        </PageData> 
    )
}

export default PageContent;

const ListIcon = styled.img`
    height: 100%;
`

const ListSVGIcon = styled.div`
    margin: 0 auto;
`
const List = styled(Scrollable).attrs({size: 5, position:'none'})`
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ListItem = styled.span`
    border: 1px solid #383838;
    border-radius: 5px;
    border-left: 5px solid goldenrod;
    padding: 10px;
    font-weight: 300;
    padding-left: 20px;
    font-size: 1.1rem !important;
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
    overflow: hidden auto;
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
span{
    font-size: 1rem;
}
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
    width: fit-content;
`

const PageText = styled.span`
    font-size: 1rem;
    color: #B4B4B4;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
    p{margin:0;}
`

const PageData = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    color: white;
    text-align: left;
    box-sizing: border-box;
    padding-top: 8%;
    padding-right: 5%;
    padding-bottom: 2%;
    ${PageTitle}, ${PageText} {
        backdrop-filter: blur(3px);
    }
`


