import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createProductApi } from "../../request/requests";

function AddingDataToBack() {
    const [data, setData] = useState([{lang: "am"}, {lang: "en"}, {lang: "ru"}]);

    const setNewData = (prevState, objectKey, objectValue, index) => {
        let newData = [...prevState];
        newData[index][objectKey] = objectValue;
        return newData;
    }

    const onSubmit = () => {
        createProductApi({ data, filters: "[]", key: data[1]["name"] });
    }

    useEffect(() => {
        // console.log(data);
    }, [data]);

    return (
        <StyledMainContainer>
            <StyledContainer>
                <div>
                    <label htmlFor="">Name Arm</label>
                    <input type="text" placeholder="Name"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "name", e.target.value, 0));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Name Eng</label>
                    <input type="text" placeholder="Name"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "name", e.target.value, 1));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Name Rus</label>
                    <input type="text" placeholder="Name"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "name", e.target.value, 2));
                        }}
                    />
                </div>
            </StyledContainer>

            <StyledContainer>
                <div>
                    <label htmlFor="">Category Arm</label>
                    <input type="text" placeholder="Category"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "category", e.target.value, 0));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Category Eng</label>
                    <input type="text" placeholder="Category"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "category", e.target.value, 1));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Category Rus</label>
                    <input type="text" placeholder="Category"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "category", e.target.value, 2));
                        }}
                    />
                </div>
            </StyledContainer>

            <StyledContainer>
                <div>
                    <label htmlFor="">Compound Arm</label>
                    <textarea rows="12"placeholder="Compound"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "compound", e.target.value, 0));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Compound Eng</label>
                    <textarea rows="12"placeholder="Compound"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "compound", e.target.value, 1));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Compound Rus</label>
                    <textarea rows="12"placeholder="Compound"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "compound", e.target.value, 2));
                        }}
                    />
                </div>
            </StyledContainer>

            <StyledContainer>
                <div>
                    <label htmlFor="">Function Arm</label>
                    <textarea rows="12"placeholder="Function"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "function", e.target.value, 0));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Function Eng</label>
                    <textarea rows="12"placeholder="Function"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "function", e.target.value, 1));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Function Rus</label>
                    <textarea rows="12"placeholder="Function"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "function", e.target.value, 2));
                        }}
                    />
                </div>
            </StyledContainer>

            <StyledContainer>
                <div>
                    <label htmlFor="">Healing properties Arm</label>
                    <textarea rows="12"placeholder="Healing properties"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "healingProperties", e.target.value, 0));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Healing properties Eng</label>
                    <textarea rows="12"placeholder="Healing properties"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "healingProperties", e.target.value, 1));
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="">Healing properties Rus</label>
                    <textarea rows="12"placeholder="Healing properties"
                        onChange={(e) => {
                            setData(prev => setNewData(prev, "healingProperties", e.target.value, 2));
                        }}
                    />
                </div>
            </StyledContainer>
            {/* <StyledContainer>
                <label htmlFor="">Filters</label>
                <textarea rows="12"placeholder="Healing properties"
                    onChange={(e) => {
                        // setData(prev => setNewData(prev, "filters", e.target.value));
                    }}
                />
            </StyledContainer> */}
            <button onClick={() => onSubmit()}>Send data</button>
        </StyledMainContainer>
    )
}

export default AddingDataToBack;

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
`

const StyledContainer = styled(StyledMainContainer)`
    flex-direction: row;
    div {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        width: 100%;
        textarea {
            width: 100%;
            padding: 3px;
        }
        @media screen and (max-width: 800px) {
            flex-direction: row;
            margin-right: 0;
        }
    }
`