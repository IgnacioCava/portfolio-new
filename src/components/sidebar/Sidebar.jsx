import { useEffect, useState } from "react"
import SideIcon from "./SideIcon"
import { tabs, socials } from './sidebarData'
import { indexOf } from "../../helpers"
import { me } from '../../assets'
import { ResponsiveWrapper, SidebarContainer, Me, Tabs, TabIcons, Marker, SocialIcons } from "./styled"

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
        <ResponsiveWrapper>
        <SidebarContainer onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)}>
            <Me src={me}/>
            
            <Tabs>
                <TabIcons>
                    <Marker adjust={position} extend={isOpen}/>
                    {tabs.map((link, index) => 
                        <SideIcon key={index} data={link} extend={isOpen} select={()=>handleSelect(link.name, index)} highlight={selected}/>
                    )}
                </TabIcons>

                <SocialIcons>
                    {socials.map((social, index) =>
                        <SideIcon key={index} data={social} extend={isOpen}/>
                    )}
                </SocialIcons>
            </Tabs>
        </SidebarContainer>
        </ResponsiveWrapper>
    )
}

export default Sidebar







