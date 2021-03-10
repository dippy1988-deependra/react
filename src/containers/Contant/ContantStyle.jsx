import styled from 'styled-components';


export const ContantWrapper = styled.div`
margin-left: 250px;
padding: 30px 30px;
height: 73vh;
overflow-y: auto;
width: calc(100% - 310px);
background-color:gray;
    @media screen and (max-width:992px) {
        width:100%!important;
        margin-left: 0px;
        padding:0px
    }
`;