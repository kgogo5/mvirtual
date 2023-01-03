import { Button } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    /* @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    } */
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Pretendard', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration: none;
    }

    .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorRight {
        background-color:#141414;
    }
`;

export default GlobalStyle;

const DefaultButton = styled(Button)`
  && {
    padding: 8px 10px;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.primaryMain};
    min-width: 128px;
    border-radius: 0;
    box-shadow: none;
  }
`;

const PointColor = styled.span`
  color: #26d9c7;
`;

export { DefaultButton, PointColor };
