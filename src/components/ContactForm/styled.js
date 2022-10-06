import styled from "styled-components"
import { device } from "../../styleConfig"

export const StatusField = styled.span`
    overflow: hidden;
    height: ${({code})=> code !== null ? '1.5rem' : '0rem'};
    transition: .5s;
    color: ${({code})=> {
        if(code === null) return 'transparent'
        if(code === 0) return 'goldenrod'
        if(code > 0) return '#ff4141'
    }}; 
`

export const EmailForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    input, textarea, button{
        background-color: transparent;
        border: 1px solid #232526;
        outline: 0;
        color: white;
        font-size: 1rem;
        padding: 5px;
        border-radius: 3px;
        transition: .2s;
        transition-property: background-color, color, border-left, text-indent;
        font-weight: 400;
        font-family: 'Poppins';
        text-indent: 5px;
            :focus{
                background-color: #232526;
                border-left: 5px solid goldenrod;
                text-indent: 1px;
            }
            ::-webkit-scrollbar{
                background-color: transparent;
                width: 5px;
            }
            ::-webkit-scrollbar-thumb{
                background-color: goldenrod;
            }
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            width: fit-content !important;
            align-self: flex-end;
            cursor: pointer;
            text-indent: 0 !important;
            border: 1px solid #232526 !important;
            background-color: #232526;
            :hover{
                background-color: goldenrod;
                color: black;
            }
        }
        
    }
    textarea{
        resize: none;
        overflow: hidden;
        min-height: 100px;
        box-sizing: border-box;
    }
`