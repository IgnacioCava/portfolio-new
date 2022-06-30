import styled from "styled-components"
import {me, usericon, projects, skill, contact, githubicon, linkedinround} from '../../assets'
import SideIcon from "./SideIcon"
import { useState } from "react"

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("About")
    const [position, setPosition] = useState(0)

    const pages = [
        {name: "About", icon: usericon},
        {name: "Skills", icon: skill},
        {name: "Projects", icon: projects},
        {name: "Contact", icon: contact}
    ]

    const socials = [
        {name: "Github", icon: githubicon},
        {name: "LinkedIn", icon: linkedinround}
    ]

    const handleSelect = (name, index) => {
        setSelected(name)
        setPosition(index)
    }

    return (
        <SidebarContainer onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>

            <Me src={me}/>
            
            <Div>
                <Con>
                <Test adjust={position} extend={isOpen}/>
                    {pages.map((link, index) => 
                        <SideIcon key={index} data={link} extend={isOpen} select={()=>handleSelect(link.name, index)} highlight={selected}/>
                    )}
                </Con>

                <Con>
                    {socials.map((social, index) =>
                        <SideIcon key={index} data={social} extend={isOpen}/>
                    )}
                </Con>
            </Div>
        </SidebarContainer>
    )
}

const Test = styled.span`
position: absolute;
top: calc(${props => props.adjust*26.5}%);
width: ${props => props.extend ? "calc(100% - 20px)" : "100%"};
border-radius: ${props => props.extend ? "10px" : "10px 0 0 10px"};
z-index: 0;
height: 50px;
background: #232526;
transition: .5s;
transition-property: background-color, width, top, border-radius;
box-sizing: border-box;
box-shadow: -3px 3px 4px rgba(0,0,0,0.5);
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    justify-content: space-between;
`

const Me = styled.img`
    width: 100%;
    height: 120px;
    max-width: fit-content;
    border-radius: 23px;
    padding: 10px;
    box-sizing: border-box;
    object-fit: cover;
`

const Con = styled.div`
position: relative;
    gap:15px;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    transition: .5s;
    padding: 0 10px;
    box-sizing: border-box;
`

const SidebarContainer = styled.div`
    width: 75px;
    height: 90%;
    inset: 0px;
    gap:10px;
    padding-bottom: 10px;
    border-radius: 0 20px 20px 0;
    background-color: #161618;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: -5px 12px 8px rgba(0,0,0,0.5);
    :hover{
        width: 150px;
    }
    transition: .5s;
`

export default Sidebar