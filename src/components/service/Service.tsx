import { Box } from "@mui/material";
import { Article, HalfBox, PointColor } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Text from "../elements/Text";
import { motion } from "framer-motion";
import ServiceVideo from "./element/ServiceVideo";

const Wrap = styled(Box)``;

const ImgGrid = styled(Box)`
  img {
    max-width: 100%;
  }
`;

const ImageBox = styled.div`
  & img {
    max-width: 584px;
    width: 100%;
    height: auto;
  }
`;

const VisualList = styled(Box)`
  margin: 0 auto;
  max-width: 1164px;
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    display: grid;
    gap: 40px 60px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px 30px;
    }
  }

  && {
    @media screen and (max-width: 1080px) {
      gap: 48px 0;
    }
  }
`;

const HalfBoxReverse = styled(HalfBox)`
  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

const ListBox = styled.div`
  position: relative;
  padding-bottom: 30px;
  max-width: 290px;
  width: 100%;
  border: 1px solid #fff;
  overflow: hidden;

  & > div:nth-child(2) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;
    background-color: #26d9c7;
    z-index: 2;
  }

  & img {
    max-width: 100%;
    width: 100%;
  }
`;
const ImgBox = styled(Box)`
  && {
    margin-bottom: 40px;

    img {
      @media screen and (max-width: 1080px) {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

const Service = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Wrap width="100%">
        {/* 엠버추얼 서비스 */}
        <Section animation={false}>
          <>
            <Box mb="60px">
              <Text type="title" color="#fff">
                <PointColor>
                  {lang === "ko" ? <>엠버추얼 서비스</> : <>MVirtual service</>}
                </PointColor>
              </Text>
            </Box>

            <VisualList mt="60px">
              <Box>
                <ListBox>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      ease: "circInOut",
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <img src="/image/service_list01.jpg" alt="" />
                  </motion.div>
                  <Box>
                    <Text type="sub">
                      {lang === "ko" ? (
                        <>
                          Ai가상인간 모델
                          <br />
                          에이전시 서비스
                        </>
                      ) : (
                        <>Ai Virtual Human Model Agency Services</>
                      )}
                    </Text>
                  </Box>
                </ListBox>
                <ListBox>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      ease: "circInOut",
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: 1,
                    }}
                  >
                    <img src="/image/service_list02.jpg" alt="" />
                  </motion.div>
                  <Box>
                    <Text type="sub">
                      {lang === "ko" ? (
                        <>Ai가상인간 영상 제작</>
                      ) : (
                        <>Ai Virtual Human Video Production</>
                      )}
                    </Text>
                  </Box>
                </ListBox>
                <ListBox>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      ease: "circInOut",
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: 2,
                    }}
                  >
                    <img src="/image/service_list03.jpg" alt="" />
                  </motion.div>
                  <Box>
                    <Text type="sub">
                      {lang === "ko" ? (
                        <>Ai가상인간 SNS운영</>
                      ) : (
                        <>Ai Virtual Human SNS Operations</>
                      )}
                    </Text>
                  </Box>
                </ListBox>
                <ListBox>
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      ease: "circInOut",
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: 3,
                    }}
                  >
                    <img src="/image/service_list04.jpg" alt="" />
                  </motion.div>
                  <Box>
                    <Text type="sub">
                      {lang === "ko" ? (
                        <>
                          Ai가상인간을 활용한
                          <br />
                          기업마케팅
                        </>
                      ) : (
                        <>Ai Corporate Marketing Using Virtual Humans</>
                      )}
                    </Text>
                  </Box>
                </ListBox>
              </Box>
            </VisualList>
          </>
        </Section>

        {/* Ai가상인간 모델 에이전시 서비스 */}
        <Section color="sub" id="agency">
          <>
            <Box>
              <Text type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>Ai가상인간 모델 에이전시 서비스</>
                ) : (
                  <>Ai Virtual Human Model Agency Services</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImgBox mt="60px">
                <img src="/image/service01.png" alt="Service Grid" />
              </ImgBox>

              <Article>
                <Box>
                  <Text type="description" color="#fff">
                    {lang === "ko" ? (
                      <>영구적으로 소유할 수 있는 Ai가상인간 모델 공급</>
                    ) : (
                      <>Ai Virtual Human Model Agency Services</>
                    )}
                  </Text>
                </Box>
                <Box mt="36px">
                  <Text type="description" color="#fff" fontWeight="400">
                    {lang === "ko" ? (
                      <>
                        엠버추얼은 모델을 필요로 하는 여러 분야에 오직 한
                        기업만을 위해 활동하며 영구적으로 소유할 수 있는
                        Ai가상인간 모델을 공급해드리고 있습니다. 
                        <br /> <br />
                          변화에 빠른 기업들은 사람모델 보다 Ai가상인간 모델을
                        활용하여 광고영상, 유튜브/인스타그램의 콘텐츠, 쇼핑몰
                        운영, 신제품과 콜라보, 화보촬영, 회사홍보영상등을
                        제작하면서 큰 효과를 보고 있습니다.  
                        <br /> <br />  이제 당신의 기업만을 위해 활동하는
                        Ai가상인간 모델을 영구적으로 소유하세요!
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
              </Article>
            </HalfBox>

            <ImgGrid mt="60px">
              <img src="/image/service_grid.png" alt="Service Grid" />
            </ImgGrid>
          </>
        </Section>

        {/* 가상인간 영상 제작 서비스 */}
        <Section id="aiservice">
          <>
            <Box>
              <Text type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>가상인간 영상 제작 서비스</>
                ) : (
                  <>Ai Virtual Human Model Agency Services</>
                )}
              </Text>
            </Box>

            <Box mt="60px">
              <ServiceVideo />
            </Box>

            <Box m="100px auto 0" maxWidth="1080px" textAlign="left">
              <Text type="description" color="#fff">
                {lang === "ko" ? (
                  <>
                    100만 조회수 이상의 인기영상들을 제작했던 전문 영상 촬영팀
                    보유
                  </>
                ) : (
                  <>Ai Virtual Human Model Agency Services</>
                )}
              </Text>
              <Box mt="36px">
                <Text type="description" color="#fff" fontWeight="400">
                  {lang === "ko" ? (
                    <>
                      엠버추얼은 가상인간 제작 뿐만 아니라 가상인간을 활용한
                      영상 제작 서비스도 진행하고 있습니다. <br />
                      <br />
                      100만 조회수 이상의 인기 영상 콘텐츠를 다수 제작했던 전문
                      영상팀들이 가상인간을 활용한 영상기획부터 촬영까지 모든
                      것을 도와드립니다.
                      <br />
                      <br />
                      차별화된 기획력으로 가상인간을 활용한 기업홍보영상,
                      유튜브영상, 광고CF, 바이럴 영상등이 제작 가능하며 이미
                      촬영 된 영상의 인물을 가상인간으로 변환하는 것도
                      가능합니다.
                      <br />
                      <br />
                      가상인간이 출연하는 영상은 일반 영상보다 이슈가 많이 되고
                      콘텐츠 반응도 좋아서 홍보에 큰 도움이 될 수 있습니다. 또한
                      영상에 출연한 가상인간으로 별도의 인스타그램, 유튜브
                      채널을 운영하게 되면 더 큰 홍보효과를 보실 수 있습니다.
                    </>
                  ) : (
                    <>
                      Amber Tual not only produces virtual humans, but also
                      provides video production services using virtual humans.
                      <br />
                      <br />
                      Professional video teams that produced a number of popular
                      video contents with more than 1 million views will help
                      you with everything from video planning to filming using
                      virtual humans.
                      <br />
                      <br />
                      With differentiated planning power, corporate promotional
                      videos, YouTube videos, advertising CFs, and viral videos
                      using virtual humans can be produced, and it is also
                      possible to convert people from already filmed videos into
                      virtual humans.
                      <br />
                      <br />
                      Videos featuring virtual humans have more issues than
                      regular videos and have a good response to content, which
                      can be of great help in promoting them. In addition, if
                      you run a separate Instagram and YouTube channel as a
                      virtual person who appeared in the video, you can see a
                      greater promotional effect.
                    </>
                  )}
                </Text>
              </Box>
            </Box>
          </>
        </Section>

        {/* 가상인간 SNS운영 서비스 */}
        <Section color="sub" id="sns">
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>가상인간 SNS운영 서비스</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img
                  src="/image/service_chart.png"
                  alt="사람보다 '좋아요' 더 많이 받는 가상인간"
                />
              </ImageBox>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="sub" color="#fff">
                    {lang === "ko" ? (
                      <>
                        사람보다 가상인간이 인스타그램 좋아요, 댓글, 팔로워 수가{" "}
                        <PointColor>평균 약 400% 더 높음</PointColor>
                      </>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="description" color="#fff" fontWeight="400">
                    {lang === "ko" ? (
                      <>
                        엠버추얼은 가상인간에 매력적인 세계관, 콘텐츠 기획력을
                        더해 팬들이 반응할 수 있는 가상인간 인스타그램, 유튜브
                        콘텐츠 제작 부터 가상인간 SNS 채널 운영 대행까지 전문
                        마케팅팀이 관리를 해드립니다. <br />
                        <br />
                        더이상 기업들의 오피셜한 SNS채널에는 소비자들이 반응하지
                        않습니다. <br />
                        기업을 대표하는 가상인간 캐릭터가 직접 SNS채널을
                        운영하면서 기업의 메세지를 전달 하는 가상인간 콘텐츠에
                        소비자들은 큰 반응을 하고 있습니다. <br />
                        <br />
                        또한 최근 통계자료에 따르면 사람이 운영하는 인스타그램
                        보다 가상인간이 운영하는 인스타그램의 게시물 참여율이
                        평균 약 400%가 높게 나오고 있습니다.
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
              </Article>
            </HalfBox>
          </>
        </Section>

        {/* 가상인간을 활용한 기업 마케팅 */}
        <Section id="marketing">
          <>
            <Box mb="60px">
              <Text component="h2" type="title" color="#26d9c7">
                {lang === "ko" ? (
                  <>가상인간을 활용한 기업 마케팅</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
            <HalfBoxReverse>
              <Article>
                <Box mt="18px" width="100%">
                  <Text type="sub" color="#fff">
                    {lang === "ko" ? (
                      <>
                        A스타트업 <PointColor>월 매출 80억</PointColor>을 만들어
                        낸 전문 마케팅 보유
                      </>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>
                <Box mt="18px">
                  <Text type="description" color="#fff" fontWeight="400">
                    {lang === "ko" ? (
                      <>
                        많은 기업들이 가상인간을 어떻게 활용을 해야 될 지에 대해
                        고민을 하고 있습니다.
                        <br />
                        <br />
                        엠버추얼은 단순히 가상인간 제작만을 하지 않고 가상인간을
                        활용한 마케팅까지 도움을 드리고 있습니다.
                        <br />
                        <br />
                        A스타트업의 매출을 런칭 7개월 만에 월 80억까지
                        성장시켰던 전문 마케팅팀이 가상인간을 활용하여 기업의
                        브랜드 가치와 매출을 높일 수 있는 가상인간 마케팅 전략에
                        대하여 컨설팅을 해드립니다.
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
              </Article>
              <ImageBox>
                <img
                  src="/image/service_list.png"
                  alt="가상인간을 활용한 마케팅 프로세스"
                />
              </ImageBox>
            </HalfBoxReverse>
          </>
        </Section>
      </Wrap>
    </>
  );
};

export default Service;
