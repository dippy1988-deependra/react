import styled from 'styled-components';



export const HeaderWrapper = styled.div`
height:100px;
padding:10px 40px;
display:flex;
justify-content: space-between;
background-color:#ffffff;
align-items:center;
box-shadow:0px 0px 3px 1px grey;



@media screen and (max-width:992px) {
    
        display:block;
        text-align:center;
        height:auto;
        padding:20px
    }
`;

export const LogoutButton = styled.button`
font-size:24px;
color:#000000;
background-color:#f0f0f0;
border:none;
padding:5px 20px;
@media screen and (max-width:992px) {
    
   margin-top:20px;
   margin-bottom:20px
}
`;

