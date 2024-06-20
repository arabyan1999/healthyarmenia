import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectItems, StyledBlockFlex, StyledBookingForm, StyledCustomSelect, StyledForm, StyledInput, StyledSelected, StyledSpan, StyledSubmitButton, StyledTextarea, StyledTitle } from "./styled";
import SuccessModal from "../successModal";
import { useScrollingElement } from "../../../hooks/use-scrolling-element";
import { createBookRequestApi } from "../../../request/requests";

function BookingForm({ setModal }) {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [success, setSuccess] = useState(false);
    const { t } = useTranslation();
    useScrollingElement(success);

    const typeOfService = [t("narrow_specialist_advice"), t("general_advice_consultation")];

    const setNewData = (prevState, objectKey, objectValue) => {
        let newData = Object.assign({}, prevState);
        newData[objectKey] = objectValue;
        return newData;
    }

    const onSubmit = () => {
        if (!data?.name) {
            setNameError(true);
        }
        if (!data?.surname) {
            setSurnameError(true);
        }
        if (!data?.phone) {
            setPhoneError(true);
        }
        
        if (data.name && data.surname && data.phone) {
            createBookRequestApi(data);
            setSuccess(true);
        }
    };
    console.log(open);

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false);
                if (setModal !== undefined) {
                    setModal(false);
                }
            }, 5000);
        }
    }, [success]);

    return (
        <StyledBookingForm>
            <StyledTitle>
                {t("book_call")}
            </StyledTitle>
            <StyledForm>
                <StyledBlockFlex>
                    <StyledInput
                        className="input"
                        type="text"
                        error={nameError}
                        placeholder={t("name") + " *"}
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "name", e.target.value));
                            setNameError(false);
                        }}
                    />
                    <StyledInput
                        className="input"
                        type="text"
                        error={surnameError}
                        placeholder={t("surname") + " *"}
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "surname", e.target.value));
                            setSurnameError(false);
                        }}
                    />
                </StyledBlockFlex>
                <StyledBlockFlex>
                    {/* <StyledInput
                        className="input"
                        type="text"
                        placeholder={t("email")}
                        onChange={(e) => setData(prev => setNewData(prev, "email", e.target.value))}
                    /> */}
                    <StyledInput
                        className="input"
                        type="text"
                        error={phoneError}
                        placeholder={t("telephone") + " *"}
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "phone", e.target.value));
                            setPhoneError(false);
                        }}
                    />
                </StyledBlockFlex>
                {/* <StyledBlockFlex>
                    <StyledSelect placeholder="Choose a service">
                        <StyledOption>{t("narrow_specialist_advice")}</StyledOption>
                        <option>{t("general_advice_consultation")}</option>
                        <option>{t("prophylactic_examination")}</option>
                    </StyledSelect>
                </StyledBlockFlex> */}
                <StyledBlockFlex>
                    <StyledCustomSelect class="custom-select">
                        <StyledSelected class="select-selected" not_empty={!!data.service} onClick={() => setOpen(prev => !prev)}>
                            {data?.service ?? t("select_service")}
                        </StyledSelected>
                        {!!open && (
                        <SelectItems class="select-items">
                            {typeOfService.map(item => (
                                <div
                                    key={item}
                                    onClick={() => {
                                        setOpen(false);
                                        setData(prev => setNewData(prev, "service_type", item))
                                    }
                                }>
                                    {item}
                                </div>
                            ))}
                        </SelectItems>)}
                    </StyledCustomSelect>
                </StyledBlockFlex> 
                <StyledBlockFlex>
                    <StyledTextarea
                        className="input"
                        placeholder={t("comment")}
                        onChange={(e) => setData(prev => setNewData(prev, "comment", e.target.value))}
                    />
                </StyledBlockFlex>
            </StyledForm>
            <StyledBlockFlex>
                <StyledSubmitButton type="submit" onClick={onSubmit}>
                    {t("book")}
                </StyledSubmitButton>
            </StyledBlockFlex>
            <StyledSpan>&#9432; Մասնագետի խորհրդատվությունն անվճար է</StyledSpan>
            {success && <SuccessModal />}
        </StyledBookingForm>
    )
}

export default BookingForm;