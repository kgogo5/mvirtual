import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Wrap = styled.section<{ bg: "main" | "sub" }>`
  padding: 250px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 20vh;
  flex-direction: column;
  background-color: ${(props) => (props.bg === "main" ? "#000" : "#141414")};

  /* & .box {
    width: 200px;
    height: 200px;
    background: var(--accent);
  } */
`;

const Section = ({
  children,
  color = "main",
}: {
  children: JSX.Element;
  color?: "main" | "sub";
}) => {
  const [observer, setObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  return (
    <Wrap ref={ref} bg={color}>
      <Box>
        <motion.div
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
          <>
            {children}
            {/* <motion.div
              className="box"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            /> */}
          </>
        </motion.div>
      </Box>
    </Wrap>
  );
};

export default Section;
