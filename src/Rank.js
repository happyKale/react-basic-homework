import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

const Rank = () => {

    return(
        <Wrap>
            <Header>명의 사람 중에서 당신은? </Header>
            <Card>
                <DivRankNum>
                    등
                </DivRankNum>
                <DivMsg>
                    <p>이름</p>
                    <p>남긴 메시지</p>
                </DivMsg>
            </Card>
        </Wrap>
    );
};

const Wrap = styled.section`
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 450px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    margin-top: 5vh;
`;

const Header = styled.header`
    width: 450px;
    height: 5vh;
    line-height: 5vh;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 1.2em;
    position: fixed;
    top: 5vh;
    font-weight: bold;

`;

const Card = styled.article`
    width: 350px;
    height: 120px;
    border: 1px solid #333;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const DivRankNum = styled.div`
    height: 100%;
    flex-grow: 1;
`;

const DivMsg = styled.div`
    height:100%;
    flex-grow: 1.5;
`;

export default Rank;