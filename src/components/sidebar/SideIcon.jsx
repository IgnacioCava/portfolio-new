import styled from "styled-components";

const SideIcon = ({ data, extend, select, highlight }) => {
    const { name, icon } = data;
    return (
        <SideIconContainer extend={extend} onClick={select} highlight={name===highlight}>
            <Icon src={icon} alt="icon"/>
            <TextContainer>
                <Text extend={extend} highlight={name===highlight}>{name}</Text>
            </TextContainer>
        </SideIconContainer>
    )
}

const TextContainer = styled.span `
    position: relative;
    width: 100%;
`
    
const Text = styled.span`
    position: absolute;
    color: white;
    width: ${props => props.extend ? "100%" : "0%"};
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600; 
    top: 50%;
    text-align: left;
    transform: translateY(-50%);
    right: ${props => props.highlight && !props.extend ? "-30px" : "0px"};
    left: ${props => !props.highlight ? "0px" : "unset"};
    text-indent: 10px;
    transition: .5s;
    transition-property: width, right, left, color;
    user-select: none;
    z-index: 1;
`

const Icon = styled.img`
    width: 35px;
    min-width: 35px;
    height: 30px;
    object-fit: contain;
    filter: grayscale(100%);
    margin-left:0;
    transition: filter .5s;
`

const SideIconContainer = styled.div`
    display: flex;
    width: 100%;
    padding:10px;
    border-radius: 10px;
    box-sizing: border-box;
    align-items: center;
    justify-content: start;
    transition: .5s;
    transition-property: outline-offset, outline-width, background-color, justify-content;
    cursor: pointer;
    :hover{
        outline: 3px solid #232526;
        outline-offset: -3px;
        ${Icon}{
            filter: grayscale(0%);
        }
        ${Text}{
            color: goldenrod !important;
        }
    }
    ${Text}{
        color: ${props => props.highlight && "goldenrod"} !important;
    }
    ${Icon}{
        filter: ${props => props.highlight && "grayscale(0%)"};
    }
`

export default SideIcon;