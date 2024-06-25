import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createDiseaseApi } from "../../request/requests";

function AddingDiseaseDataToBack() {
    const [data, setData] = useState([{lang: "am"}, {lang: "en"}, {lang: "ru"}]);

    const setNewData = (prevState, objectKey, objectValue, index) => {
        let newData = [...prevState];
        newData[index][objectKey] = objectValue;
        return newData;
    }

    const onSubmit = () => {
        createDiseaseApi({ data, key: data[1]["name"] });
    }

    useEffect(() => {
        // console.log(data);
    }, [data]);

    return (
        <StyledContainer>
            <StyledContainer>
                <label htmlFor="">Name Arm</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "name", e.target.value, 0));
                    }}
                />
                <label htmlFor="">Name Eng</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "name", e.target.value, 1));
                    }}
                />
                <label htmlFor="">Name Rus</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "name", e.target.value, 2));
                    }}
                />
            </StyledContainer>

            {/* <StyledContainer>
                <label htmlFor="">About Arm</label>
                <input type="text" placeholder="About"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 0));
                    }}
                />
                <label htmlFor="">about Eng</label>
                <input type="text" placeholder="about"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 1));
                    }}
                />
                <label htmlFor="">about Rus</label>
                <input type="text" placeholder="about"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 2));
                    }}
                />
            </StyledContainer> */}

            <StyledContainer>
                <label htmlFor="">symptoms Arm</label>
                <textarea rows="4"placeholder="symptoms"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "symptoms", e.target.value, 0));
                    }}
                />
                <label htmlFor="">symptoms Eng</label>
                <textarea rows="4"placeholder="symptoms"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "symptoms", e.target.value, 1));
                    }}
                />
                <label htmlFor="">symptoms Rus</label>
                <textarea rows="4"placeholder="symptoms"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "symptoms", e.target.value, 2));
                    }}
                />
            </StyledContainer>

            <StyledContainer>
                <label htmlFor="">about Arm</label>
                <textarea rows="4"placeholder="about"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 0));
                    }}
                />
                <label htmlFor="">about Eng</label>
                <textarea rows="4"placeholder="about"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 1));
                    }}
                />
                <label htmlFor="">about Rus</label>
                <textarea rows="4"placeholder="about"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "about", e.target.value, 2));
                    }}
                />
            </StyledContainer>

            {/* <StyledContainer>
                <label htmlFor="">Healing properties Arm</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingProperties", e.target.value, 0));
                    }}
                />
                <label htmlFor="">Healing properties Eng</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingProperties", e.target.value, 1));
                    }}
                />
                <label htmlFor="">Healing properties Rus</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingProperties", e.target.value, 2));
                    }}
                />
            </StyledContainer> */}
            {/* <StyledContainer>
                <label htmlFor="">Filters</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        // setData(prev => setNewData(prev, "filters", e.target.value));
                    }}
                />
            </StyledContainer> */}
            <button onClick={() => onSubmit()}>Send data</button>
        </StyledContainer>
    )
}

export default AddingDiseaseDataToBack;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
`