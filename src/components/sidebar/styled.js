import styled, { ThemeProvider } from "styled-components"
import { device } from "../../styleConfig"

export const Me = styled.img`
    width: 100%;
    height: 120px;
    max-width: fit-content;
    border-radius: 23px;
    padding: 10px;
    box-sizing: border-box;
    object-fit: cover;
`

export const Tabs = styled.div`
    display: flex;
    justify-content: space-between;
    @media not ${device.laptop}{
        ${props => props.theme.Tabs.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.Tabs.horizontal}
    }
`

export const TabIcons = styled.div`
    position: relative;
    gap:15px;
    
    display:flex;
    transition: .5s;
    margin: 10px;
    box-sizing: border-box;
    @media not ${device.laptop}{
        ${props => props.theme.TabIcons.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.TabIcons.horizontal}
    }
`

export const SocialIcons = styled(TabIcons)``

export const theme = {
    SidebarContainer:{
        vertical: `
            height: 90%;
            width: 75px;
            min-width: 75px;
            border-radius: 0 20px 20px 0;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            :hover{
                min-width: 180px;
            }
        `,
        horizontal: `
            width: 90%;
            height: 60px;
            min-height: 75px;
            top: 0;
            left: 0;
            right: 0;
            border-radius: 0 0 20px 20px;
            ${Me}, ${SocialIcons}{
                display: none;
            }
        `
    },
    Marker: {
        vertical: (props) =>`
            width: 100%;
            top: ${props.adjust*26.5}%;
            height: 50px;
            bottom: 0;
            border-radius: 10px;
        `,
        horizontal: (props) =>`
            width: calc(25% - ${props.adjust+1 * 3}px);
            height: 100%;
            top: 0;
            bottom: 0;
            left: calc(${props.adjust*25}% + ${props.adjust+1}px);
            border-radius: 10px;
        `
    },
    Tabs: {
       vertical: `
            flex-direction: column;
            width: 100%;
            height: 75%;
       `,
       horizontal: `
            flex-direction: column;
            width: 100%;
            height: 100%;
            justify-content: center;
       `
    },
    TabIcons: {
        vertical: `
            flex-direction: column;
            align-items: flex-start;
            width: calc(100% - 20px);
        `,
        horizontal: `
            flex-direction: row;
            align-items: flex-start;
            gap: 5px;
            height: 100%;
        `
    },
    SideIcon: `
        flex-direction: column; 
        height: 100%;
        gap: 0px;
        justify-content: center;
    `,
    Text: `
        display: none;
    `
    
}

export const Marker = styled.span`
    position: absolute;
    z-index: 0;
    background: #232526;
    transition: .5s;
    transition-property: background-color, width, top, border-radius, left;
    box-sizing: border-box;
    box-shadow: -3px 3px 4px rgba(0,0,0,0.5);
    @media not ${device.laptop}{
        ${props => props.theme.Marker.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.Marker.horizontal}
    }
`

export const SidebarContainer = styled.div`
    position: absolute;
    gap:10px;
    margin: 0 auto;
    background-color: #161618;
    display: flex;
    box-sizing: border-box;
    transition: .5s;
    z-index: 100;
    box-shadow: -5px 12px 8px rgba(0,0,0,0.5);
    @media not ${device.laptop}{
        ${props => props.theme.SidebarContainer.vertical};
    }
    @media ${device.laptop}{
        ${props => props.theme.SidebarContainer.horizontal}
    }
`

export const ResponsiveWrapper = ({children}) => 
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>


export const TextContainer = styled.span `
    position: relative;
    width: 100%;
`
    
export const Text = styled.span`
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
    text-transform: capitalize;
    @media ${device.laptop}{
        ${props => props.theme.Text}
    }
`

export const Icon = styled.img`
    width: 35px;
    min-width: 35px;
    height: 30px;
    object-fit: contain;
    filter: grayscale(100%);
    margin-left:0;
    transition: filter .5s;
`

export const SideIconContainer = styled.div`
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
    @media ${device.laptop}{
        ${props => props.theme.SideIcon}
    }
`