import styled from "styled-components";

export const StyledBookingContainer = styled.div`
    background: url(${({ img }) => img });
    width: 100%;
    padding: 30px;
    margin-bottom: 50px;
`

export const StyledDoctorImgContainer = styled.div`
    position: relative;
    width: 350px;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`

export const StyledDoctorImg = styled.img`
    position: absolute;
    bottom: -42px;
`