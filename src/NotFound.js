import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NotFound = (props) => {
    let history = useHistory();

    return (
        <>
        <Wrap>
            <Title>주소가 올바르지 않아요!</Title>
            <Btn onClick={() => {
                history.goBack();
            }}>뒤로가기</Btn>
        </Wrap>
        </>
    );
};

const Wrap = styled.section `
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 450px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5vh;
`;

const Title = styled.h3 `
    width: 250px;
    line-height: 40px;
    text-align: center;
`;

const Btn = styled.button `
    margin: 20px 0px 50px 0px;
    height: 35px;
    width: 110px;
    border: none;
    border-radius: 20px;
    background-color: rgb(66, 162, 241);
    color: white;
`;

export default NotFound;