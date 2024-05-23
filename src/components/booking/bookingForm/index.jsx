import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectItems, StyledBlockFlex, StyledBookingForm, StyledCustomSelect, StyledFlex, StyledForm, StyledInput, StyledOption, StyledSelect, StyledSelected, StyledSubmitButton, StyledTextarea, StyledTitle } from "./styled";

function BookingForm() {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const typeOfService = [t("narrow_specialist_advice"), t("general_advice_consultation"), t("prophylactic_examination"),]

    const setNewData = (prevState, objectKey, objectValue) => {
        let newData = Object.assign({}, prevState);
        newData[objectKey] = objectValue;
        console.log(newData);
        return newData;
    }

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
                        placeholder={t("name")}
                        onChange={(e) => setData(prev => setNewData(prev, "name", e.target.value))}
                    />
                    <StyledInput
                        className="input"
                        type="text"
                        placeholder={t("surname")}
                        onChange={(e) => setData(prev => setNewData(prev, "surname", e.target.value))}
                    />
                </StyledBlockFlex>
                <StyledBlockFlex>
                    <StyledInput
                        className="input"
                        type="text"
                        placeholder={t("email")}
                        onChange={(e) => setData(prev => setNewData(prev, "email", e.target.value))}
                    />
                    <StyledInput
                        className="input"
                        type="text"
                        placeholder={t("telephone")}
                        onChange={(e) => setData(prev => setNewData(prev, "phone", e.target.value))}
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
                        <StyledSelected class="select-selected" onClick={() => setOpen(prev => !prev)}>
                            {data?.service ?? "Select item"}
                        </StyledSelected>
                        {!!open && (<SelectItems class="select-items">
                            {typeOfService.map(item => (
                                <div
                                    key={item}
                                    onClick={() => {
                                        setOpen(false);
                                        setData(prev => setNewData(prev, "service", item))
                                    }
                                }>
                                    {item}
                                </div>
                            ))}
                        </SelectItems>)}
                    </StyledCustomSelect>
                </StyledBlockFlex> 
                <StyledBlockFlex>
                    <StyledTextarea className="input" placeholder={t("comment")} />
                </StyledBlockFlex>
                <StyledBlockFlex>
                    <StyledSubmitButton type="submit">
                        {t("book")}
                    </StyledSubmitButton>
                </StyledBlockFlex>
            </StyledForm>
        </StyledBookingForm>
    )
}

export default BookingForm;