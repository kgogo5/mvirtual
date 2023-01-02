import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const Progress = () => {
  return (
    <Wrap>
      <CircularProgress />
    </Wrap>
  );
};

export default Progress;
