import { Typography } from "@mui/material";
import styled from "styled-components";
interface ITitle {
  children?: any;
  component?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  type?: "title" | "description" | "sub";
}

const Wrap = styled(Typography)`
  && {
    font-family: "Pretendard", sans-serif;
    word-break: keep-all;
  }

  &.title {
    font-size: 35px;
    line-height: 1.2;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
  }

  &.description {
    font-size: 18px;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  &.sub {
    font-size: 23px;
    line-height: 1.4;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

const Title = (props: ITitle) => {
  const { children, type, fontWeight } = props;
  return (
    <Wrap className={type || ""} fontWeight={fontWeight || "bold"} {...props}>
      {children}
    </Wrap>
  );
};

export default Title;
