import styled from "styled-components"
import { device } from "../../../styleConfig"

export const Link = styled.a`
    background-image: ${({src}) => `url(${src})`};
    height: 100%;
    background-size: 90% auto;
    background-repeat: no-repeat;
    background-position: center;
    transition: .7s;
    position: absolute;
    right: 0;
    background-origin: content-box;
    box-sizing: border-box;
    @media ${device.laptop}{
        background-size: contain;
    }
`

export const Image = styled.div`
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
    ${Link}{
        cursor: pointer;
        width: 0%;
        max-height: 100%;
        background-color: white;
    }
    &:hover{
        #normal-img{
            width: 0%;
        }
        ${Link}{ 
            width: 100% !important;
            padding: 10px;
        }  
    }
`