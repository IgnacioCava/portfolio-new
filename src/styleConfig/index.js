import styled from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export const Scrollable = styled.div`
    height: 100%;
    overflow: ${({overflow}) => overflow || 'auto'};
    ${({behaviour}) => behaviour && {"scroll-behavior": behaviour}}
    ${({gutter}) => gutter && {"scrollbar-gutter": "stable"}}
    ::-webkit-scrollbar {
        background-color: transparent;
        ${({size}) => size && {width: `${size}px`, height: `${size}px`}}
    }
    ::-webkit-scrollbar-thumb {
        background-color: goldenrod;
        border-radius: ${({position}) => {
            switch(position){
                case 'top':
                    return '0 0 5px 5px'
                case 'right':
                    return '5px 0 0 5px'
                case 'bottom':
                    return '5px 5px 0 0'
                case 'left':
                    return '0 5px 5px 0'
                default: return '5px'
            }
        }};
    }
`

export const Section = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap; 
    justify-content: flex-start;
    gap: 0 5%;
    padding-inline: .5rem;
    margin-block: .5rem;
    box-sizing: border-box;
    height: 100%;
`

export const SectionImage = styled.div`
    width: 30%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img{
        width: 100%;
        height: 80%;
        object-fit: contain;
    }
    span{
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
`