import styled, { ThemeProvider } from "styled-components";
import { device, Scrollable } from "../styleConfig";
import { transition } from '../helpers'

export const theme = {
    PageContainer:{
        vertical: `
            flex-direction: row-reverse;
            padding: 45px 5% 45px 10%;
        `,
        horizontal: `
            flex-direction: column;
            padding: 90px 5% 10px 5%;
            overflow: hidden auto;
        `
    },
    BulletinContainer: `
        width: 100%;
        height: 50%;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        >img{
            object-fit: contain;
        }
        >div{
            padding: 0;
            max-height: 100%;
            *{font-size: 1rem;}
        }
    `,
    PageData: {
        vertical: `
            width: 80%;
            height: 100%;
            padding: 8% 5px 2% 0%;
            margin-right: 4%
        `,
        horizontal: `
            overflow: unset;
            width: 100%;
            height: fit-content;
        `
    },
    PageTitle: `
        position: unset;
        font-size: 3rem;
        margin-top: 10px;
    `,
    Attention: `
        display: flex;
        flex-direction: column;
        
    `,
    PageSkills:`
        flex-direction: column;
        padding: 0;
        margin-top: 30px;
        >*{
            margin-bottom: 10px;
        }
    `
}

export const PageContainer = styled(Scrollable).attrs({size: 1})`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: white;
    opacity: 0;
    transition: .4s cubic-bezier(0.39, 0.07, 0.51, 0.81);
    @media not ${device.laptop}{
        ${props => props.theme.PageContainer.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.PageContainer.horizontal}
    }
    &.loaded{
        opacity: 1;
    }
    &.loading{
        opacity: 0;
        transform: translate3d(${({to, from}) => transition(to, from)});
    }
    &.counterAnim{
        transition: 0s !important;
        opacity: 0 !important;
        transform: translate3d(${({prev, to}) => transition(prev, to)});
    }

`

export const ResponsiveWrapper = ({children}) => 
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>

export const Link = styled.a`
    text-decoration: none;
    color: goldenrod;
`

export const ListIcon = styled.img`
    height: 100%;
`

export const ListSVGIcon = styled.div`
    margin: 0 auto;
`
export const List = styled.div`
    padding-right: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ListItem = styled.span`
    border: 1px solid #232526;
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

export const PageSkills = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    gap: 15px;
    padding: 15px;
    padding-top: 10%;
    @media ${device.laptop}{
        ${props => props.theme.PageSkills}
    }
`

export const SkillTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    border-bottom: 1px solid #383838;
`

export const Skill = styled.div`
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

export const Mini = styled.span`
    font-size: .8rem;
    color: #606060;
`

export const Attention = styled.p`
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
    @media ${device.laptop}{
        ${props => props.theme.Attention}
    }
`

export const PageTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1rem;
    position: sticky;
    top: -15%;
    z-index: 90;
    @media ${device.laptop}{
        ${props => props.theme.PageTitle}
    }
`

export const PageText = styled.span`
    font-size: 1rem;
    color: #B4B4B4;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    p{margin:0;}
`

export const PageData = styled(Scrollable).attrs({size: 3, overflow: 'hidden auto'})`
    display: flex;
    flex-direction: column;
    color: white;
    text-align: left;
    box-sizing: border-box;
    ${PageTitle}, ${PageText} {
        backdrop-filter: blur(6px);
    }
    @media not ${device.laptop}{
        ${props => props.theme.PageData.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.PageData.horizontal}
    }
`

export const Title = styled.div`
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
    }
    span{
        color: goldenrod;
        font-size: 1.4rem;
        margin: 0;
    }
`

export const BulletinContainer = styled.div`
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
    @media ${device.laptop}{
        ${props => props.theme.BulletinContainer}
    }
`