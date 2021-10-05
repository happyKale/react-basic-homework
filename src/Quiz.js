import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { answerQuiz } from './redux/modules/quiz';
import Progress from './Progress';

const Quiz = (props) => {
    const params = useParams();
    let quiz_index = parseInt(params.index);
    const history = useHistory();
    const dispatch = useDispatch();
    const quiz_list = useSelector((state) => state.quiz.quizList);

    console.log("퀴즈 인덱스: ",quiz_index);

    const clickAnwerBtn = (event) => {
        if(quiz_index === quiz_list.length-1){
            dispatch(answerQuiz(quiz_index, event.target.innerText))
            history.push("/score");
        }else{
            dispatch(answerQuiz(quiz_index, event.target.innerText))
            history.push("/quiz/"+(quiz_index+1));
        }
    };

    return (
        <Wrap>
            <Content>
                <ContentImg src={quiz_list[quiz_index].img}/>
                <ContentDes>
                    <h3>{quiz_index+1}번 문제</h3>
                    <p>
                       {quiz_list[quiz_index].desc}
                    </p>
                </ContentDes>
            </Content>
            <BtnWrap>
                <BtnAnswer onClick={clickAnwerBtn}>O</BtnAnswer>
                <BtnAnswer onClick={clickAnwerBtn}>X</BtnAnswer>
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


const Content = styled.div`
    width: 350px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #ddd;
    border-radius: 10px;
`;

const ContentImg = styled.img`
    max-height: 40vh;
    max-width: 350px;
    border-radius: 10px 10px 0 0;
`;

const ContentDes = styled.div`
    width: 300px;
    text-align: center;
    margin: auto;\
`;

const BtnWrap = styled.div`
    width: 260px;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BtnAnswer = styled.button`
    width: 80px;
    height: 50px;
    border: 4px solid #424242;
    border-radius: 15px;
    color: #424242;
    font-size: 25px;
    font-weight: bold;
`;

export default Quiz;