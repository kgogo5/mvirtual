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

const CircleBox = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  & .animate {
    width: 240px;
    height: 240px;
    background: #fff;
  }

  & .text {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 23px;
    font-weight: bold;
    line-height: 1.6;
    z-index: 3;
    font-family: "Pretendard", sans-serif;
  }
`;

const ImgGrid = styled(Box)`
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`;

const ImageBox = styled.div`
  & img {
    max-width: 584px;
    width: 100%;
    height: auto;
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

            <Box
              mt="60px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="0 60px"
            >
              <CircleBox>
                <motion.span
                  className="text"
                  animate={{
                    color: ["#000", "#fff", "#fff", "#000", "#000"],
                    scale: [1, 1.2, 1.2, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  가상인간 영상 제작
                </motion.span>
                <motion.div
                  className="animate"
                  animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 90, 90, 0],
                    background: ["#fff", "#26d9c7", "#26d9c7", "#fff", "#fff"],
                    borderRadius: ["5%", "5%", "50%", "50%", "5%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </CircleBox>

              <CircleBox>
                <motion.span
                  className="text"
                  animate={{
                    color: ["#000", "#fff", "#fff", "#000", "#000"],
                    scale: [1, 1.2, 1.2, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 1,
                  }}
                >
                  가상인간 SNS운영
                </motion.span>
                <motion.div
                  className="animate"
                  animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 90, 90, 0],
                    background: ["#fff", "#26d9c7", "#26d9c7", "#fff", "#fff"],
                    borderRadius: ["5%", "5%", "50%", "50%", "5%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 1,
                  }}
                />
              </CircleBox>

              <CircleBox>
                <motion.span
                  className="text"
                  animate={{
                    color: ["#000", "#fff", "#fff", "#000", "#000"],
                    scale: [1, 1.2, 1.2, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 2,
                  }}
                >
                  가상인간을 활용한
                  <br />
                  기업마케팅
                </motion.span>
                <motion.div
                  className="animate"
                  animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 90, 90, 0],
                    background: ["#fff", "#26d9c7", "#26d9c7", "#fff", "#fff"],
                    borderRadius: ["5%", "5%", "50%", "50%", "5%"],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 2,
                  }}
                />
              </CircleBox>
            </Box>
          </>
        </Section>

        {/* 가상인간 영상 제작 서비스 */}
        <Section color="sub">
          <>
            <Box>
              <Text type="title" color="#26d9c7">
                가상인간 영상 제작 서비스
              </Text>
            </Box>

            <Box mt="60px">
              <ServiceVideo />
            </Box>

            <Box mt="100px" maxWidth="1080px" textAlign="left">
              <Text type="description" color="#fff">
                차별화된 기획력으로 가상인간을 활용한 유튜브 영상, 기업 홍보
                영상, 광고CF영상등이 제작 가능하며 이미 촬영 된 영상의 인물을
                가상인간으로 변환하는 것도 가능합니다.
                <br />
                100만 조회수 이상의 인기 영상 콘텐츠를 다수 제작했던 전문
                작가팀, PD팀들이 가상인간을 활용한 영상 기획부터 촬영까지 모든
                것을 도와드립니다.
                <br />
                <br />
                가상인간이 출연하는 영상은 일반 모델이 출연하는 영상 보다 이슈도
                많이 되고 조회수도 잘 나와 홍보에 많은 도움이 될 수 있습니다.
                또한 영상에 출연한 가상인간으로 별도의 인스타그램, 유튜브 채널을
                운영하게 되면 더 큰 홍보 효과를 보실 수 있습니다.{" "}
              </Text>
            </Box>

            <ImgGrid mt="100px">
              <img src="/image/service_grid.png" alt="Service Grid" />
            </ImgGrid>
          </>
        </Section>

        {/* 가상인간 SNS운영 서비스 */}
        <Section>
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
                        가상인간 인스타그램의 좋아요, 댓글이 평균 약{" "}
                        <PointColor>400%가 더 높게</PointColor> 나옵니다.
                      </>
                    ) : (
                      <>Do you want to create a special video?</>
                    )}
                  </Text>
                </Box>

                <Box mt="18px">
                  <Text type="description" color="#fff">
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
        <Section color="sub">
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
            <HalfBox>
              <Article>
                <Box>
                  <Text type="description" color="#fff">
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
            </HalfBox>
          </>
        </Section>
      </Wrap>
    </>
  );
};

export default Service;
