import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

interface ISection {
  children: JSX.Element;
  color?: "main" | "sub";
  sectionPadding?: "default" | string;
  animation?: boolean;
  id?: string;
}

const Wrap = styled.section<{
  bg: "main" | "sub";
  sectionPadding: "default" | string;
}>`
  padding: ${(props) =>
    props.sectionPadding === "default" ? `180px 15px` : props.sectionPadding};
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 20vh;
  flex-direction: column;
  background-color: ${(props) => (props.bg === "main" ? "#000" : "#191919")};

  @media screen and (max-width: 768px) {
    padding: ${(props) =>
      props.sectionPadding === "default" ? `120px 20px` : props.sectionPadding};
  }
`;

const Section = (props: ISection) => {
  const {
    children,
    color = "main",
    sectionPadding = "default",
    animation = true,
  } = props;

  const [observer, setObserver] = useState(false);
  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setObserver(inView);
    },
  });

  return (
    <Wrap {...props} ref={ref} bg={color} sectionPadding={sectionPadding}>
      <Box width="100%">
        {animation ? (
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
            <>{children}</>
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </Box>
    </Wrap>
  );
};

export default Section;
