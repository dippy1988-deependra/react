import styled from 'styled-components';

export const CardWrapper = styled.div `
    display:flex;
    justify-content:space-between;
   flex-wrap:wrap;
`;

export const Card = styled.div `
    width:20rem;
    margin-bottom:30px;
`;

export const CardImage = styled.img `
    height: 180px;
    width: 100%;
    display: block;
`;

export const CardBody = styled.div `
    flex: 1 1 auto;
    padding: 1.25rem;
    background-color:#ffffff;
`;
export const CardTitle = styled.h5 `
    margin-bottom: .75rem;
    font-size: 1.25rem;
    margin-top:0px;
`;

export const CradText = styled.p `
    margin-top: 0;
    margin-bottom: 1rem;
`;

