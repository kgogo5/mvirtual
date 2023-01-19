import { useState } from "react";
import styled from "styled-components";
import Player from "../../elements/Player";
import { useInView } from "react-intersection-observer";

const Wrap = styled.div`
  width: 100%;
  background-color: #141414;
`;

const ViewVideo = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;

  & .reactPlayer {
    width: 100% !important;
    height: auto !important;
  }
`;

const ServiceVideo = () => {
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
          <Player url="/video/service01.mp4" active={observer} />
        </ViewVideo>
      </Wrap>
    </>
  );
};

export default ServiceVideo;
