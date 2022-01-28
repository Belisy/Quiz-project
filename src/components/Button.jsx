import React from "react";
import styled from "styled-components";

const Abutton = styled.a`
background: #eb2d6f;
border: 3px solid #fab56b;
border-radius: 5px;
padding: 5px 10px;
color: #fff;
cursor: pointer;
`;

export function Button({text, clickEvent}) {
    return <Abutton onClick={clickEvent}>{text}</Abutton>
}