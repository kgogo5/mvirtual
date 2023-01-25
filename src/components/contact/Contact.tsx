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
import { language, mobile } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Text from "../elements/Text";
import { Button, DefaultButton } from "../../styles/common";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

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
    max-width: 436px;
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
    max-width: 260px;
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

const Tell = styled.a`
  && {
    padding: 0 20px;
    max-width: 436px;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 12px;
    border-radius: 24px;
    background-color: #26d9c7;
    transition: 0.5s;

    &:hover {
      background-color: #0faa9b;
    }
  }
  & .MuiTouchRipple-root {
  }

  &:hover,
  &:focus {
    background-color: #0faa9b;
  }
`;

const Qrcode = styled(DefaultButton)`
  && {
    width: auto;
    min-width: auto;
    display: inline-block;
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const Contact = () => {
  const lang = useRecoilValue(language);
  const isMobile = useRecoilValue(mobile);

  const { control, setValue, register, handleSubmit, reset } = useForm();

  const [videoChecked, setVideoChecked] = useState(false);
  const [snsChecked, setSnsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const onSubmit = handleSubmit(async (item: any) => {
    const data = {
      name: item.name,
      phone: item.phone,
      budget: item.budget || 0,
      video: item.video ? "Y" : "N",
      sns: item.sns ? "Y" : "N",
      marketing: item.marketing ? "Y" : "N",
      content: item.content || "",
    };

    await axios
      .post(
        "https://sheet.best/api/sheets/0185cc7b-8a38-4342-9a40-d890f21e9ef1",
        data
      )
      .then(() => {
        setVideoChecked(false);
        setSnsChecked(false);
        setMarketingChecked(false);
        setValue("video", false);
        setValue("sns", false);
        setValue("marketing", false);
        alert("문의하기가 완료되었습니다.");
        reset();
      });
  });

  return (
    <Wrap>
      <Section sectionPadding="160px 15px 110px" animation={false}>
        <>
          <Text type="title" color="#26d9c7">
            CONTACT US
          </Text>
          <Box mt="40px">
            <Text type="description" color="#fff" fontWeight="400">
              {lang === "ko" ? <>엠버추얼 문의하기</> : <>Inquire Mvirtual</>}
            </Text>
          </Box>
          {lang === "ko" ? (
            <>
              <Box mt="80px" display="flex" justifyContent="center">
                <Tell href="tel:07043481972">
                  <Text type="description" color="#000">
                    전화상담 : 070-4348-1972 {isMobile && <br />}(오전 9시 ~
                    오후 6시)
                  </Text>
                </Tell>
              </Box>
              <Box mt="15px" display="flex" justifyContent="center">
                <KakaoText
                  onClick={() =>
                    window.open("https://pf.kakao.com/_HWFnxj", "_blank")
                  }
                >
                  <img src="/image/kakao.png" alt="kakao logo" />
                  <Text type="description" color="#391b1b">
                    카톡상담 : 실시간 카톡 상담 문의
                  </Text>
                </KakaoText>
              </Box>
            </>
          ) : (
            <Box mt="30px" display="flex" justifyContent="center" gap="0 40px">
              <Qrcode
                onClick={() => window.open("https://t.me/Ethan_d_k", "_blank")}
              >
                <img src="/image/telegram.png" alt="telegram" />
                <Box mt="10px">
                  <Text type="description" color="#fff" fontWeight="400">
                    Telegram
                  </Text>
                </Box>
              </Qrcode>
              <Qrcode
                onClick={() => window.open("https://wa.link/e1vmws", "_blank")}
              >
                <img src="/image/watchapp.png" alt="watchapp" />
                <Box mt="10px">
                  <Text type="description" color="#fff" fontWeight="400">
                    Watchapp
                  </Text>
                </Box>
              </Qrcode>
            </Box>
          )}
        </>
      </Section>

      <FormWrap noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box width="100%">
          <FormControl>
            <FormLabel>
              {lang === "ko" ? <>성함/회사명</> : <>Name/Company</>}
            </FormLabel>
            <Input
              placeholder={
                lang === "ko"
                  ? "성함/회사명을 입력해주세요."
                  : "Type name/company."
              }
              {...register("name", {
                required:
                  lang === "ko"
                    ? "성함/회사명을 입력해주세요."
                    : "Type name/company.",
              })}
            />
          </FormControl>
        </Box>
        <Box mt="32px" width="100%">
          <FormControl>
            <FormLabel>{lang === "ko" ? <>연락처</> : <>Contact</>}</FormLabel>
            <Input
              type="tel"
              placeholder={
                lang === "ko"
                  ? "연착처를 입력해주세요."
                  : "Type contact information."
              }
              {...register("phone", {
                required:
                  lang === "ko"
                    ? "연착처를 입력해주세요."
                    : "Type contact information.",
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
                lang === "ko" ? "예산을 입력해주세요." : "Type your budget."
              }
              {...register("budget", {
                required:
                  lang === "ko" ? "예산을 입력해주세요." : "Type your budget.",
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
                Choose M.Virtual’s services you are interested in (Multiple
                selections available)
              </>
            )}
          </Text>
        </Box>

        <Box mt="10px" width="100%">
          <Controller
            control={control}
            name="video"
            render={({ field }: any) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      setVideoChecked(!field.value);
                      setValue("video", !field.value);
                    }}
                    checked={videoChecked}
                  />
                }
                label={
                  lang === "ko"
                    ? "Ai가상인간 영상제작"
                    : "Virtual human video production"
                }
              />
            )}
          />
        </Box>

        <Box mt="10px" width="100%">
          <Controller
            control={control}
            name="sns"
            render={({ field }: any) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      setSnsChecked(!field.value);
                      setValue("sns", !field.value);
                    }}
                    checked={snsChecked}
                  />
                }
                label={
                  lang === "ko"
                    ? "Ai가상인간 SNS 운영 대행"
                    : "Proxy operation of virtual human SNS"
                }
              />
            )}
          />
        </Box>

        <Box mt="10px" width="100%">
          <Controller
            control={control}
            name="marketing"
            render={({ field }: any) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      setMarketingChecked(!field.value);
                      setValue("marketing", !field.value);
                    }}
                    checked={marketingChecked}
                  />
                }
                label={
                  lang === "ko"
                    ? "Ai가상인간 활용한 기업 마케팅"
                    : "Corporate marketing using the virtual human"
                }
              />
            )}
          />
        </Box>

        <Box mt="32px" width="100%">
          <Text type="description" color="#fff" fontWeight="400">
            {lang === "ko" ? (
              <>업체의 구체적인 니즈를 자유롭게 작성해주세요.</>
            ) : (
              <>Fill out specific needs of your company freely.</>
            )}
          </Text>
        </Box>

        <Box mt="12px" width="100%">
          <TextField
            fullWidth
            size="small"
            placeholder={
              lang === "ko"
                ? "업체소개, 가상인간 활용계획등에 대하여 상세히 작성해주시면 좀 더 구체적인 답변을 드릴 수 있습니다."
                : "We can give you a more specific answer if you write in detail about your company, virtual human utilization plan, etc."
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
            {lang === "ko" ? <>문의하기</> : <>Inquire</>}
          </SubmitButton>
        </Box>
      </FormWrap>
    </Wrap>
  );
};

export default Contact;
