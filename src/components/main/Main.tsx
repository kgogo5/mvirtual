import { Box, Typography } from "@mui/material";
import { Chip, HalfBox, PointColor } from "../../styles/common";
import VideoPane from "./element/VideoPane";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import MainAnimation from "./element/MainAnimation";

const Button = styled(Link)`
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

const ImageBox = styled.div`
  & img {
    max-width: 100%;
    width: 100%;
    height: auto;
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
            <Typography color="#fff" fontSize={35} fontWeight="bold">
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
                    {lang === "ko" ? <>자세히 보기</> : <>See more</>}
                  </Box>
                  <img src="/image/mint_arrow.png" alt="arrow icon" />
                </Box>
              </Button>
            </Box>

            <Box mt="15px">
              <Typography color="#fff" fontSize={18} fontWeight="bold">
                {lang === "ko" ? (
                  <>
                    가상인간을 활용한 영상 제작 부터 마케팅까지 엠버추얼이
                    도와드리겠습니다.
                  </>
                ) : (
                  <>
                    From video production using virtual humans to marketing,
                    Amber Tual will help you.
                  </>
                )}
              </Typography>
            </Box>
          </>
        </Section>

        <Section color="sub">
          <HalfBox>
            <ImageBox>
              <img src="/image/section_01.jpg" alt="virtual human bella" />
            </ImageBox>
            <Article>
              <Box>
                <Chip>
                  <Typography color="#1f1f1f" fontSize={18} fontWeight="bold">
                    {lang === "ko" ? (
                      <>가상인간 영상제작</>
                    ) : (
                      <>Virtual human video production</>
                    )}
                  </Typography>
                </Chip>
              </Box>
              <Box mt="18px" width="100%">
                <Typography color="#fff" fontSize={18} fontWeight="bold">
                  {lang === "ko" ? (
                    <>특별한 영상을 제작하고 싶으신가요?</>
                  ) : (
                    <>Do you want to create a special video?</>
                  )}
                </Typography>
              </Box>

              <Box mt="18px">
                <Typography
                  color="#fff"
                  fontSize={35}
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  {lang === "ko" ? (
                    <>
                      사람과 유사도 98%의 Ai가상인간이
                      <br />
                      출연하는 영상은 큰 이슈가 되어
                      <br />
                      홍보에 큰 도움이 됩니다.
                    </>
                  ) : (
                    <>
                      A video featuring an Ai virtual human with a similarity of
                      98% to a human becomes a big issue and is a great help in
                      publicity.
                    </>
                  )}
                </Typography>
              </Box>

              <Box mt="30px" width="100%">
                <Button to="market#ludomagalu">
                  <Box
                    component="span"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box component="span" mr="10px">
                      {lang === "ko" ? <>자세히 보기</> : <>See more</>}
                    </Box>
                    <img src="/image/mint_arrow.png" alt="arrow icon" />
                  </Box>
                </Button>
              </Box>
            </Article>
          </HalfBox>
        </Section>

        <Section>
          <HalfBox>
            <Article>
              <Box>
                <Chip>
                  <Typography color="#1f1f1f" fontSize={18} fontWeight="bold">
                    {lang === "ko" ? (
                      <>가상인간 SNS운영대행</>
                    ) : (
                      <>Virtual human video production</>
                    )}
                  </Typography>
                </Chip>
              </Box>
              <Box mt="18px" width="100%">
                <Typography color="#fff" fontSize={18} fontWeight="bold">
                  {lang === "ko" ? (
                    <>인스타그램, 유튜브 채널 활성화가 안되시나요?</>
                  ) : (
                    <>Do you want to create a special video?</>
                  )}
                </Typography>
              </Box>

              <Box mt="18px">
                <Typography
                  color="#fff"
                  fontSize={35}
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  {lang === "ko" ? (
                    <>
                      Ai가상인간으로 SNS를 운영하면
                      <br />
                      좋아요가 약 500% 증가합니다.
                    </>
                  ) : (
                    <>
                      A video featuring an Ai virtual human with a similarity of
                      98% to a human becomes a big issue and is a great help in
                      publicity.
                    </>
                  )}
                </Typography>
              </Box>

              <Box mt="30px" width="100%">
                <Button to="market#ludomagalu">
                  <Box
                    component="span"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box component="span" mr="10px">
                      {lang === "ko" ? <>자세히 보기</> : <>See more</>}
                    </Box>
                    <img src="/image/mint_arrow.png" alt="arrow icon" />
                  </Box>
                </Button>
              </Box>
            </Article>
            <ImageBox>
              <img src="/image/section_02.jpg" alt="virtual human bella" />
            </ImageBox>
          </HalfBox>
        </Section>

        <Section color="sub">
          <HalfBox>
            <ImageBox>
              <img src="/image/section_03.jpg" alt="virtual human bella" />
            </ImageBox>
            <Article>
              <Box>
                <Chip>
                  <Typography color="#1f1f1f" fontSize={18} fontWeight="bold">
                    {lang === "ko" ? (
                      <>가상인간 영상제작</>
                    ) : (
                      <>Virtual human video production</>
                    )}
                  </Typography>
                </Chip>
              </Box>
              <Box mt="18px" width="100%">
                <Typography color="#fff" fontSize={18} fontWeight="bold">
                  {lang === "ko" ? (
                    <>마케팅이 안되어서 어려움을 겪고 있으신가요?</>
                  ) : (
                    <>Do you want to create a special video?</>
                  )}
                </Typography>
              </Box>

              <Box mt="18px">
                <Typography
                  color="#fff"
                  fontSize={35}
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  {lang === "ko" ? (
                    <>
                      월매출 <PointColor>80억 매출</PointColor>을 만들어낸 전문
                      <br />
                      마케팅팀이 Ai가상인간을 활용하여
                      <br />
                      기업의 마케팅 고민을 해결해드리겠습니다.
                    </>
                  ) : (
                    <>
                      A video featuring an Ai virtual human with a similarity of
                      98% to a human becomes a big issue and is a great help in
                      publicity.
                    </>
                  )}
                </Typography>
              </Box>

              <Box mt="30px" width="100%">
                <Button to="market#ludomagalu">
                  <Box
                    component="span"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <Box component="span" mr="10px">
                      {lang === "ko" ? <>자세히 보기</> : <>See more</>}
                    </Box>
                    <img src="/image/mint_arrow.png" alt="arrow icon" />
                  </Box>
                </Button>
              </Box>
            </Article>
          </HalfBox>
        </Section>

        <Section>
          <>
            <Typography
              color="#fff"
              fontSize={35}
              fontWeight="bold"
              lineHeight="1.4"
            >
              {lang === "ko" ? (
                <>
                  우리의 가상인간 기술은 너무 사람 같아서
                  <br />
                  <PointColor>사람과 구분을 하지 못합니다.</PointColor>
                </>
              ) : (
                <>
                  Without our knowledge, other companies are using virtual
                  humans. It <PointColor>generates 600 billion won</PointColor>{" "}
                  in annual sales.
                </>
              )}
            </Typography>

            <Box mt="15px">
              <Typography color="#fff" fontSize={18} fontWeight="bold">
                {lang === "ko" ? (
                  <>
                    우리의 가상인간 제작기술은 부자연스러운
                    3D컴퓨터그래픽(CG)으로 제작하는 방식이 아닌
                    <br />
                    Ai제작방식으로 사람과 구분하지 못할 정도로 사람과
                    98%유사합니다.
                  </>
                ) : (
                  <>
                    From video production using virtual humans to marketing,
                    Amber Tual will help you.
                  </>
                )}
              </Typography>
            </Box>

            <Box mt="120px">
              <MainAnimation />
            </Box>
          </>
        </Section>
      </Box>
    </>
  );
};

export default Main;
