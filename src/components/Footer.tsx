import styled from "styled-components";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import { language, mobile } from "../atom";
import Text from "./elements/Text";
import { Box } from "@mui/material";
import { DefaultButton } from "../styles/common";

const FooterWrap = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  padding: 0;
  text-align: center;
  z-index: 1000;
  overflow: hidden;
  background-color: #000;

  & .animationBox {
    /* transform: translate(0px, -20px); */
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1164px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 264px;
    align-items: center;
    background-color: #000;

    @media screen and (max-width: 768px) {
      height: 500px;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column-reverse;
      gap: 20px 0;
    }

    & > div {
      @media screen and (max-width: 768px) {
        justify-content: center;
        text-align: center;
      }
    }
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
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.mobile {
    margin-top: 0.5rem;
  }
`;

const Inner = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;

  & > div {
    @media screen and (max-width: 768px) {
      justify-content: center;
      text-align: center;
    }
  }

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

const IconButton = styled(DefaultButton)`
  && {
    padding: 10px;
    min-width: auto;
    width: 61px;
    height: 61px;
    border-radius: 41px;
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const _ = () => {
  const lang = useRecoilValue(language);
  const isMobile = useRecoilValue(mobile);

  return (
    <>
      <FooterWrap>
        <Box className={clsx("animationBox", isMobile)}>
          <Box textAlign="left">
            <LinkList className={isMobile} to="/">
              <img src="/image/logo.png" alt="로고" />
            </LinkList>
            <GridBox className={isMobile}>
              <Inner className={isMobile}>
                <Box textAlign="left">
                  <Box>
                    <Text component="span" fontSize="15px" fontWeight="400">
                      {lang === "ko" ? "(주)엠버추얼" : "Mvirtual"}
                    </Text>
                  </Box>
                  <Box mt="10px">
                    <Text component="span" fontSize="15px" fontWeight="400">
                      {lang === "ko"
                        ? "대표이사: 이화영 | 서울시 강남구 테헤란로 5길 7 KG타워"
                        : "CEO: hwa-young Lee | #9F 118, KG tower,  Teheran-ro 5-gil 7 Gangnam-gu, Seoul."}
                    </Text>
                  </Box>
                  <Box mt="4px">
                    <Text component="span" fontSize="15px" fontWeight="400">
                      {lang === "ko" ? (
                        <>
                          사업자등록번호: 321-880-2709 | TEL:{" "}
                          <a href="tel:07043481972">070-4348-1972</a>
                        </>
                      ) : (
                        <>
                          Corporate registration number : 321-88-02709 | TEL:{" "}
                          <a href="tel:07043481972">070-4348-1972</a>
                        </>
                      )}
                    </Text>
                  </Box>
                  <Box mt="20px">
                    <Text component="span" fontSize="15px" fontWeight="400">
                      ⓒ MVIRTUAL, ALL RIGHTS RESERVED.
                    </Text>
                  </Box>
                </Box>
              </Inner>
            </GridBox>
          </Box>

          <Box display="flex">
            <IconButton
              onClick={() =>
                window.open("https://pf.kakao.com/_HWFnxj", "_blank")
              }
            >
              <img src="/image/footer_icon01.png" alt="kakaotalk icon" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://blog.naver.com/mvirtual", "_blank")
              }
            >
              <img src="/image/footer_icon02.png" alt="blog icon" />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://t.me/Ethan_d_k", "_blank")}
            >
              <img src="/image/footer_icon03.png" alt="telegram icon" />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://wa.link/e1vmws", "_blank")}
            >
              <img src="/image/footer_icon04.png" alt="watchapp icon" />
            </IconButton>
          </Box>
        </Box>
      </FooterWrap>
    </>
  );
};

export default _;
