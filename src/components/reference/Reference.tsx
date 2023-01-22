import { Box } from "@mui/material";
import { HalfBox, PointColor } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Player from "../elements/Player";
import Text from "../elements/Text";

const Wrap = styled.div`
  width: 100%;

  & section {
    @media screen and (max-width: 768px) {
      padding-bottom: 40px;
    }
  }
`;

const CustomHalfBox = styled(HalfBox)`
  max-width: 1164px;
  width: 100%;
  gap: 20px;
  margin: 0 auto;

  & > div {
    width: 50%;

    @media screen and (max-width: 1164px) {
      width: 100%;
    }
  }

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }

  & .description {
    min-height: 78px;
  }
`;

const HrStyle = styled.div`
  padding: 40px 0;
  width: 100%;
  background: #000;
  & hr {
    margin: 0 auto;
    max-width: 1164px;
    border-color: #626262;
  }
`;

const Reference = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Wrap>
        <Section sectionPadding="40px 15px" animation={false}>
          <>
            <Box mb="110px">
              <Text type="title" color="#fff">
                <PointColor>
                  {lang === "ko" ? (
                    <>가상인간 제작 레퍼런스</>
                  ) : (
                    <>Virtual Human Production References</>
                  )}
                </PointColor>
              </Text>
            </Box>
            <CustomHalfBox>
              <Box>
                <Player url="/video/main01.mp4" active={false} controls />
                <Box textAlign="left" className="description">
                  <Text component="strong" fontSize="26px" color="#fff">
                    {lang === "ko" ? (
                      <>가상인간 벨라 화보촬영 영상</>
                    ) : (
                      <>Virtual Human “Bella” photoshoot making video</>
                    )}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Player url="/video/reference01.mp4" active={false} controls />
                <Box textAlign="left" className="description">
                  <Text component="strong" fontSize="26px" color="#fff">
                    {lang === "ko" ? (
                      <>가상인간 비타 댄스영상</>
                    ) : (
                      <>Virtual Human “Vita” Dance video</>
                    )}
                  </Text>
                </Box>
              </Box>
            </CustomHalfBox>
          </>
        </Section>

        <HrStyle>
          <hr />
        </HrStyle>

        <Section sectionPadding="40px 15px 180px" animation={false}>
          <>
            <CustomHalfBox>
              <Box>
                <Player url="/video/reference02.mp4" active={false} controls />
                <Box textAlign="left" className="description">
                  <Text component="strong" fontSize="26px" color="#fff">
                    {lang === "ko" ? (
                      <>50대여자를 젊은 가상인간으로 제작</>
                    ) : (
                      <>
                        Producing a young Virtual Human with a woman in her 50s.
                      </>
                    )}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Player url="/video/reference03.mp4" active={false} controls />
                <Box textAlign="left" className="description">
                  <Text component="strong" fontSize="26px" color="#fff">
                    {lang === "ko" ? (
                      <>싱가포르 남자를 가상인간으로 제작</>
                    ) : (
                      <>Producing a virtual human with a Singaporean man.</>
                    )}
                  </Text>
                </Box>
              </Box>
            </CustomHalfBox>
          </>
        </Section>

        <HrStyle>
          <hr />
        </HrStyle>
      </Wrap>
    </>
  );
};

export default Reference;
