import styled from "styled-components"
import { device } from "../../../styleConfig"

export const ProjectMedia = styled.div`
    display: flex;
    color: black;
    background-color: white;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    height: 0%;
    overflow: hidden;
    z-index: 50;
    transition: .3s;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    font-size: 30px;
    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        >div{
            display: flex;
            cursor: pointer;
        }
    }
`

export const Image = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media ${device.laptop}{
        height: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    span{
        font-size: 1.1rem;
        font-weight: 500;
        text-align: center;
        height: fit-content;
    }
    :hover{
        ${ProjectMedia}{
            height: max(10%, 30px);
            padding: 5px 15px;
        }
    }
`