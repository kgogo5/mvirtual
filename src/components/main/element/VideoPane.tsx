import styled from "styled-components";
import Player from "../../elements/Player";
import { useRecoilValue } from "recoil";
import { language, mobile } from "../../../atom";
import Br from "../../elements/Br";

const Wrap = styled.div`
  width: 100%;
  background-color: #000;
`;

const ViewVideo = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }
`;

const TitleBox = styled.h2`
  position: absolute;
  left: 0;
  top: 50%;
  padding: 0 20px 0 6%;
  max-width: 1164px;
  width: 100%;
  text-align: left;
  line-height: 1.4;
  transform: translateY(-50%);

  font-family: "Pretendard", sans-serif;
  color: #fff;
  font-size: 45px;
  box-sizing: border-box;

  &.en {
    font-size: 30px;
  }

  @media screen and (max-width: 1164px) {
    padding: 0 10px 0 6%;
    font-size: 18px;
  }
`;

const VideoPane = () => {
  const lang = useRecoilValue(language);
  const isMobile = useRecoilValue(mobile);

  return (
    <Wrap>
      <ViewVideo>
        {!isMobile ? (
          <Player url="/video/main01.mp4" active={true} />
        ) : (
          <Player url="/video/main01_mo.mp4" active={true} />
        )}
        <>
          {lang === "ko" ? (
            <TitleBox>
              놀라지 마세요! 사람이 아닙니다! <br />
              사람과 유사도 98% 실사형 가상인간 제작 전문
            </TitleBox>
          ) : (
            <TitleBox className="en">
              Don't Get Stunned ! It's Not Human! Expert Hyper-Real Virtual
              Human <Br />
              Production with 98% Human Similarity Rate
            </TitleBox>
          )}
        </>
      </ViewVideo>
    </Wrap>
  );
};

export default VideoPane;
