import styled from "styled-components";
import { Box } from "@material-ui/core";
import GlobalStyle from "../styles/common";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Header from "./Header";
import Footer from "./Footer";

const ContainerWrap = styled(Box)`
  && {
    position: relative;
    padding: 80px 0 264px;
    max-width: none;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    background: #333;
    box-sizing: border-box;

    &.mobile {
      padding: 200px 0;
    }
  }
  main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    text-align: center;
  }
`;

interface ContainerInterface {
  children: JSX.Element;
  isMobile?: string;
}

const _ = ({ children, isMobile }: ContainerInterface) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ContainerWrap className={isMobile}>
          <GlobalStyle />
          <Header isMobile={isMobile} />
          <Box component="main">{children}</Box>
          <Footer isMobile={isMobile} />
        </ContainerWrap>
      </ThemeProvider>
    </>
  );
};

export default _;
