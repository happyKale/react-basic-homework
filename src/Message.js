import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

const Message = (props) => {
    const history = useHistory();
    const target = useSelector((state) => state.quiz.quiztarget);

    return (
        <Wrap>
            <Img src={target.img}></Img>
            <Title>
                <YellowName>{target.name}</YellowName> 
                 에게 남기는 한 마디
            </Title>
            <MsgArea rows="5" cols="50" placeholder="메세지를 입력하세요."/>
            <BtnGoRank onClick={() => {
                    history.push("/rank");
                }}>
                    남기고 랭킹 보러가기
            </BtnGoRank>
            <BtnGoHome onClick={() => {
                    history.push("/");
                }}>
                    첫 화면으로 가기
            </BtnGoHome>
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
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5vh;
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 50px;
    margin-bottom: 2vh;
`;

const Title = styled.h3`
    width: 400px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 6vh;
`;

const YellowName = styled.span`
    background-color: rgb(248, 218, 82);
    display: inline-block;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    text-align: center;
    margin-right: 6px;
`;

const MsgArea = styled.input`
    height: 15vh;
    width: 330px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5vh;
`;

const BtnGoRank = styled.button`
    height: 35px;
    width: 260px;
    border: none;
    border-radius: 20px;
    background-color: rgb(66, 162, 241);
    color: white;
`;

const BtnGoHome = styled.button`
    height: 35px;
    width: 200px;
    border: 1px solid #eee;
    border-radius: 20px;
    background-color: white;
    margin-top: 1vh;
`;

export default Message;