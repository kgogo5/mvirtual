import { Box } from "@mui/material";
import { Article, HalfBox, PointColor } from "../../styles/common";
import VideoPane from "./element/VideoPane";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import MainAnimation from "./element/MainAnimation";
import Text from "../elements/Text";

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

const ImageBox = styled.div`
  & img {
    max-width: 584px;
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

        {/* Ai가상인간 모델 에이전시 서비스 */}
        <Section>
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 모델 에이전시 서비스</>
                ) : (
                  <>Ai Virtual Human Model Agency Services</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img
                  src="/image/section_01.jpg"
                  alt="Ai가상인간으로 구현한 가상인간 모델"
                />
              </ImageBox>
              <Article>
                <Box width="100%">
                  <Text type="description" color="#fff">
                    {lang === "ko" ? (
                      <>원하는 이미지의 모델을 찾기 힘드신가요?</>
                    ) : (
                      <>Is it hard to find the model of the image you want?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff">
                    {lang === "ko" ? (
                      <>
                        기업이 원하는 모든 모델 이미지를 Ai가상인간으로 구현하여
                        영구적으로 사용할 수 있는 가상인간 모델을 공급해드립니다
                      </>
                    ) : (
                      <>
                        A video featuring an Ai virtual human with a similarity
                        of 98% to a human becomes a big issue and is a great
                        help in publicity.
                      </>
                    )}
                  </Text>
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
          </>
        </Section>

        {/* Ai가상인간 영상제작 서비스 */}
        <Section color="sub">
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 영상제작 서비스</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff">
                    {lang === "ko" ? (
                      <>특별한 영상을 제작하고 싶으신가요?</>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff">
                    {lang === "ko" ? (
                      <>
                        사람과 유사도 98%의 Ai가상인간이 출연하는 영상은 큰
                        이슈가 되어 홍보에 큰 도움이 됩니다.
                      </>
                    ) : (
                      <>
                        A video featuring an Ai virtual human with a similarity
                        of 98% to a human becomes a big issue and is a great
                        help in publicity.
                      </>
                    )}
                  </Text>
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
                <img
                  src="/image/section_02.jpg"
                  alt="Ai가상인간이 출연하는 영상"
                />
              </ImageBox>
            </HalfBox>
          </>
        </Section>

        {/* Ai가상인간 SNS운영 서비스 */}
        <Section>
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 SNS운영 서비스</>
                ) : (
                  <>Ai Virtual Human SNS Operation Service</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img src="/image/section_03.jpg" alt="인스타그램 채널" />
              </ImageBox>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff">
                    {lang === "ko" ? (
                      <>인스타그램, 유튜브 채널 활성화가 안되시나요?</>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff">
                    {lang === "ko" ? (
                      <>
                        사람보다 가상인간이 인스타그램 좋아요, 댓글 팔로워수가
                        약 400% 높게 나옵니다.
                      </>
                    ) : (
                      <>
                        A video featuring an Ai virtual human with a similarity
                        of 98% to a human becomes a big issue and is a great
                        help in publicity.
                      </>
                    )}
                  </Text>
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
          </>
        </Section>

        {/* Ai가상인간 마케팅 서비스 */}
        <Section color="sub">
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 마케팅 서비스</>
                ) : (
                  <>Ai Virtual Human Marketing Services</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff">
                    {lang === "ko" ? (
                      <>마케팅이 안되어서 어려움을 겪고 있으신가요?</>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff">
                    {lang === "ko" ? (
                      <>
                        월매출 <PointColor>80억 매출</PointColor>을 만들어낸
                        전문 마케팅팀이 Ai가상인간을 활용하여 기업의 마케팅
                        고민을 해결해드리겠습니다.
                      </>
                    ) : (
                      <>
                        A video featuring an Ai virtual human with a similarity
                        of 98% to a human becomes a big issue and is a great
                        help in publicity.
                      </>
                    )}
                  </Text>
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
                <img
                  src="/image/section_04.jpg"
                  alt="Ai가상인간을 활용한 기업의 마케팅"
                />
              </ImageBox>
            </HalfBox>
          </>
        </Section>

        {/* 엠버추얼 가상인간 기술 */}
        <Section>
          <>
            <Box mb="40px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>엠버추얼 가상인간 기술</>
                ) : (
                  <>Emerging Virtual Human Technology</>
                )}
              </Text>
            </Box>

            <Text type="title" color="#fff">
              {lang === "ko" ? (
                <>
                  우리의 가상인간 기술은 너무 사람 같아서
                  <br />
                  사람과 구분을 하지 못합니다.
                </>
              ) : (
                <>
                  Without our knowledge, other companies are using virtual
                  humans. It <PointColor>generates 600 billion won</PointColor>{" "}
                  in annual sales.
                </>
              )}
            </Text>

            <Box mt="20px">
              <Text type="description" color="#fff">
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
              </Text>
            </Box>

            <Box mt="130px">
              <MainAnimation />
            </Box>
          </>
        </Section>
      </Box>
    </>
  );
};

export default Main;
