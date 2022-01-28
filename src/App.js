import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { check, next, reset } from "./store/modules/score"
import { Button } from "./components/Button";
import { Quiz } from "./components/Quiz";

const Main = styled.main`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 50px 0;
  text-align: center;
  border: 2px solid #3b3b01;
  border-radius: 30px;
  background: #fcfcf5;
`;

const H1 = styled.h1`
  color: #f707a7;
  font-size: 3em;
`;

const Div1 = styled.div`
  color: #ccdbd6;
  text-align: left;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const Div2 = styled.div`
  font-size: 2em;
  color: #7c34e0;
  font-weight: 600;
  margin-bottom: 30px;
`;

function App() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.score.page);
  const score = useSelector(state => state.score.score);
  const quiz = useSelector(state => state.score.quizs);

  return (
    <>
    {/* 메인페이지 */}
    {page === 0 && (
      <Main>
      <H1>나라별 수도 퀴즈!</H1>
      <Div1>총 {quiz.length}문제</Div1>
      <Div2>시작해볼까요?</Div2>
      <Button text="출발~!" clickEvent={() => {dispatch(next());}} />
      </Main>
    )}

    {/* 퀴즈 페이지 */}
    {page > 0 && page <= quiz.length && (
      <Main>
        <Quiz />
      </Main>
    )}

    {/* 마지막 페이지 */}
    {page > quiz.length && (
      <Main>
        <h1>당신의 점수는?</h1>
        <div>{score}점!</div>
        <Button text="다시 풀기" clickEvent={() => {
          dispatch(reset());
        }} />
       </Main>
    )}
    </>
  );
}

export default App;
