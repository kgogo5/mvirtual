import { Box } from "@mui/material";
import { Article, HalfBox } from "../../styles/common";
import { useRecoilValue } from "recoil";
import { language } from "../../atom";
import Section from "../elements/Section";
import styled from "styled-components";
import Text from "../elements/Text";
import Instagram from "./element/Instagram";

const ImageBox = styled.div`
  & img {
    max-width: 584px;
    width: 100%;
    height: auto;
  }
`;

const Market = () => {
  const lang = useRecoilValue(language);

  return (
    <Box width="100%">
      {/* 가상인간 시장규모 */}
      <Section sectionPadding="160px 15px">
        <>
          <Box mb="60px">
            <Text component="h2" type="title" color="#26d9c7">
              {lang === "ko" ? (
                <>가상인간 시장규모</>
              ) : (
                <>Ai Virtual Human Model Agency Services</>
              )}
            </Text>
          </Box>
          <HalfBox>
            <ImageBox>
              <img
                src="/image/market_section_01.png"
                alt="전세계 인플루언서 시장 규모"
              />
            </ImageBox>
            <Article>
              <Box width="100%">
                <Text color="#fff" fontSize="21px">
                  {lang === "ko" ? (
                    <>2025년 가상인간 인플루언서 시장규모 약 14조</>
                  ) : (
                    <>Is it hard to find the model of the image you want?</>
                  )}
                </Text>
              </Box>

              <Box mt="18px">
                <Text type="description" color="#fff" fontWeight="400">
                  {lang === "ko" ? (
                    <>
                      미국의 블룸버그통신 따르면 2025년에는 가상인간의
                      인플루언서 시장규모가 지금보다 6배정도가 커져 약 14조원
                      정도로 사람의 인플루언서 시장규모를 넘어서게 될 것이라고
                      발표를 하였습니다. <br />
                      <br />
                      또한 글로벌 시장조사업체 이머진리서치에 따르면 전 세계
                      가상인간 시장규모는 2030년에는 지금보다 50배가 넘는 약
                      659조 4750억원에 이를 것으로 전망하고 있습니다. <br />
                      <br />
                      미래의 새로운 블루오션 가상인간 시장의 빅뱅(BIG BANG)이
                      시작되었습니다. 해외의 가상인간 인플루언서들은 패션모델,
                      광고모델, 가수등으로 활동영역을 넓혀가면서 가상인간 시장이
                      고속 성장하고 있습니다.
                    </>
                  ) : (
                    <>
                      A video featuring an Ai virtual human with a similarity of
                      98% to a human becomes a big issue and is a great help in
                      publicity.
                    </>
                  )}
                </Text>
              </Box>
            </Article>
          </HalfBox>
        </>
      </Section>

      {/* 해외 가상인간 활용 수익 사례 */}
      <Section color="sub" id="ludomagalu" sectionPadding="160px 15px">
        <>
          <Box mb="60px">
            <Text component="h2" type="title" color="#26d9c7">
              {lang === "ko" ? (
                <>해외 가상인간 활용 수익 사례</>
              ) : (
                <>Ai Virtual Human Video Production Service</>
              )}
            </Text>
          </Box>
          <Box mb="70px">
            <Text component="strong" type="title" color="#fff">
              {lang === "ko" ? (
                <>루 두 마갈루(LU DO MAGALU) 가상인간</>
              ) : (
                <>Ai Virtual Human Video Production Service</>
              )}
            </Text>
            <Box mt="8px">
              <Text fontSize="24px" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 루 두 마갈루 가상인간 쇼핑몰 매출 : 연간 약 6000억원</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBox>
            <Instagram
              title={
                lang === "ko" ? "루 두 마갈루(Lu do Magalu)" : "Lu do Magalu"
              }
              name="@magazineluiza"
              image="/image/thumbnail_01.png"
              follower="6M"
              income="10,000$ ~ 17,000$"
              description={
                lang === "ko"
                  ? "브라질 가전 제품 최대 유통업체 Magazine Luiza에서 만든 가상인간으로 제품 리뷰나 언박싱 비디오, 제품 사용 시범등의 다양한 동영상을 올리면서 큰 이슈가 되어 가상인간 Lu do Magalu 쇼핑몰 연간 매출이 5억$가 넘는다."
                  : "It is a virtual human made by Magazine Luiza, the largest distributor of Brazilian home appliances, and has become a big issue by posting various videos such as product reviews, unboxing videos, and product use demonstrations, with annual sales of virtual human Ludo Magalu shopping mall exceeding $500 million."
              }
            />
            <ImageBox>
              <img
                src="/image/technology_01.png"
                alt="Ai가상인간이 출연하는 영상"
              />
            </ImageBox>
          </HalfBox>
        </>
      </Section>

      {/* 릴 미켈라(LIL MIQUELA) 가상인간 */}
      <Section id="ludomagalu" sectionPadding="160px 15px">
        <>
          <Box mb="60px">
            <Text component="strong" type="title" color="#fff">
              {lang === "ko" ? (
                <>릴 미켈라(LIL MIQUELA) 가상인간</>
              ) : (
                <>Ai Virtual Human Video Production Service</>
              )}
            </Text>
            <Box mt="8px">
              <Text fontSize="24px" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 200억원</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBox>
            <Instagram
              title={lang === "ko" ? "릴 미켈라(Lil miquela)" : "Lil miquela"}
              name="@lilmiquela"
              image="/image/thumbnail_02.png"
              follower="3M"
              income="6,000$ ~ 10,000$"
              activity="캘빈클라인/샤넬/프라다/
              디올 등 유명 브랜드 모델로 활동"
              description={
                lang === "ko"
                  ? "브러드의 총괄 책임자 트레버 맥페드리스(Trevor Mc Fedrise)는 회사를 창립한 후 세상의 주목을 끌기 위해 미켈라 프로젝트를 기획했으며, 릴미켈라가 CGI로 만든 가상의 인물임이 알려진 후에도 그녀의 '핫'한 라이프스타일은 대중들의 뜨거운 관심을 받았다."
                  : "It is a virtual human made by Magazine Luiza, the largest distributor of Brazilian home appliances, and has become a big issue by posting various videos such as product reviews, unboxing videos, and product use demonstrations, with annual sales of virtual human Ludo Magalu shopping mall exceeding $500 million."
              }
            />
            <ImageBox>
              <img
                src="/image/technology_02.png"
                alt="Ai가상인간이 출연하는 영상"
              />
            </ImageBox>
          </HalfBox>
        </>
      </Section>

      {/* 슈두(Shudu) 가상인간 */}
      <Section color="sub" id="ludomagalu" sectionPadding="160px 15px">
        <>
          <Box mb="60px">
            <Text component="strong" type="title" color="#fff">
              {lang === "ko" ? (
                <>슈두(Shudu) 가상인간</>
              ) : (
                <>Ai Virtual Human Video Production Service</>
              )}
            </Text>
            <Box mt="8px">
              <Text fontSize="24px" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 70억원</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBox>
            <Instagram
              title={lang === "ko" ? "슈두(Shudu)" : "Shudu"}
              name="@shudu.gram"
              image="/image/thumbnail_03.png"
              follower="237M"
              income="3,000$ ~ 5,000$"
              activity="랑방/ 살바토레 페라가모/
              삼성전자 등 유명 브랜드 모델로 활동"
              description={
                lang === "ko"
                  ? "세계 최초 디지털 영국 슈퍼모델 '슈두'는 여러 명품 브랜드 '랑방', '살바토레 페라가모' 등과 협업했다. 2020년에 삼성전자 'Z 플립' 모델로 발탁되었고 최근 메타버스 플랫폼 '제페토'에서 진행한 ‘크리스티앙 루부탱’ 패션쇼에서 모델로 등장해 주목을 받았다."
                  : "It is a virtual human made by Magazine Luiza, the largest distributor of Brazilian home appliances, and has become a big issue by posting various videos such as product reviews, unboxing videos, and product use demonstrations, with annual sales of virtual human Ludo Magalu shopping mall exceeding $500 million."
              }
            />
            <ImageBox>
              <img
                src="/image/technology_03.png"
                alt="Ai가상인간이 출연하는 영상"
              />
            </ImageBox>
          </HalfBox>
        </>
      </Section>

      {/* 이마(imma) 가상인간 */}
      <Section id="ludomagalu" sectionPadding="160px 15px">
        <>
          <Box mb="60px">
            <Text component="strong" type="title" color="#fff">
              {lang === "ko" ? (
                <>이마(imma) 가상인간</>
              ) : (
                <>Ai Virtual Human Video Production Service</>
              )}
            </Text>
            <Box mt="8px">
              <Text fontSize="24px" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 50억원</>
                ) : (
                  <>Ai Virtual Human Video Production Service</>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBox>
            <Instagram
              title={lang === "ko" ? "이마(Imma)" : "Imma"}
              name="@imma.gram"
              image="/image/thumbnail_04.png"
              follower="404M"
              income="2,000$ ~ 4,000$"
              activity="이케아/ 아마존/ 포르쉐 등
              기업 모델로 활동"
              description={
                lang === "ko"
                  ? "분홍색 단발머리의 가상 모델 '이마(Imma)'는 일본 에서 핫한 존재로 급부상 했다. 일본 3D 이미징 스 타트업 'AWW'가 지난 2019년 선보인 가상인간 '이마'는 글로벌 가구회사 이케아는 일본 동경의 하라주 쿠 매장을 런칭하면서 모델로 등장해 화제를 불러 일으켰다."
                  : "It is a virtual human made by Magazine Luiza, the largest distributor of Brazilian home appliances, and has become a big issue by posting various videos such as product reviews, unboxing videos, and product use demonstrations, with annual sales of virtual human Ludo Magalu shopping mall exceeding $500 million."
              }
            />
            <ImageBox>
              <img
                src="/image/technology_04.png"
                alt="Ai가상인간이 출연하는 영상"
              />
            </ImageBox>
          </HalfBox>
        </>
      </Section>
    </Box>
  );
};

export default Market;
