import { Button as MuiButton } from "@mui/material";
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

    * {
      box-sizing: border-box;
    }
    
    img {
      vertical-align: top;
    }
`;

export default GlobalStyle;

const DefaultButton = styled(MuiButton)`
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

const HalfBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1080px) {
    flex-wrap: wrap;
  }
`;

const Chip = styled.div`
  padding: 0 28px;
  width: auto;
  height: 34px;
  display: flex;
  align-items: center;
  border-radius: 17px;
  background-color: #fff;
`;

const Button = styled(MuiButton)`
  && {
    padding: 8px 10px;
    height: 100%;
    min-width: 128px;
    display: inline-block;
    border-radius: 0;
    box-shadow: none;
    width: auto;
    color: #26d9c7;
    transition: 0.5s;

    & img {
      display: inline-block;
      vertical-align: top;
    }

    & span {
      font-size: 17px;
    }
    &:hover,
    &:focus {
      color: #068175;
    }
  }
`;

const Article = styled.div`
  padding: 0 50px;
  max-width: 551px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  align-items: flex-start;
  flex-direction: column;
`;

export { DefaultButton, PointColor, HalfBox, Chip, Button, Article };
