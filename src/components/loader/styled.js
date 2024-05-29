import styled from "styled-components";
import { keyframes } from 'styled-components'

export const StyledLoderContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const rotateAnimaion = keyframes`
    rotating {
        from{
            -webkit-transform: rotate(0deg);
        }
        to{
            -webkit-transform: rotate(360deg);
        }
    }
`

export const LoaderImg = styled.img`
    width: 100px;
    height: 100px;
    animation: ${rotateAnimaion} 2s linear infinite;
`
