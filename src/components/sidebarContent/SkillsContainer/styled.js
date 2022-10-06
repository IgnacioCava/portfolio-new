import styled from "styled-components"
import { device } from "../../../styleConfig"

export const Image = styled.div`
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
        font-size: 1.1rem;
        font-weight: 300;
        text-align: center;
        height: fit-content;
        @media ${device.laptop}{
            display: none;
        }
    }
`