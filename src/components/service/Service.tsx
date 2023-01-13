import { Box, Typography } from "@mui/material";
import { HalfBox, PointColor } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Player from "../elements/Player";

const Wrap = styled(Box)`
  & section:nth-child(3) > div {
    width: 100%;
  }
`;

const Hr = styled.div`
  & hr {
    margin: 0;
    border-color: #3e3e3e;
  }
`;

const CustomHalfBox = styled(HalfBox)`
  gap: 20px;
`;

const Service = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Wrap width="100%">
        <Section sectionPadding="40px 15px" animation={false}>
          <>
            <Box mb="60px">
              <Typography fontSize={35} fontWeight="bold">
                <PointColor>
                  {lang === "ko" ? (
                    <>
                      엠버추얼 서비스
                      <br />
                    </>
                  ) : (
                    <>Mvirtual Service</>
                  )}
                </PointColor>
              </Typography>
            </Box>
            <CustomHalfBox>
              <Box>
                <Player url="/video/sample.mp4" active={false} controls />
                <Typography
                  color="#fff"
                  fontSize={18}
                  textAlign="left"
                  maxWidth="1164px"
                >
                  {lang === "ko" ? (
                    <>
                      가상인간 벨라 화보촬영 영상
                      <br />
                    </>
                  ) : (
                    <>Virtual human Bella photoshoot video</>
                  )}
                </Typography>
              </Box>
              <Box>
                <Player url="/video/sample.mp4" active={false} controls />
                <Typography
                  color="#fff"
                  fontSize={18}
                  textAlign="left"
                  maxWidth="1164px"
                >
                  {lang === "ko" ? (
                    <>
                      50대여자를 젊은 가상인간으로 제작
                      <br />
                    </>
                  ) : (
                    <>Virtual human Bella photoshoot video</>
                  )}
                </Typography>
              </Box>
            </CustomHalfBox>
          </>
        </Section>
        <Hr>
          <hr />
        </Hr>
        <Section sectionPadding="40px 15px 180px" animation={false}>
          <>
            <CustomHalfBox>
              <Box>
                <Player url="/video/sample.mp4" active={false} controls />
                <Typography
                  color="#fff"
                  fontSize={18}
                  textAlign="left"
                  maxWidth="1164px"
                >
                  {lang === "ko" ? (
                    <>
                      싱가포르 남자를 가상인간으로 제작
                      <br />
                    </>
                  ) : (
                    <>Virtual human Bella photoshoot video</>
                  )}
                </Typography>
              </Box>
              <Box>
                <Player url="/video/sample.mp4" active={false} controls />
                <Typography
                  color="#fff"
                  fontSize={18}
                  textAlign="left"
                  maxWidth="1164px"
                >
                  {lang === "ko" ? (
                    <>
                      가상인간 벨라 댄스영상
                      <br />
                    </>
                  ) : (
                    <>Virtual human Bella photoshoot video</>
                  )}
                </Typography>
              </Box>
            </CustomHalfBox>
          </>
        </Section>
      </Wrap>
    </>
  );
};

export default Service;
