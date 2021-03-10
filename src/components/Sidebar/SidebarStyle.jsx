import styled from 'styled-components';



export const SidebarWrapper = styled.div`
margin: 0;
  padding: 0;
  width: 250px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;

@media screen and (max-width:992px) {
    
    width: 100%;
    height: auto;
    position: relative;
}

`;

export const SidebarNavItems = styled.button`
    display: block;
    color: black;
    padding: 20px;
    text-decoration: none;
    width:100%;
    background-color:#4CAF50;
    border:none;
    font-size:20px;
    border-radius:0px;
    border-bottom:1px solid gray;
    &:hover {
       
        background-color:#000000;
        color:#ffffff
      }
      
    ${props => props.isActive && `background-color:#000000;
        color:#ffffff;`
    }
`;
