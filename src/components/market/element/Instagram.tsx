import { Box } from "@mui/material";
import styled from "styled-components";
import Text from "../../elements/Text";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { language } from "../../../atom";

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
  @media screen and (max-width: 1080px) {
    margin: 0;
    padding: 20px;
  }
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

const FlexBox = styled(Box)`
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 20px 0;
  }
`;

const InstagramBox = styled(Box)`
  padding-left: 28px;
  @media screen and (max-width: 1080px) {
    padding: 0;
    text-align: center;
  }
`;

const ContentsBox = styled(Box)`
  @media screen and (max-width: 1080px) {
    text-align: center;
  }
`;

const Instagram = (props: IInstagram) => {
  const lang = useRecoilValue(language);
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

      <FlexBox
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
        <InstagramBox width="100%">
          <Info type="description" color="#fff" fontWeight="400">{`${
            lang === "ko" ? "인스타그램" : "Instagram"
          }: ${name}`}</Info>
          <Info type="description" color="#fff" fontWeight="400">{`${
            lang === "ko" ? "팔로워" : "Followers"
          }: ${follower}`}</Info>
          <Info type="description" color="#fff" fontWeight="400">{`${
            lang === "ko" ? "게시물당 예상 수입" : "Estimated income per post"
          }: ${income}`}</Info>
          {activity && (
            <Info
              type="description"
              color="#fff"
              fontWeight="400"
              border="0"
            >{`${
              lang === "ko"
                ? "광고 모델 활동"
                : "advertising modeling activities"
            }: ${activity}`}</Info>
          )}
        </InstagramBox>
      </FlexBox>

      <ContentsBox mt="50px">
        <Text type="description" color="#fff" fontWeight="400">
          {description}
        </Text>
      </ContentsBox>
    </Wrap>
  );
};

export default Instagram;
