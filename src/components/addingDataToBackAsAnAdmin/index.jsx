import React, { useState } from "react";
import styled from "styled-components";

function AddingDataToBack() {
    const [data, setData] = useState({});

    const setNewData = (prevState, objectKey, objectValue) => {
        let newData = Object.assign({}, prevState);
        newData[objectKey] = objectValue;
        return newData;
    }

    const onSubmit = () => {
        console.log(data);
    }

    return (
        <StyledContainer>
            <StyledContainer>
                <label htmlFor="">Name Arm</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "nameArm", e.target.value));
                    }}
                />
                <label htmlFor="">Name Eng</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "nameEng", e.target.value));
                    }}
                />
                <label htmlFor="">Name Rus</label>
                <input type="text" placeholder="Name"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "nameRus", e.target.value));
                    }}
                />
            </StyledContainer>

            <StyledContainer>
                <label htmlFor="">Category Arm</label>
                <input type="text" placeholder="Category"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "categoryArm", e.target.value));
                    }}
                />
                <label htmlFor="">Category Eng</label>
                <input type="text" placeholder="Category"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "categoryEng", e.target.value));
                    }}
                />
                <label htmlFor="">Category Rus</label>
                <input type="text" placeholder="Category"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "categoryRus", e.target.value));
                    }}
                />
            </StyledContainer>

            <StyledContainer>
                <label htmlFor="">Compound Arm</label>
                <textarea rows="4"placeholder="Compound"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "compoudArm", e.target.value));
                    }}
                />
                <label htmlFor="">Compound Eng</label>
                <textarea rows="4"placeholder="Compound"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "compoundEng", e.target.value));
                    }}
                />
                <label htmlFor="">Compound Rus</label>
                <textarea rows="4"placeholder="Compound"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "compoundRus", e.target.value));
                    }}
                />
            </StyledContainer>

            <StyledContainer>
                <label htmlFor="">Function Arm</label>
                <textarea rows="4"placeholder="Function"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "functionArm", e.target.value));
                    }}
                />
                <label htmlFor="">Function Eng</label>
                <textarea rows="4"placeholder="Function"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "functionEng", e.target.value));
                    }}
                />
                <label htmlFor="">Function Rus</label>
                <textarea rows="4"placeholder="Function"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "functionRus", e.target.value));
                    }}
                />
            </StyledContainer>

            <StyledContainer>
                <label htmlFor="">Healing properties Arm</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingPropertiesArm", e.target.value));
                    }}
                />
                <label htmlFor="">Healing properties Eng</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingPropertiesEng", e.target.value));
                    }}
                />
                <label htmlFor="">Healing properties Rus</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingPropertiesRus", e.target.value));
                    }}
                />
            </StyledContainer>
            <StyledContainer>
                <label htmlFor="">Filters</label>
                <textarea rows="4"placeholder="Healing properties"
                    onChange={(e) => {
                        setData(prev => setNewData(prev, "healingPropertiesRus", e.target.value));
                    }}
                />
            </StyledContainer>
            <button>Send data</button>
        </StyledContainer>
    )
}

export default AddingDataToBack;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
`