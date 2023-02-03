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
import Br from "../elements/Br";
import { Helmet } from "react-helmet";

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
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
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

const HalfBoxReverse = styled(HalfBox)`
  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

const Main = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Helmet>
        <title>엠버추얼</title>
        <meta
          name="description"
          content="가상인간 제작 및 가상인간을 활용한 마케팅 전문기업, 가상인간 모델 공급, 가상인간 영상제작, 가상인간 SNS채널 운영, 가상인간을 활용한 기업마케팅"
        />
      </Helmet>

      <Box width="100%">
        <VideoPane />

        {/* Ai가상인간 모델 에이전시 서비스 */}
        <Section>
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 모델 에이전시</>
                ) : (
                  <>Ai Virtual Human Model Agency</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img
                  src="/image/section_01.jpg"
                  alt="Ai Virtual Human Model Agency"
                />
              </ImageBox>
              <Article>
                <Box width="100%">
                  <Text type="description" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>원하는 이미지의 모델을 찾기 힘드신가요?</>
                    ) : (
                      <>Trouble hiring the fitting model with right image?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>
                        기업이 원하는 모든 모델 이미지를 Ai가상인간으로 구현하여
                        영구적으로 사용할 수 있는 가상인간 모델을 공급해드립니다
                      </>
                    ) : (
                      <>
                        Our Ai Virtual Human Solution will provide customized
                        Virtual Human Of your desired model image, and is
                        permanently available.
                      </>
                    )}
                  </Text>
                </Box>

                <Box mt="30px" width="100%">
                  <Button to="service#agency">
                    <Box
                      component="span"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Box component="span" mr="10px">
                        {lang === "ko" ? <>자세히 보기</> : <>view detail</>}
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
            <HalfBoxReverse>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>특별한 영상을 제작하고 싶으신가요?</>
                    ) : (
                      <>Wanting to create unique video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>
                        사람과 유사도 98%의 Ai가상인간이 출연하는 영상은 큰
                        이슈가 되어 홍보에 큰 도움이 됩니다.
                      </>
                    ) : (
                      <>
                        A promotional video starring Ai Virtual Human with 98%
                        similarity rate to human will stir up viral attentions,
                        adding on to marketing strategy PR.
                      </>
                    )}
                  </Text>
                </Box>

                <Box mt="30px" width="100%">
                  <Button to="service#aiservice">
                    <Box
                      component="span"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Box component="span" mr="10px">
                        {lang === "ko" ? <>자세히 보기</> : <>view detail</>}
                      </Box>
                      <img src="/image/mint_arrow.png" alt="arrow icon" />
                    </Box>
                  </Button>
                </Box>
              </Article>
              <ImageBox>
                <img
                  src="/image/section_02.jpg"
                  alt="Ai Virtual Human Video Production Service"
                />
              </ImageBox>
            </HalfBoxReverse>
          </>
        </Section>

        {/* Ai가상인간 SNS운영 서비스 */}
        <Section id="sns">
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 SNS운영 서비스</>
                ) : (
                  <>Ai Virtual Human Social Media Management Service</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img
                  src="/image/section_03.jpg"
                  alt="Ai Virtual Human Social Media Management Service"
                />
              </ImageBox>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>인스타그램, 유튜브 채널 활성화가 안되시나요?</>
                    ) : (
                      <>
                        Having difficulty to boost Instagram, Youtube channel
                        traffic?
                      </>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>
                        사람보다 가상인간이 인스타그램 좋아요, 댓글 팔로워수가
                        약 400% 높게 나옵니다.
                      </>
                    ) : (
                      <>
                        Virtual Human is 400 % more likely to receive likes,
                        comments & followers than human Social Media
                        influencers.
                      </>
                    )}
                  </Text>
                </Box>

                <Box mt="30px" width="100%">
                  <Button to="service#sns">
                    <Box
                      component="span"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Box component="span" mr="10px">
                        {lang === "ko" ? <>자세히 보기</> : <>view detail</>}
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
                  <>Ai Virtual Human Marketing Service</>
                )}
              </Text>
            </Box>
            <HalfBoxReverse>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="description" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>마케팅이 안되어서 어려움을 겪고 있으신가요?</>
                    ) : (
                      <>Frustrated looking for breakthrough in marketing?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="title" color="#fff" fontWeight={500}>
                    {lang === "ko" ? (
                      <>
                        월매출 <PointColor>80억 매출</PointColor>을 만들어낸
                        전문 마케팅팀이 Ai가상인간을 활용하여 기업의 마케팅
                        고민을 해결해드리겠습니다.
                      </>
                    ) : (
                      <>
                        Our team of marketing experts has increased $ 6 million
                        in monthly sales And will solve your marketing
                        difficulties using Ai Virtual Human.
                      </>
                    )}
                  </Text>
                </Box>

                <Box mt="30px" width="100%">
                  <Button to="service#marketing">
                    <Box
                      component="span"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                    >
                      <Box component="span" mr="10px">
                        {lang === "ko" ? <>자세히 보기</> : <>view detail</>}
                      </Box>
                      <img src="/image/mint_arrow.png" alt="arrow icon" />
                    </Box>
                  </Button>
                </Box>
              </Article>
              <ImageBox>
                <img
                  src="/image/section_04.jpg"
                  alt="Ai Virtual Human Marketing Service"
                />
              </ImageBox>
            </HalfBoxReverse>
          </>
        </Section>

        {/* 엠버추얼 가상인간 기술 */}
        <Section>
          <>
            <Box m="0 auto" maxWidth="1164px" width="100%">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>엠버추얼 가상인간 기술</>
                ) : (
                  <>M.Virtual’s Ai Virtual Human Technology</>
                )}
              </Text>
            </Box>

            <Box m="40px auto 0" maxWidth="1164px" width="100%">
              <Text type="title" color="#fff" fontWeight={500}>
                {lang === "ko" ? (
                  <>
                    우리의 가상인간 기술은 너무 사람 같아서
                    <Br />
                    사람과 구분을 하지 못합니다.
                  </>
                ) : (
                  <>
                    Our Virtual Human Technology results in hyper reality <Br />
                    And cannot tell the difference from actual human being.
                  </>
                )}
              </Text>
            </Box>

            <Box m="20px auto 0" maxWidth="1164px" width="100%">
              <Text type="description" color="#fff" fontWeight={400}>
                {lang === "ko" ? (
                  <>
                    우리의 가상인간 제작기술은 부자연스러운
                    3D컴퓨터그래픽(CG)으로 제작하는 방식이 아닌
                    <Br />
                    Ai제작방식으로 사람과 구분하지 못할 정도로 사람과
                    98%유사합니다.
                  </>
                ) : (
                  <>
                    Our virtual Human production technology doesn’t use 3D
                    computer graphic (CGI) which looks unnatural and expensive,
                    But we use Ai deep learning production method with results
                    in 98% similarity rate to real human, so people cannot
                    distinguish which is real or virtual.
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
