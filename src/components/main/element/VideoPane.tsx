import { useState } from "react";
import styled from "styled-components";
import Player from "../../elements/Player";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { language } from "../../../atom";
import Br from "../../elements/Br";

const Wrap = styled.div`
  width: 100%;
  background-color: #000;
`;

const ViewVideo = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }
`;

const TitleBox = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 1164px;
  width: 100%;
  transform: translate(-50%, -50%);

  font-family: "Pretendard", sans-serif;
  color: #fff;
  font-size: 45px;

  @media screen and (max-width: 1164px) {
    padding: 0 10px;
    font-size: 18px;
  }
`;

const VideoPane = () => {
  const lang = useRecoilValue(language);
  const [observer, setObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  return (
    <Wrap ref={ref}>
      <ViewVideo>
        <Player url="/video/main01.mp4" active={observer} />
        <TitleBox>
          {lang === "ko" ? (
            <>Ai가상인간 모델 공급부터 영상제작, 마케팅까지</>
          ) : (
            <>
              From Ai Virtual Human Model Creation <Br />
              to Video Production & Marketing Solution
            </>
          )}
        </TitleBox>
      </ViewVideo>
    </Wrap>
  );
};

export default VideoPane;
