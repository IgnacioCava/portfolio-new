import styled from "styled-components"
import { me } from '../../assets'
import SideIcon from "./SideIcon"
import { useEffect, useState } from "react"
import { tabs, socials } from './sidebarData'
import { indexOf } from "../../helpers"

const Sidebar = ({onChange, page}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(tabs[0].name)
    const [position, setPosition] = useState(0)

    const handleSelect = (name, index) => {
        setSelected(name)
        onChange(name.toLowerCase())
        setPosition(index)
    }

    useEffect(() => {
        if(page !== selected) handleSelect(page, indexOf(page, tabs.map(({name})=>name)))
    }, [page])

    return (
        <SidebarContainer onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>

            <Me src={me}/>
            
            <Div>
                <Con>
                <Test adjust={position} extend={isOpen}/>
                    {tabs.map((link, index) => 
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

export default Sidebar

const Test = styled.span`
position: absolute;
top: ${p => p.adjust*26.5}%;
width: ${p => p.extend ? "calc(100% - 20px)" : "100%"};
border-radius: ${p => p.extend ? "10px" : "10px 0 0 10px"};
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
position: absolute;
    margin: auto 0;
    width: 75px;
    min-width: 75px;
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
    transition: .5s;
    z-index: 10;
    :hover{
        min-width: 180px;
    }
`
