import { Box } from "@mui/material";
import styled from "styled-components";
import Text from "../../elements/Text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface IInstagram {
  title?: string;
  image?: string;
  name?: string;
  follower?: string;
  income?: string;
  activity?: string;
  description?: string;
}

const Wrap = styled.div`
  margin: 0 20px;
  padding: 45px;
  max-width: 550px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  align-items: flex-start;
  flex-direction: column;
  background-color: #1a1a1a;
  border-radius: 20px;
`;

const Title = styled.div`
  width: 100%;
  background-color: #26d9c7;
  text-align: center;
`;

const ImageBox = styled.div`
  min-width: 160px;
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-bottom: 2px solid #fff;
`;

const Info = styled(Text)<{ border?: string }>`
  padding: 8px 0 8px;
  width: 100%;
  border-bottom: ${(props) => (props.border ? `${props.border}px` : "1px")}
    solid #fff;
`;

const Instagram = (props: IInstagram) => {
  const { title, image, name, follower, income, activity, description } = props;
  const [observer, setObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-30% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  return (
    <Wrap>
      <Title>
        <Text fontSize={24}>{title}</Text>
      </Title>

      <Box
        mt="40px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ImageBox ref={ref}>
          <motion.img
            src={image}
            alt={name}
            variants={{
              on: {
                y: 0,
                rotate: -10,
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.8,
                },
              },
              off: {
                y: 130,
              },
            }}
            animate={observer ? "on" : "off"}
          />
        </ImageBox>
        <Box width="100%" pl="28px">
          <Info
            type="description"
            color="#fff"
            fontWeight="400"
          >{`인스타그램: ${name}`}</Info>
          <Info
            type="description"
            color="#fff"
            fontWeight="400"
          >{`팔로워: ${follower}`}</Info>
          <Info
            type="description"
            color="#fff"
            fontWeight="400"
          >{`게시물당 예상 수입: ${income}`}</Info>
          {activity && (
            <Info
              type="description"
              color="#fff"
              fontWeight="400"
              border="0"
            >{`광고 모델 활동: ${activity}`}</Info>
          )}
        </Box>
      </Box>

      <Box mt="50px">
        <Text type="description" color="#fff" fontWeight="400">
          {description}
        </Text>
      </Box>
    </Wrap>
  );
};

export default Instagram;
