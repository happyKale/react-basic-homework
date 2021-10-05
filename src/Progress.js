import React from "react";
import styled from "styled-components";

const Progress = (props) => {
    let quiz_index = parseInt(props.index)*25;
    let line = document.getElementById("line");
    // line.style.width = (quiz_index)+"%";

    return(
        <ProgressBar>
            <HighLight id="line"/>
        </ProgressBar>
    );
};

const ProgressBar = styled.div`
    width: 350px;
    height: 3vh;
    border: 2px solid #ddd;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HighLight = styled.div`
    height: 3vh;
    background-color: pink;
    border-radius: 15px;
`;

export default Progress;