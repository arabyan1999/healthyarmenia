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
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
`

export const LoaderImg = styled.img`
    width: 100px;
    height: 100px;
    /* animation-name: ;
    animation-duration: 3s;
    animation-iteration-count: infinite; */
    -webkit-animation: spin 2s linear infinite;
  animation: ${rotateAnimaion} 2s linear infinite;
`
