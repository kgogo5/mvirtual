import { useEffect } from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import GlobalStyle from "../styles/common";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { mobile } from "../atom";

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
      padding: 80px 0 264px;
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
}

const _ = ({ children }: ContainerInterface) => {
  const { pathname } = useLocation();

  const isMobile = useRecoilValue(mobile);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ContainerWrap className={isMobile}>
          <GlobalStyle />
          <Header />
          <Box component="main">{children}</Box>
          <Footer />
        </ContainerWrap>
      </ThemeProvider>
    </>
  );
};

export default _;
