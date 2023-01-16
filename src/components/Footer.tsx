import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import { mobile } from "../atom";

const FooterWrap = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  padding: 0;
  text-align: center;
  z-index: 1000;
  overflow: hidden;

  & .animationBox {
    /* transform: translate(0px, -20px); */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 264px;
    align-items: center;
    background-color: #141414;
    /* opacity: 0; */

    &.mobile {
      /* transform: translate(0px, 50px); */
      & br {
        display: none;
      }
    }
  }

  &.active {
    margin-top: 50px;
    position: static;
  }
`;

const GridBox = styled(Box)`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.mobile {
    margin-top: 0.5rem;
  }
`;

const Inner = styled(Box)`
  & p {
    font-size: 14px;
    color: #fff;
  }
  & a {
    font-size: 14px;
    color: #fff;
  }

  &.mobile {
    P {
      font-size: 11px;
    }
  }
`;

const LinkList = styled(Link)`
  color: #fff;
  text-shadow: 0px 0px 4px black;
  & + & {
    margin-left: 1rem;
  }

  & img {
    width: 143px;
    height: 23px;
  }

  &.mobile img {
    width: 143px;
    height: 23px;
  }
`;

const _ = () => {
  const isMobile = useRecoilValue(mobile);

  return (
    <>
      <FooterWrap>
        <Box className={clsx("animationBox", isMobile)}>
          <LinkList className={isMobile} to="/">
            <img src="/image/logo.png" alt="로고" />
          </LinkList>
          <GridBox className={isMobile}>
            <Inner className={isMobile}>
              {/* <Typography>
              <Box mr={2} component="span">
                대표 : 한범희
              </Box>
              대표 전화 : <a href="tel:01080336920">010-8033-6920</a>
            </Typography> */}
              <Typography>
                Copyright © 2023 Mvirtual. 모든 권리 보유.
              </Typography>
            </Inner>
          </GridBox>
        </Box>
      </FooterWrap>
    </>
  );
};

export default _;
