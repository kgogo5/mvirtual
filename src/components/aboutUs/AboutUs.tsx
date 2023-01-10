import { Box, Typography } from "@mui/material";
import { PointColor } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled, { keyframes } from "styled-components";
import { Add, Check } from "@material-ui/icons";
import { motion } from "framer-motion";

const opacities = keyframes`
0%{
    opacity:1;
  }
  50%{ 
    opacity:0.4;
    
  }
  100%{
  opacity:1;
  
}
`;

const dimAnimation = keyframes`
0%{
  background-position:0% 50%
}
50%{
  background-position:100% 50%
}
100%{
  background-position:0% 50%
  }
`;

const Wrap = styled(Box)`
  & section:nth-child(3) > div {
    width: 100%;
  }
`;

const Visual = styled.section`
  position: relative;
  padding: 250px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 20vh;
  flex-direction: column;
  background-color: #000;
  z-index: 2;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    background: url("/image/about_us_bg01.png") no-repeat 50% 50%;
    z-index: 1;
    animation: ${opacities} 10s ease-in-out infinite;
  }

  & svg {
    fill: #26d9c7;
  }

  .plus {
    width: 30px;
    height: auto;
    fill: #fff;
  }
`;

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
    line-height: 1.6;
    z-index: 3;
  }
`;

const BgAnimation = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1164px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;

  & .MuiTypography-root {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  }
`;

const BgImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url("/image/about_us_bg02.png") no-repeat;
  background-size: contain;
  background-position: 0% 0%;
  z-index: 2;
`;

const Dim = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(20, 20, 20, 1) 0%,
    rgba(21, 34, 33, 1) 25%,
    rgba(26, 86, 80, 1) 51%,
    rgba(36, 191, 175, 1) 100%
  );
  z-index: 1;
  opacity: 0.2;
  animation: ${dimAnimation} 10s ease infinite;
  transform: translateZ(10px);
`;

const AboutUs = () => {
  const lang = useRecoilValue(language);

  return (
    <>
      <Wrap width="100%">
        <Visual>
          <Box zIndex={2}>
            <Box>
              <img src="/image/about_us_logo.png" alt="mvirtual logo" />
            </Box>

            <Box mt="50px">
              <Typography color="#fff" fontSize={35} fontWeight="bold">
                {lang === "ko" ? (
                  <>가상인간 영상 제작부터 마케팅까지</>
                ) : (
                  <>From virtual human video production to marketing</>
                )}
              </Typography>
            </Box>

            <Box
              mt="40px"
              paddingBottom="180px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="0 48px"
            >
              <Box display="flex" alignItems="center">
                <Check />
                <Box ml="12px">
                  <Typography fontSize={23} color="#fff">
                    {lang === "ko" ? (
                      <>가상인간 영상 제작</>
                    ) : (
                      <>Virtual human video production</>
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Check />
                <Box ml="12px">
                  <Typography fontSize={23} color="#fff">
                    {lang === "ko" ? (
                      <>가상인간 SNS운영</>
                    ) : (
                      <>Virtual human SNS operation</>
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Check />
                <Box ml="12px">
                  <Typography fontSize={23} color="#fff">
                    {lang === "ko" ? (
                      <>가상인간을 활용한 기업마케팅</>
                    ) : (
                      <>Corporate Marketing Using Virtual Humans</>
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="0 60px"
              position="absolute"
              bottom="80px"
              left="0"
              right="0"
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
                  사람과 유사도 98%
                  <br />
                  가상인간 제작 기술
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
              <Add className="plus" />

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
                  100만 조회수가 넘는
                  <br />
                  인기 영상을 제작했던
                  <br />
                  전문 PD, 작가, 촬영팀
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

              <Add className="plus" />

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
                  월 80억 매출을
                  <br />
                  만들어 낸 전문
                  <br />
                  마케팅팀
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
          </Box>
        </Visual>

        <Section sectionPadding="40px 15px 180px" animation={false}>
          <>
            <Typography
              color="#fff"
              fontSize={18}
              textAlign="left"
              maxWidth="1164px"
            >
              {lang === "ko" ? (
                <>
                  엠버추얼은 단순히 가상인간 제작만을 하지 않습니다.
                  <br />
                  최고의 가상인간 기술력과 최고의 영상제작팀, 최고의
                  마케팅팀으로 구성되어 가상인간을 활용하여 기업의 브랜드 가치를
                  높이고 매출을 활성화 시키는데 도움을 드리고 있습니다. <br />
                  <br />
                  엠버추얼의 가상인간 기술력은 3D제작방식이 아닌 Ai제작 방식으로
                  1분 가상인간 영상 기준 기존에 수개월이 걸렸던 작업과정을
                  24시간으로 단축시켰고 사람과 유사도 98%로 매우 자연스럽습니다.
                  <br />
                  <br />
                  엠버추얼은 100만 조회수 이상의 여러 인기 영상을 제작했던 전문
                  PD, ,작가, 촬영팀이 가상인간을 활용한 영상기획부터 촬영까지
                  도움을 드리고 있습니다. <br />
                  <br />
                  또한 A스타트업 런칭 7개월만에 월 80억 매출을 만들어 낸 전문
                  마케팅팀이 가상인간을 활용한 마케팅 전반에 관하여 컨설팅을
                  해드리고 있습니다.
                  <br />
                  <br />
                  가상인간 시장은 제작비용이 매우 큰 비용이 들어가기에 현재는
                  대부분 대기업에서만 활용이 되어지고 있습니다. 하지만 저희
                  엠버추얼은 좀 더 많은 기업들이 가상인간을 활용한 마케팅을 할
                  수 있도록 가상인간 제작비용을 타사대비 1/10로 대폭
                  낮추었습니다.
                </>
              ) : (
                <>
                  Without our knowledge, other companies are using virtual
                  humans. It <PointColor>generates 600 billion won</PointColor>{" "}
                  in annual sales.
                </>
              )}
            </Typography>
          </>
        </Section>

        <Section color="sub">
          <BgAnimation>
            <BgImage />
            <Box p="30px 20px 30px 70px" zIndex={2} maxWidth="660px">
              <Box>
                <Typography
                  fontSize={35}
                  fontWeight="bold"
                  color="#fff"
                  textAlign="left"
                >
                  엠버추얼의 신념은 우리의 성공보다
                  <br />
                  파트너의 성공을 돕는 것입니다.{" "}
                </Typography>
              </Box>
              <Box mt="50px">
                <Typography fontSize={18} color="#fff" textAlign="left">
                  저희는 단순히 가상인간 제작 수주를 받는 것이 목적이 아닙니다.
                  <br />
                  저희의 가상인간 기술을 도입하는 기업들에게 매출 활성화와
                  마케팅에 큰 도움을 드리는 것이 목표이자 신념입니다.
                  <br />
                  <br />
                  엠버추얼은 진심으로 파트너를 성공시켜드리는 기업이 되고
                  싶습니다.
                  <br />
                  파트너의 성공을 돕는 마인드, 파트너의 고민을 해결해주려는
                  마인드, 파트너를 성장시켜주려는 마인드는 저희가 여러분들을
                  대하는 마음입니다.
                  <br />
                  가상인간과 마케팅 관련해서는 언제나 Giver의 마인드로 협업하는
                  기업들의 가상인간 프로젝트가 성공 할 수 있도록 최선을 다해
                  도와드리겠습니다.
                </Typography>
              </Box>
            </Box>
            <Dim />
          </BgAnimation>
        </Section>
      </Wrap>
    </>
  );
};

export default AboutUs;
