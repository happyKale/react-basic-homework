import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

const Score = (props) => {
    const history = useHistory();
    const name = useSelector((state) => state.quiz.userName);
    const target = useSelector((state) => state.quiz.quiztarget.name);
    const score_list = useSelector((state) => state.quiz.answerList);
    const right_answer_list = useSelector((state) => state.quiz.quizList);
    let msg_list = useSelector((state) => state.quiz.scoreMsgList);
    let msg = "";
    let score = 0;
    
    // 점수 계산하기
    for(let i=0; i<score_list.length; i++){
        if( score_list[i] === right_answer_list[i].answer ){
            score += 25;
        } 
    }

    // 점수에 맞는 메시지 띄우기
    switch(score){
        case 0:
            msg = msg_list[0];
            break;
        case 25:
            msg = msg_list[1];
            break;
        case 50:
            msg = msg_list[2];
            break;
        case 75:
            msg = msg_list[3];
            break;
        case 100:
            msg = msg_list[4];
            break;
        default:
            msg = msg_list[0];
    }


    return(
        <Wrap>
            <Title>
                <YellowName>{target}</YellowName> 퀴즈에 대한<br/>
                 "{name}"님의 점수는<br/><br/>
                <YellowScore>{score}</YellowScore>점 입니다!
            </Title>
            <Message>
                {msg}
            </Message>
            <BtnWrap>
                <BtnGoQuiz onClick={()=>{
                    history.push("/quiz/0");
                }}>문제 다시 풀기</BtnGoQuiz>
                <BtnGoHome onClick={() => {
                    history.push("/");
                }}>
                    첫 화면으로 가기
                </BtnGoHome>
            </BtnWrap>
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

const Title = styled.h3`
    width: 330px;
    line-height: 40px;
    text-align: center;
    margin-top: 7vh;
`;

const YellowName = styled.span`
    background-color: rgb(248, 218, 82);
    display: inline-block;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    text-align: center;
`;
const YellowScore = styled.span`
    background-color: rgb(248, 218, 82);
    display: inline-block;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    font-size: 30px;
`;

const Message = styled.p`
    width: 280px;
    line-height: 25px;
`;

const BtnWrap = styled.div`
    width:300px;
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const BtnGoQuiz = styled.button`
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
`;

export default Score;