import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  TextField,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Text from "../elements/Text";
import { Button } from "../../styles/common";
import axios from "axios";
import { useForm } from "react-hook-form";

const Wrap = styled.div`
  width: 100%;
  background: #000;
`;

const FormWrap = styled.form`
  margin: 0 auto;
  padding: 0 20px 60px;
  max-width: 1164px;
  width: 100%;
  text-align: left;
  background: #000;

  & .MuiFormControl-root {
    width: 100%;
  }

  & .MuiFormLabel-root {
    color: #fff;
    font-family: "Pretendard", sans-serif;
    font-size: 18px;

    &.Mui-focused {
      color: #26d9c7;
    }
  }
  & .MuiInput-root {
    width: 100%;
    color: #b6b6b6;
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
    &:before {
      border-color: #fff;
    }

    &:hover:not(.Mui-disabled, .Mui-error):before {
      border-color: #26d9c7;
    }
  }

  & .Mui-focused {
    color: #26d9c7;

    &:after {
      border-color: #26d9c7;
    }
  }

  & .MuiCheckbox-root svg {
    fill: #fff;
  }

  & .MuiFormControlLabel-label {
    color: #fff;
    font-family: "Pretendard", sans-serif;
    font-size: 18px;
  }

  & .MuiInputBase-root {
    & .MuiInputBase-input {
      color: #fff;
      font-family: "Pretendard", sans-serif;
      font-size: 18px;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #26d9c7;
    }
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
  }

  & .Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #26d9c7 !important;
    }
  }

  & .MuiFormControlLabel-root {
    margin-left: 0;

    & .MuiButtonBase-root {
      margin-right: 10px;
    }
  }
`;

const KakaoText = styled(Button)`
  && {
    padding: 0 20px;
    max-width: 380px;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 12px;
    border-radius: 24px;
    background-color: #f8e100;
    transition: 0.5s;

    &:hover {
      background-color: #bba802;
    }
  }
  & .MuiTouchRipple-root {
  }

  &:hover,
  &:focus {
    background-color: #bba802;
  }
`;

const SubmitButton = styled(Button)`
  && {
    max-width: 350px;
    width: 100%;
    color: #000 !important;
    background-color: #26d9c7;
    font-size: 18px;

    &:hover {
      background-color: #068175;
    }
  }
  & .MuiTouchRipple-root {
  }
`;

const Contact = () => {
  const lang = useRecoilValue(language);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit(async (item: any) => {
    const data = {
      email: item.name,
      phone: item.phone,
      budget: item.budget || 0,
      first: item.first ? "Y" : "N",
      secound: item.secound ? "Y" : "N",
      third: item.third ? "Y" : "N",
      content: item.content || "",
    };
    console.log(data);

    // await axios
    //   .post(
    //     "https://sheet.best/api/sheets/5869f7bc-8ec2-4ba1-9bc1-fd7b691ba023",
    //     data
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     reset();
    //   });
  });

  return (
    <Wrap>
      <Section sectionPadding="160px 15px">
        <>
          <Text type="title" color="#26d9c7">
            CONTACT US
          </Text>
          <Box mt="40px">
            <Text type="description" color="#fff" fontWeight="400">
              {lang === "ko" ? (
                <>엠버추얼 문의하기</>
              ) : (
                <>Enquire about Amber Tual</>
              )}
            </Text>
          </Box>
          <Box mt="100px">
            <Text type="description" color="#fff" fontWeight="400">
              {lang === "ko" ? (
                <>전화상담 : 070-4348-1972 (오전 9시 ~ 오후 6시)</>
              ) : (
                <>Phone consultation: 070-4348-1972 (9 a.m. to 6 p.m.)</>
              )}
            </Text>
          </Box>
          <Box mt="40px">
            <KakaoText
              onClick={() =>
                window.open("http://pf.kakao.com/_HWFnxj/chat", "_blank")
              }
            >
              <img src="/image/kakao.png" alt="kakao logo" />
              <Text type="description" color="#391b1b">
                카톡상담 : 실시간 카톡 상담 문의
              </Text>
            </KakaoText>
          </Box>
        </>
      </Section>

      <FormWrap noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box width="100%">
          <FormControl>
            <FormLabel>
              {lang === "ko" ? <>성함/회사명</> : <>Name/Company Name</>}
            </FormLabel>
            <Input
              placeholder={
                lang === "ko"
                  ? "성함/회사명을 입력해주세요."
                  : "Please enter your name/company name."
              }
              {...register("name", { required: "성함/회사명을 입력해주세요." })}
            />
          </FormControl>
        </Box>
        <Box mt="32px" width="100%">
          <FormControl>
            <FormLabel>
              {lang === "ko" ? <>연락처</> : <>Contact information</>}
            </FormLabel>
            <Input
              type="tel"
              placeholder={
                lang === "ko"
                  ? "연착처를 입력해주세요."
                  : "Please enter a delayed destination."
              }
              {...register("phone", {
                required: "연착처를 입력해주세요.",
              })}
            />
          </FormControl>
        </Box>
        <Box mt="32px" width="100%">
          <FormControl>
            <FormLabel>{lang === "ko" ? <>예산</> : <>Budget</>}</FormLabel>
            <Input
              type="number"
              placeholder={
                lang === "ko"
                  ? "예산을 입력해주세요."
                  : "Please enter your budget."
              }
              {...register("budget", {
                required: "예산을 입력해주세요.",
              })}
            />
          </FormControl>
        </Box>

        <Box mt="32px" width="100%">
          <Text type="description" color="#fff" fontWeight="400">
            {lang === "ko" ? (
              <>관심있는 엠버추얼 서비스를 선택해주세요(복수 선택 가능)</>
            ) : (
              <>
                Please select the ambient service that you are interested in
                (multiple choices are available)
              </>
            )}
          </Text>
        </Box>

        <Box mt="10px" width="100%">
          <FormControlLabel
            {...register("first")}
            control={<Checkbox />}
            label={
              lang === "ko"
                ? "가상인간 영상제작"
                : "Virtual human video production"
            }
          />
        </Box>

        <Box mt="10px" width="100%">
          <FormControlLabel
            {...register("secound")}
            control={<Checkbox />}
            label={
              lang === "ko"
                ? "가상인간 SNS 운영 대행"
                : "Acting Virtual Human SNS Management"
            }
          />
        </Box>

        <Box mt="10px" width="100%">
          <FormControlLabel
            {...register("third")}
            control={<Checkbox />}
            label={
              lang === "ko"
                ? "가상인간 활용한 기업 마케팅"
                : "Enterprise Marketing Using Virtual Humans"
            }
          />
        </Box>

        <Box mt="32px" width="100%">
          <Text type="description" color="#fff" fontWeight="400">
            {lang === "ko" ? (
              <>업체의 구체적인 니즈를 자유롭게 작성해주세요.</>
            ) : (
              <>
                Please feel free to fill out the specific needs of the company.
              </>
            )}
          </Text>
        </Box>

        <Box mt="12px" width="100%">
          <TextField
            fullWidth
            size="small"
            placeholder={
              lang === "ko"
                ? "내용을 입력해주세요."
                : "Please enter the contents."
            }
            variant="outlined"
            multiline
            minRows={5}
            maxRows={5}
            inputProps={{ maxLength: 2000 }}
            {...register("content")}
          />
        </Box>

        <Box mt="42px">
          <SubmitButton type="submit">
            {lang === "ko" ? <>문의하기</> : <>Contact Us</>}
          </SubmitButton>
        </Box>
      </FormWrap>
    </Wrap>
  );
};

export default Contact;
