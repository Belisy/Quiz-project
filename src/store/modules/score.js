// 액션타입 생성
const NEXT_PAGE = "score/NEXT_PAGE";
const CHECK_CORRECT = "score/CHECK_CORRECT";
const RESET = "score/RESET";

// 액션 생성 함수
export function next() {
    return {
        type: NEXT_PAGE,
    };
}

export function check({ isCorrect }) {
    return {
        type: CHECK_CORRECT,
        payload: {isCorrect}
    };
}

export function reset() {
    return {
        type: RESET,
    };
}

// 초기상태 - 점수, 페이지, 퀴즈(문제, 선택지)
const initState = {
    page: 0,
    score: 0,
    quizs: [
        {
            q: "미국의 수도는?",
            a: [
                {
                    text: "워싱턴",
                    isCorrect: true
                },
                {
                    text: "뉴욕",
                    isCorrect: false
                },
                {
                    text: "LA",
                    isCorrect: false
                }
            ],
        },
        {
            q: "호주의 수도는?",
            a: [
                {
                    text: "시드니",
                    isCorrect: false
                },
                {
                    text: "브리즈번",
                    isCorrect: false
                },
                {
                    text: "캔버라",
                    isCorrect: true
                },
            ],
        },
        {
            q: "카자흐스탄의 수도는?",
            a: [
                {
                    text: "알마티",
                    isCorrect: false
                },
                {
                    text: "누르술탄",
                    isCorrect: true
                },
                {
                    text: "심켄트",
                    isCorrect: false
                },
            ],
        },
    ]
};

// 리듀서
export default function score(state = initState, action) {
    switch (action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        case CHECK_CORRECT:
            return {
                ...state,
                score: action.payload.isCorrect
                ? state.score + 10
                : state.score
            };
        case RESET:
            return {
                ...state,
                page: 0,
                score: 0,
            };
        default:
            return state;
    }
}