// quiz.js

// Actions
// 첫 화면에서 이름을 등록할 때 일어나는 액션
const USERNAME = 'quiz/USERNAME';
// 퀴즈에서 O, X를 선택했을 때 일어나는 액션
const ANSWER = 'quiz/ANSWER';

// Action Creators
export function addUserName(userName){
    return {type: USERNAME, userName}
}
export function answerQuiz(index ,answer){
    return {type: ANSWER, index, answer};
}

const initialState = {
    // 퀴즈의 대상
    quiztarget: {
        name: "방탄소년단",
        img: "https://pbs.twimg.com/profile_images/882518174784040960/sJKpfCpG.jpg"
    },
    // 퀴즈를 푸는 대상
    userName: "테스트",
    answerList: ["O","O","O","O"],
    // 퀴즈의 
    quizList: [
        {img:"https://btsspain.es/wp-content/uploads/2021/06/Sin-titulo-4-1140x1341.png",
         desc: "방탄소년단 멤버의 이름은 RM, Jin, SUGA, J-hope, 지민, V, 정국 이다.",
         answer: "O"},
        {img:"https://img.etnews.com/news/article/2018/09/25/cms_temp_article_25142522286453.jpg",
         desc: "방탄소년단은 유엔총회에서 무대를 한 적이 있다.",
         answer: "O"},
        {img:"https://metro.co.uk/wp-content/uploads/2018/10/bts2-c874.jpg?quality=90&strip=all&w=970&h=630&crop=1",
         desc: "방탄소년단은 2013년에 데뷔하였다.",
         answer: "O"},
        {img:"https://upload.wikimedia.org/wikipedia/ko/thumb/d/db/BTS_-_Butter.png/220px-BTS_-_Butter.png",
         desc: "방탄소년단은 'butter'로 빌보드 핫 100 9주연속 1위를 기록하였다.",
         answer: "O"} 
    ],
    scoreMsgList: [
        "(T_T) 정말 하나도 모르시군요!! ✨인터내셔널팝케이센세이션썬샤인레인보우💜 방탄소년단에 대해서 더 관심 가져주세요~😁",
        "아직 많이 부족하군요! ✨인터내셔널팝케이센세이션썬샤인레인보우💜 방탄소년단에 대해서 더 관심 가져주세요~😁",
        "아직 많이 부족하군요! 방탄소년단의 멋진 노래🎵 들어보시면 더욱 더 관심이 가실겁니다~",
        "오!🤗 거의 다 맞추셨네요~! 조금만 더 관심을 가져주시면 💜아미라고 말할 수 있겠어요!",
        "😍대단해요!!!! 방탄소년단에 대해서 정말 잘 아시는 군요? 혹시 아미신가요?ㅎㅎ 아포방포💜 앞으로도 방탄소년단과 함께합시다~😘💚🧡💘💙💜"
    ],
    rankList: [
        {name:"테스트",
         score: 70,
         msg: "테스트 메시지다."
        }
    ]
}

// Reducer
// 파라미터에서 = 을 하는 것은 초기값을 설정하는 것이다.
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      //do reducer stuff
        case "quiz/ANSWER": {
            const list = [...state.answerList];
            list[action.index] = action.answer;
            console.log("점수 리스트!!!",list);
            return {
                quiztarget: state.quiztarget,
                userName: state.userName,
                answerList: list,
                quizList: state.quizList,
                scoreMsgList: state.scoreMsgList,
                rankList: state.rankList
            };
        }
        case "quiz/USERNAME": {
            return {
                quiztarget: state.quiztarget,
                userName: action.userName,
                answerList: state.answerList,
                quizList: state.quizList,
                scoreMsgList: state.scoreMsgList,
                rankList: state.rankList
            };
        }
        default:
            return state;
    }
}