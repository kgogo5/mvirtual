import { Box, Typography } from "@mui/material";
import { PointColor } from "../../styles/common";
import VideoPane from "./element/VideoPane";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const Button = styled(Link)`
  && {
    padding: 8px 10px;
    height: 100%;
    min-width: 128px;
    border-radius: 0;
    box-shadow: none;
    width: auto;
    color: #26d9c7;

    & img {
      display: inline-block;
      vertical-align: top;
    }
  }
`;

const Main = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Box width="100%">
        <VideoPane />

        <Section>
          <>
            <Typography color="#fff" fontSize={35}>
              {lang === "ko" ? (
                <>
                  우리가 모르는 사이, 다른 기업은 가상인간을 활용하여
                  <br />
                  <PointColor>연 6000억원의 매출</PointColor>을 올리고 있습니다.
                </>
              ) : (
                <>
                  Without our knowledge, other companies are using virtual
                  humans. It <PointColor>generates 600 billion won</PointColor>{" "}
                  in annual sales.
                </>
              )}
            </Typography>
            <Box mt="30px">
              <Button to="market#ludomagalu">
                <Box
                  component="span"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box component="span" mr="10px">
                    자세히 보기
                  </Box>
                  <img src="/image/mint_arrow.png" alt="arrow icon" />
                </Box>
              </Button>
            </Box>
          </>
        </Section>

        <Section>
          <Typography mt="50px" color="#fff" fontSize={35}>
            {lang === "ko" ? (
              <>
                우리가 모르는 사이, 다른 기업은 가상인간을 활용하여
                <br />
                <PointColor>연 6000억원의 매출</PointColor>을 올리고 있습니다.
              </>
            ) : (
              <>
                Without our knowledge, other companies are using virtual humans.
                It <PointColor>generates 600 billion won</PointColor> in annual
                sales.
              </>
            )}
          </Typography>
        </Section>
      </Box>
    </>
  );
};

export default Main;
