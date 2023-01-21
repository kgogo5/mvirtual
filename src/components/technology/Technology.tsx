import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { language } from "../../atom";
import { PointColor } from "../../styles/common";
import Section from "../elements/Section";
import Text from "../elements/Text";
import TechnologyVideo from "./element/TechnologyVideo";

const Wrap = styled(Box)`
  background-color: #000;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

const HighLightBox = styled.div`
  margin: 0 auto;
  padding: 9px 10px 8px;
  max-width: 1164px;
  width: 100%;
  background-color: #26d9c7;

  & .MuiTypography-root {
    width: 100%;

    @media screen and (max-width: 1080px) {
      font-size: 15px;
    }
  }
`;

const Technology = () => {
  const lang = useRecoilValue(language);

  return (
    <Wrap width="100%">
      <Section sectionPadding="40px 15px" animation={false}>
        <>
          <Box mb="60px" width="100%">
            <Text type="title" color="#fff">
              <PointColor>
                {lang === "ko" ? (
                  <>엠버추얼 가상인간 기술</>
                ) : (
                  <>Virtual human production reference</>
                )}
              </PointColor>
            </Text>
          </Box>
        </>
      </Section>

      <Box width="100%" px="20px">
        <HighLightBox>
          <Text fontSize="24px">
            사람과 유사도 98%로 사람처럼 매우 자연스러움
          </Text>
        </HighLightBox>
      </Box>

      <Box width="100%" mt="16px" px="20px">
        <HighLightBox>
          <Text fontSize="24px">
            3D컴퓨터그래픽(CG) 제작 방식 보다 가상인간 제작 속도 약 50배 빠름
          </Text>
        </HighLightBox>
      </Box>

      <Section sectionPadding="30px 15px" animation={false}>
        <>
          <Box
            mb="60px"
            width="100%"
            m="0 auto"
            maxWidth="1164px"
            textAlign="left"
          >
            <Text type="description" color="#fff" fontWeight="400">
              {lang === "ko" ? (
                <>
                  기존에 3D컴퓨터그래픽(CG)으로 그리는 가상인간 제작방식은
                  제작기간이 수개월이 걸리고 비용도 크다는 문제점이 있었습니다.
                  <br />
                  <br />
                  엠버추얼의 Ai 딥러닝 기반 가상인간 제작방식은 기존 수개월
                  걸리는 제작속도 문제를 약 1일 정도로 획기적으로 단축시켰고
                  사람과 유사도 98%의 자연스러운 가상인간 구현이 가능합니다.
                </>
              ) : (
                <>Virtual human production reference</>
              )}
            </Text>

            <Box mt="30px" textAlign="center">
              <img
                src="/image/technology_grid.png"
                alt="엠버추얼 가상인간 기술"
              />
            </Box>
          </Box>
        </>
      </Section>

      <TechnologyVideo />
    </Wrap>
  );
};

export default Technology;
