import * as React from 'react';
import { StyledBookingContainer, StyledDoctorImg, StyledDoctorImgContainer } from './styled';
import BookingForm from './bookingForm';
import { StyledFlex } from './bookingForm/styled';
import backgroundImg from "../../assets/appointment_bg.webp";
import doctorImage from "../../assets/woman-doctor.webp";

function Booking() {
    return (
        <StyledBookingContainer img={backgroundImg}>
            <StyledFlex>
                <BookingForm />
                <StyledDoctorImgContainer>
                    <StyledDoctorImg src={doctorImage} />
                </StyledDoctorImgContainer>
            </StyledFlex>
        </StyledBookingContainer>
    )
}

export default Booking;