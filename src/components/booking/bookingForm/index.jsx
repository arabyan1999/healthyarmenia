import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";
import { SelectItems, StyledBlockFlex, StyledBookingForm, StyledCustomSelect, StyledForm, StyledInput, StyledSelected, StyledSpan, StyledSubmitButton, StyledTextarea, StyledTitle } from "./styled";
import SuccessModal from "../successModal";
import { useScrollingElement } from "../../../hooks/use-scrolling-element";
import { createBookRequestApi } from "../../../request/requests";
import ErrorModal from "../errorModal";

function BookingForm({ setModal }) {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { t, i18n } = useTranslation();
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
            setLoading(true);
            // console.log("response", response);
            try {
                createBookRequestApi(data, i18n.language)
                    .then(() => setSuccess(true))
                    .catch(() => setError(true))
                    .finally(() => setLoading(false))
            } catch(err) {
                setError(true);
                setLoading(false);
                throw err;
            }
        }
    };

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

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(false);
                if (setModal !== undefined) {
                    setModal(false);
                }
            }, 5000);
        }
    }, [error]);

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
                        error={nameError ? 1 : undefined}
                        placeholder={t("name") + " *"}
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "name", e.target.value));
                            setNameError(false);
                        }}
                    />
                    <StyledInput
                        className="input"
                        type="text"
                        error={surnameError ? 1 : undefined}
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
                        error={phoneError ? 1 : undefined}
                        placeholder={t("telephone") + " *"}
                        onKeyDown={(event) => {
                            if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
                              event.preventDefault();
                            }
                        }}
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
                    <StyledCustomSelect className="custom-select">
                        <StyledSelected className="select-selected" not_empty={!!data.service_type  ? true : undefined} onClick={() => setOpen(prev => !prev)}>
                            {data?.service_type ?? t("select_service")}
                        </StyledSelected>
                        {!!open && (
                        <SelectItems className="select-items">
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
                <StyledSubmitButton type="submit" onClick={onSubmit} disabled={loading} className="button">
                    {
                        !loading ? t("book") : (
                            <div style={{ margin: "0 auto", width: "20px" }} >
                                <TailSpin color="white" height="20px" width="20px" strokeWidth="4px" />
                            </div>
                        )
                    }
                </StyledSubmitButton>
            </StyledBlockFlex>
            <StyledSpan>&#9432; {t("expert_advice")}</StyledSpan>
            {success && <SuccessModal />}
            {error && <ErrorModal />}
        </StyledBookingForm>
    )
}

export default BookingForm;