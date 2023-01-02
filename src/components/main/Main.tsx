import { Box } from "@mui/material";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Wrap = styled.div``;

const TestBox = styled.div`
  margin: 100px auto;
  width: 300px;
  height: 400px;
  background: #fff;
  transition: 1s;

  &.active {
    background-color: #ab5db3;
  }
`;

const Main = () => {
  return (
    <>
      <Box>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </Box>
    </>
  );
};

export default Main;

const Section = () => {
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
      <TestBox className={observer ? "active" : ""} />
    </Wrap>
  );
};
