import styled from 'styled-components';

export const LoginWrapper = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    align-content:center;
`;

export const InputTag = styled.input `
    width: 300px;
    height: 60px;
    border-radius: 10px;
    outline: none;
    margin-bottom: 30px;
    font-size: 18px;
    padding: 0px 30px;
`;

export const InputButton = styled.input `
    width: 100px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
`;
export const TextError = styled.p `
    color: red;
    margin: 0px;
    font-size: 12px;
`;
