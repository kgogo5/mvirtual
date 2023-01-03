import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrap = styled.section`
  margin: 30vh 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 20vh;
  flex-direction: column;
`;
const Animaition = styled(motion.div)``;

const Section = ({ children }: { children: JSX.Element }) => {
  const [observer, setObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-20% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  return (
    <Wrap ref={ref}>
      <Animaition
        animate={observer ? "on" : "off"}
        variants={{
          off: {
            y: 50,
            opacity: 0,
          },
          on: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
      >
        {children}
      </Animaition>
    </Wrap>
  );
};

export default Section;
