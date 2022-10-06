import { withTheme } from "styled-components";
import { SideIconContainer, Icon, Text, TextContainer } from "./styled";

const SideIcon = ({ data, extend, select, highlight }) => {
    const { name, icon, link } = data;
    
    return (
        <SideIconContainer extend={extend} highlight={name===highlight} onClick={() => {
            select && select()
            link && window.open(link, link)
        }}>
            <Icon src={icon} alt="icon"/>
            <TextContainer>
                <Text extend={extend} highlight={name===highlight}>{name}</Text>
            </TextContainer>
        </SideIconContainer>
    )
}

export default withTheme(SideIcon)