import { Box } from "@mui/material";
import { Article, HalfBox, PointColor } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language, mobile } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Text from "../elements/Text";
import { motion } from "framer-motion";
import ServiceVideo from "./element/ServiceVideo";
import { Helmet } from "react-helmet";

const Wrap = styled(Box)``;

const ImgGrid = styled(Box)`
  margin: 60px auto 0;
  max-width: 1164px;
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
      gap: 40px 30px;
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
  const isMobile = useRecoilValue(mobile);

  return (
    <>
      <Helmet>
        <title>엠버추얼 | Service</title>
        <meta name="description" content="엠버추얼 서비스" />
      </Helmet>

      <Wrap width="100%">
        {/* 엠버추얼 서비스 */}
        <Section sectionPadding="40px 15px 120px" animation={false}>
          <>
            <Box mb="60px">
              <Text type="title" color="#fff">
                <PointColor>
                  {lang === "ko" ? (
                    <>엠버추얼 서비스</>
                  ) : (
                    <>M.Virtual Service</>
                  )}
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
                    <img
                      src="/image/service_list01.jpg"
                      alt="Ai Virtual Human Model Agency Service"
                    />
                  </motion.div>
                  <Box>
                    <Text type="sub" fontWeight={600}>
                      {lang === "ko" ? (
                        <>
                          Ai가상인간 모델
                          <br />
                          에이전시
                        </>
                      ) : (
                        <>Ai Virtual Human Model Agency</>
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
                    <img
                      src="/image/service_list02.jpg"
                      alt="Ai Virtual Human Video Production"
                    />
                  </motion.div>
                  <Box>
                    <Text type="sub" fontWeight={600}>
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
                    <img
                      src="/image/service_list03.jpg"
                      alt="Ai Virtual Human Social Media Management"
                    />
                  </motion.div>
                  <Box>
                    <Text type="sub" fontWeight={600}>
                      {lang === "ko" ? (
                        <>Ai가상인간 SNS운영</>
                      ) : (
                        <>Ai Virtual Human Social Media Management</>
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
                    <img
                      src="/image/service_list04.jpg"
                      alt="Ai Virtual Human Enterprise Marketing"
                    />
                  </motion.div>
                  <Box>
                    <Text type="sub" fontWeight={600}>
                      {lang === "ko" ? (
                        <>
                          Ai가상인간을 활용한
                          <br />
                          기업마케팅
                        </>
                      ) : (
                        <>Ai Virtual Human Enterprise Marketing</>
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
                  <>Ai Virtual Human Model Agency Service</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImgBox mt="60px">
                <img
                  src="/image/service01.png"
                  alt="We provide permanent ownership of Ai Virtual Human Model"
                />
              </ImgBox>

              <Article>
                <Box>
                  <Text type="sub" color="#fff">
                    {lang === "ko" ? (
                      <>영구적으로 소유할 수 있는 Ai가상인간 모델 공급</>
                    ) : (
                      <>
                        We provide permanent ownership of Ai Virtual Human Model
                      </>
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
                        <br />
                        <br />
                        변화에 빠른 기업들은 사람모델 보다 Ai가상인간 모델을
                        활용하여 광고영상, 유튜브/인스타그램의 콘텐츠, 쇼핑몰
                        운영, 신제품과 콜라보, 화보촬영, 회사홍보영상등을
                        제작하면서 큰 효과를 보고 있습니다.
                        <br />
                        <br />
                        이제 당신의 기업만을 위해 활동하는 Ai가상인간 모델을
                        영구적으로 소유하세요!
                      </>
                    ) : (
                      <>
                        M.Virtual offers Ai Virtual Human Model who is
                        permanently available and will be devoted exclusively to
                        only one designated company.
                        <br />
                        <br />
                        Enterprises keen to trends has already produced
                        promotional videos of Tv commercial, YouTube/Instagram
                        contents, online shopping mall ads, new product launch,
                        collaboration, printed media photoshoot, and company PR
                        by utilizing Ai Virtual Human Model instead of hiring
                        existing human influencers.
                        <br />
                        <br />
                        Now you can permanently own your Virtual Human Model
                        only working for your company endlessly.
                      </>
                    )}
                  </Text>
                </Box>
              </Article>
            </HalfBox>

            <ImgGrid>
              {isMobile ? (
                <img
                  src={
                    lang === "ko"
                      ? "/image/service_grid_mo.png"
                      : "/image/service_grid_en_mo.png"
                  }
                  alt="Service Grid"
                />
              ) : (
                <img
                  src={
                    lang === "ko"
                      ? "/image/service_grid.png"
                      : "/image/service_grid_en.png"
                  }
                  alt="Service Grid"
                />
              )}
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
                  <>Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>

            <Box mt="60px">
              <ServiceVideo />
            </Box>

            <Box m="100px auto 0" maxWidth="1080px" textAlign="left">
              <Box>
                <Text type="sub" color="#fff">
                  {lang === "ko" ? (
                    <>
                      100만 조회수 이상의 인기영상들을 제작했던 전문 영상 촬영팀
                      보유
                    </>
                  ) : (
                    <>
                      Our professional production crew has created many viral
                      videos with millions of views.
                    </>
                  )}
                </Text>
              </Box>

              <Box mt="30px">
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
                      M.Virtual not only produces virtual humans, but also
                      provides video production services using virtual humans.
                      <br />
                      <br />
                      Our professional video production crew that produced a lot
                      of popular video contents each with more than 1 million
                      views will help you with everything from video storyboard
                      planning to filming using virtual humans.
                      <br />
                      <br />
                      With differentiated planning power, we can produce
                      promotional videos, YouTube videos, tv commercial videos,
                      and social media viral videos using virtual humans, and
                      it’s also possible to convert people from already finished
                      videos into virtual humans.
                      <br />
                      <br />
                      The videos featuring virtual humans have more attention
                      than regular videos and its content draws great boost in
                      response, so that you can reach the publicity you
                      expected. In addition, if you run a separate Instagram
                      account or YouTube channel with a virtual human in the
                      videos, you will see explosive PR results.
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
                  <>Virtual human SNS management service.</>
                )}
              </Text>
            </Box>
            <HalfBox>
              <ImageBox>
                <img
                  src={
                    lang === "ko"
                      ? "/image/service_chart.png"
                      : "/image/service_chart_en.png"
                  }
                  alt="Virtual human SNS management service."
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
                      <>
                        Likes and comments on virtual human Instagram are about
                        400% higher on average than real human influencer’s
                        Instagram.
                      </>
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
                        With years of experience in planning marketing contents,
                        M.virtual creates an attractive virtual human universe,
                        produced in virtual human Instagram & YouTube contents
                        that fans can respond to, and provides a management
                        service filled in with our professional marketing
                        experts.
                        <br />
                        <br />
                        Consumers no longer respond to companies' official
                        Social Media channels. Consumers are opting in greatly
                        to virtual human influencers in which virtual human
                        characters itself appear more intimate and relatable to
                        people. Now enterprises can communicate to consumers on
                        personal level via our directly managed Virtual Human’s
                        Social Media accounts delivering corporate messages.
                        <br />
                        <br />
                        In addition, according to recent statistics, the average
                        participation traffic of posts on virtual human-run
                        Instagram is about 400% higher than that of real human
                        based Instagram.
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
                  <>Corporate marketing using the virtual human.</>
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
                      <>
                        Expert marketing team that raised start up A's revenue u
                        up to $ 8 million per month
                      </>
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
                        Many companies are agonized on how to utilize virtual
                        humans.
                        <br />
                        <br />
                        M.virtual does not just end service at producing virtual
                        humans, but we also develop marketing strategies using
                        our tailored virtual humans.
                        <br />
                        <br />A professional marketing team, which grew startup
                        A's sales up to $6 million a month within 7 months of
                        its launch, provides consulting on virtual human
                        marketing strategies that can increase the brand value
                        and sales of companies by utilizing virtual humans.
                      </>
                    )}
                  </Text>
                </Box>
              </Article>

              <ImageBox>
                <img
                  src={
                    lang === "ko"
                      ? "/image/service_list.png"
                      : "/image/service_list_en.png"
                  }
                  alt="Corporate marketing using the virtual human."
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
