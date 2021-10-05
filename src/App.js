import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserName } from './redux/modules/quiz';

import './style.css';
import Score from './Score';
import Quiz from './Quiz';
import Message from './Message';
import Rank from "./Rank";
import NotFound from './NotFound';
import styled from "styled-components";

function App() {
    const target = useSelector((state) => state.quiz.quiztarget.name);
    const dispatch = useDispatch();
    const history = useHistory();
    const inputRef = React.useRef(null);

    const userName = () => {
        dispatch(addUserName(inputRef.current.value));
        history.push("/quiz/0");
    };

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Wrap>
                        <Title>나는
                             <Name>{target}</Name>
                             에 대해서<br/>
                            얼마나 알고 있을까?</Title>
                        <InputText ref={inputRef} type="text" placeholder="내 이름"/>
                        <Btn onClick={userName}>시작하기</Btn>
                    </Wrap>
                </Route>
                <Route path="/quiz/:index" exact>
                    <Quiz/>
                </Route>
                <Route path="/score" exact>
                    <Score/>
                </Route>
                <Route path="/msg" exact>
                    <Message/>
                </Route>
                <Route path="/rank" exact>
                    <Rank/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
}

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
    width: 280px;
    line-height: 40px;
    text-align: center;
`;

const Name = styled.span `
    background-color: rgb(248, 218, 82);
    display: inline-block;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    text-align: center;
    margin: 0 10px;
`;

const InputText = styled.input `
    margin-top: 35px;
    border: none;
    background-color: rgb(238, 234, 234);
    height: 30px;
    width: 220px;
    border-radius: 20px;
    padding-left: 20px;
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

export default App;
