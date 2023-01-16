import { useState } from "react";
import styled from "styled-components";
import Player from "../../elements/Player";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
import { PointColor } from "../../../styles/common";
import { motion } from "framer-motion";
import Text from "../../elements/Text";

const Wrap = styled.div`
  width: 100%;
`;

const FlexBox = styled(Box)`
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const ViewVideo = styled.div`
  margin: 0 auto;
  max-width: 470px;
  width: 100%;

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }
`;
const Animation = styled(motion.div)`
  margin-top: 28px;
  & img {
    width: 54px;
    height: auto;
  }
`;

const AnimationText = styled(motion.strong)`
  display: inline-block;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
`;

const MainAnimation = () => {
  const [observer, setObserver] = useState(false);
  const [arrowObserver, setArrowObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  const { ref: arrowRef } = useInView({
    // threshold: 1,
    rootMargin: "-30% 0px",
    onChange: (inView) => {
      setArrowObserver(inView);
    },
  });

  return (
    <Wrap ref={ref}>
      <FlexBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        ref={arrowRef}
      >
        <Box>
          <ViewVideo>
            <Player url="/video/sample.mp4" active={observer} />
          </ViewVideo>
          <Box mt="15px">
            <Text type="description" color="#fff">
              <PointColor>타사 3D 제작방식(CG) 가상인간</PointColor>
            </Text>
          </Box>
        </Box>
        <Box mx="45px" minWidth="270px">
          <Text type="description" color="#fff">
            가상인간 사람과 유사도 비교
          </Text>
          <Animation
            variants={{
              on: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            animate={arrowObserver ? "on" : "off"}
          >
            <motion.img
              variants={{
                off: {
                  x: -30,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                },
              }}
              src="/image/section_arrows_01.png"
              alt="arrow images"
            />
            <motion.img
              variants={{
                off: {
                  x: -30,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                },
              }}
              src="/image/section_arrows_02.png"
              alt="arrow images"
            />
            <motion.img
              variants={{
                off: {
                  x: -30,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                },
              }}
              src="/image/section_arrows_03.png"
              alt="arrow images"
            />
            <motion.img
              variants={{
                off: {
                  x: -30,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                },
              }}
              src="/image/section_arrows_04.png"
              alt="arrow images"
            />
            <motion.img
              variants={{
                off: {
                  x: -30,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                },
              }}
              src="/image/section_arrows_05.png"
              alt="arrow images"
            />
          </Animation>

          <Box mt="24px" display="flex" justifyContent="space-between">
            <Text type="description" color="#fff" fontWeight={400}>
              40%
            </Text>
            <AnimationText
              variants={{
                off: {
                  scale: 1,
                },
                on: {
                  scale: 1.4,
                  color: "#26d9c7",
                  transition: {
                    delay: 1.3,
                    duration: 0.3,
                  },
                },
              }}
              animate={arrowObserver ? "on" : "off"}
            >
              98%
            </AnimationText>
          </Box>
        </Box>
        <Box>
          <ViewVideo>
            <Player url="/video/sample.mp4" active={observer} />
          </ViewVideo>
          <Box mt="15px">
            <Text type="description" color="#fff">
              <PointColor>엠버추얼 Ai제작방식 가상인간</PointColor>
            </Text>
          </Box>
        </Box>
      </FlexBox>
    </Wrap>
  );
};

export default MainAnimation;
