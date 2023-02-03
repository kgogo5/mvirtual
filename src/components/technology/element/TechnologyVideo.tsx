import { useState } from "react";
import styled from "styled-components";
import Player from "../../elements/Player";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
import Text from "../../elements/Text";
import { language } from "../../../atom";
import { useRecoilValue } from "recoil";

const Wrap = styled.div`
  margin-bottom: 80px;
  width: 100%;
  background-color: #000;
`;

const ViewVideo = styled.div`
  margin: 0 auto;
  max-width: 1161px;
  width: 100%;

  @media screen and (max-width: 1080px) {
    padding: 0 20px 0px;
  }

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }
`;

const TechnologyVideo = () => {
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
    <>
      <Wrap ref={ref}>
        <ViewVideo>
          <Player url="/video/technology01.mp4" active={observer} />
        </ViewVideo>
        <Box
          m="12px auto 0"
          p="0 20px"
          maxWidth="1164px"
          display="flex"
          justifyContent="space-between"
          gap="0 30%"
        >
          <Box display="flex" justifyContent="center" width="100%">
            <Text color="#26d9c7">
              {lang === "ko" ? (
                <>타사 3D제작방식 가상인간</>
              ) : (
                <>Other company’s virtual human with 3D production methods</>
              )}
            </Text>
          </Box>
          <Box display="flex" justifyContent="center" width="100%">
            <Text color="#26d9c7">
              {lang === "ko" ? (
                <>엠버추얼 가상인간 제니</>
              ) : (
                <>Mvirtual’s Vita</>
              )}
            </Text>
          </Box>
        </Box>
      </Wrap>
    </>
  );
};

export default TechnologyVideo;
