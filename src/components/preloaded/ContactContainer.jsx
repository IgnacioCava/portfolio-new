import { contact } from "../../pages"
import styled from "styled-components"
import { Section } from "../../styleConfig/scroll"


const Contact = () => {
    return (
        <Section>
            {contact.bulletin.images.map(({src, hoverSrc, label, link}, index) => 
            <Image key={index}>
                <img src={src} alt={label || 'social media'} id='normal-img'/>
                <Link href={link} target={link} src={hoverSrc} id='hover-img' alt={label || 'social media'}/>
            </Image>
            )}
        </Section>
    )
}

export default Contact

const Link = styled.a`
    background-image: ${({src}) => `url(${src})`};
    height: 100%;
    background-size: 90% auto;
    background-repeat: no-repeat;
    background-position: center;
    transition: .7s;
    position: absolute;
    right: 0;
`

const Image = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    padding: 5px;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: center;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: fit-content;
        transition: 1s;
    }
    span{
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
    #hover-img{
        cursor: pointer;
        width: 0%;
        max-height: 100%;
        background-color: white;
        object-fit: contain;
        
    }
    &:hover{
        #normal-img{
            width: 0%;
        }
        #hover-img{ 
            width: 100% !important;
        }  
    }
`