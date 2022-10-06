import styled from 'styled-components'
import { device } from '../../styleConfig'

export const ItemContainer = styled.div`
    :hover{
        background-color: #232526;
        color: goldenrod;
    }
    border: 1px solid #232526;
    border-radius: 5px;
    border-left: 5px solid goldenrod;
    justify-content: center;
    display: flex;
    align-items: center;
    min-height: 200px;
    height: fit-content;
    gap: 10px;
    white-space: pre-line;
    padding: 5px;
    transition: .3s;
    >img{
        width: 25%;
        object-fit: cover;
    }
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        >div{
            display: flex;
            cursor: pointer;
        }
        path{
            fill: white;
        }
    }
    @media ${device.laptop}{
        flex-direction: column;
        gap: 15px;
        border-left: 1px solid #232526;
        border-top: 5px solid goldenrod;
        >img{
            width: 100%;
            height: fit-content;
            object-position: top;
        }
        .links{
            flex-direction: row;
        }
    }
`

export const ProjectTitle = styled.span`
    font-size: 1.5rem;
`

export const ProjectData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
        font-weight: 300;
    }
    img{
        width: 30px;
        object-fit: contain;
    }
`

export const Tags = styled.span`
    display: flex;
    gap: 5px;
    @media ${device.laptop}{
        justify-content: center;
    }
`