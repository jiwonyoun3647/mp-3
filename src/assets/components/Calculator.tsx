import {useRef, useState} from 'react';
import styled from "styled-components";

const StyledInputWrapper = styled.div`
    input{
        padding: 1%;
        margin: 0.2%;
        width: 10%;
        background-color: #dfe9bd;
        border: 2px solid #91ac67;
        border-radius: 30%;
        text-align: center;
        font-family: "Syne Tactile", sans-serif;
        font-size: calc(2px + 1.5vw);
    }
`;

const StyledOutputWrapper = styled.div`
    margin: 2% auto 0;
    text-align: center;
    width: 40%;
    background-color: #76c457;
    border-radius: 40%;
`;

const StyledButtonWrapper = styled.div`
    margin-top: 0.5%;
    
    button{
        border: 3px ridge #2a835f;
        border-radius: 30%;
        margin: 0.3%;
        padding: 1%;
        width: 10%;
        background-color: #a5d6a7;
        font-family: "Syne Tactile", sans-serif;
        font-size: calc(2px + 1.5vw);    
    }
`;

const StyledCalcWrapper = styled.div`
    margin-top: 0.7%;
    text-align: center;

    h2{
        color: darkcyan;
    }
`;

export function useCalc() {
    const firstVal = useRef<any>(null);
    const secondVal = useRef<any>(null);
    const [result, setResult] = useState("");

    function addition(){
        const add = Number(firstVal.current.value) + Number(secondVal.current.value);
        setResult(String(add));
    }
    function subtraction() {
        const subtract = Number(firstVal.current.value) - Number(secondVal.current.value);
        setResult(String(subtract));
    }
    function multiplication() {
        const multiply = Number(firstVal.current.value) * Number(secondVal.current.value);
        setResult(String(multiply));
    }
    function division() {
        const division = Number(firstVal.current.value) / Number(secondVal.current.value);
        setResult(String(division));
    }
    function power() {
        let first = Number(firstVal.current.value);
        let second = Number(secondVal.current.value);
        let myResult;

        if (second >= 0) {
            myResult = 1;
            for (let i = 0; i < second; i++) {
                myResult = myResult*first;
            }
        } else {
            let second = Number(secondVal.current.value) * (-1);
            myResult = 1;
            for (let i = 0; i < second; i++) {
                myResult = myResult/first;
            }
        }
        setResult(String(myResult));
    }
    function clean() {
        firstVal.current.value = "";
        secondVal.current.value = "";
        setResult("");
    }
    return {
        firstVal, secondVal, result,
        addition, subtraction, multiplication,
        division, power, clean
    };
}

export default function Calculator() {
    const { firstVal, secondVal, result, addition,
        subtraction, multiplication, division, power, clean} = useCalc();

    let color = "black";

    if (Number(result) < 0){
        color = "red";
    }

    return(
        <StyledCalcWrapper>
            <h2>Charming Calculator</h2>
            <StyledInputWrapper>
                <label htmlFor="first-input"></label>
                <input type="text" ref={firstVal}/>
                <label htmlFor="second-input"></label>
                <input type="text" ref={secondVal}/>
            </StyledInputWrapper>
            <StyledButtonWrapper>
                <button onClick={addition}>+</button>
                <button onClick={subtraction}>-</button>
                <br />
                <button onClick={multiplication}>*</button>
                <button onClick={division}>/</button>
                <br />
                <button onClick={power}>^</button>
                <button onClick={clean}>Clear</button>
            </StyledButtonWrapper>
            <StyledOutputWrapper>
                <h4 style={{color}}>{result}</h4>
            </StyledOutputWrapper>
        </StyledCalcWrapper>
    )
}