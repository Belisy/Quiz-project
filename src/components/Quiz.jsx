import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "../store/modules/score"
import { Button } from "./Button";

export function Quiz() {
    const quiz = useSelector(state => state.score.quizs);
    const page = useSelector(state => state.score.page);
    const dispatch = useDispatch();

    return(
        <>
            <h1>{quiz[page - 1].q}</h1>
            {quiz[page - 1].a.map(el => {
            return <Button
                key={el.text} 
                text={el.text} 
                clickEvent={() => {
                    dispatch(check({isCorrect: el.isCorrect}));
                    dispatch(next());
                    }}
                />;
            })}
        </>
    )
}

