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

const HalfBoxMobile = styled(HalfBox)`
  gap: 40px;
  @media screen and (max-width: 1080px) {
    gap: 20px;
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
                <>Market size of Virtual Human</>
              )}
            </Text>
          </Box>
          <HalfBoxMobile>
            <ImageBox>
              <img
                src={
                  lang === "ko"
                    ? "/image/market_section_01.png"
                    : "/image/market_section_en_01.png"
                }
                alt="Market size of Virtual Human"
              />
            </ImageBox>
            <Article>
              <Box width="100%">
                <Text color="#fff" fontSize="21px">
                  {lang === "ko" ? (
                    <>2025년 가상인간 인플루언서 시장규모 약 14조</>
                  ) : (
                    <>
                      In 2025, the virtual human influencer market will reach
                      $11 billion.
                    </>
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
                      발표를 하였습니다.
                      <br />
                      <br />
                      또한 글로벌 시장조사업체 이머진리서치에 따르면 전 세계
                      가상인간 시장규모는 2030년에는 지금보다 50배가 넘는 약
                      659조 4750억원에 이를 것으로 전망하고 있습니다.
                      <br />
                      <br />
                      미래의 새로운 블루오션 가상인간 시장의 빅뱅(BIG BANG)이
                      시작되었습니다. 해외의 가상인간 인플루언서들은 패션모델,
                      광고모델, 가수등으로 활동영역을 넓혀가면서 가상인간 시장이
                      고속 성장하고 있습니다.
                    </>
                  ) : (
                    <>
                      According to Bloomberg News in the United States, the size
                      of the virtual human influencer market will be six times
                      larger than now. In 2025, reaching about $11 billion, it
                      will exceed the size of the human influencer market.
                      <br />
                      <br />
                      In addition, according to Emergen Research, a global
                      market research company, the global virtual human market
                      is expected to reach about $52 billion by 2030, more than
                      50 times higher than now.
                      <br />
                      <br />
                      The Big Bang of the Virtual Human Market, a new blue ocean
                      of the future, has begun. The virtual human market is
                      growing rapidly as overseas virtual human influencers
                      expand their activities to fashion models, advertising
                      models, and singers.
                    </>
                  )}
                </Text>
              </Box>
            </Article>
          </HalfBoxMobile>
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
                <>References of the profitable virtual human</>
              )}
            </Text>
          </Box>
          <Box mb="70px">
            <Text component="strong" type="title" color="#fff">
              {lang === "ko" ? (
                <>루 두 마갈루(LU DO MAGALU) 가상인간</>
              ) : (
                <>Virtual human, Lu do Magalu</>
              )}
            </Text>
            <Box mt="8px">
              <Text type="sub" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 루 두 마갈루 가상인간 쇼핑몰 매출 : 연간 약 6000억원</>
                ) : (
                  <>
                    - Shopping mall sales of Lu do Magalu: approximately $5
                    billion per year.
                  </>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBoxMobile>
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
                  : "Lu Do Magalu is virtual human made by the largest Brazilian distribution enterprise for home appliances. Uploading products reviews and unboxing videos, usage demonstration of products, Lu Do Magalu have drawn amazing attention and its shopping mall have earned over $500 million yearly."
              }
            />
            <ImageBox>
              <img src="/image/technology_01.png" alt="Lu do Magalu" />
            </ImageBox>
          </HalfBoxMobile>
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
                <>Virtual human, Lil Miquela</>
              )}
            </Text>
            <Box mt="8px">
              <Text type="sub" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 200억원</>
                ) : (
                  <>
                    - Revenue from advertising model activities: approximately
                    $16 million per year
                  </>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBoxMobile>
            <Instagram
              title={lang === "ko" ? "릴 미켈라(Lil miquela)" : "Lil Miquela"}
              name="@lilmiquela"
              image="/image/thumbnail_02.png"
              follower="3M"
              income="6,000$ ~ 10,000$"
              activity={
                lang === "ko"
                  ? "캘빈클라인/샤넬/프라다/ 디올 등 유명 브랜드 모델로 활동"
                  : "Calvin Klein/Chanel/Prada/Dior and other famous brands."
              }
              description={
                lang === "ko"
                  ? "브러드의 총괄 책임자 트레버 맥페드리스(Trevor Mc Fedrise)는 회사를 창립한 후 세상의 주목을 끌기 위해 미켈라 프로젝트를 기획했으며, 릴미켈라가 CGI로 만든 가상의 인물임이 알려진 후에도 그녀의 '핫'한 라이프스타일은 대중들의 뜨거운 관심을 받았다."
                  : "Chief officer of Brud, Travor McFedries made the business planning for Miquela project to get world wide attention. After Lil Miquela was launched as a virtual figure made by CGI, her luxurious lifestyle has drown lots of attentions."
              }
            />
            <ImageBox>
              <img src="/image/technology_02.png" alt="Lil Miquela" />
            </ImageBox>
          </HalfBoxMobile>
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
                <>Virtual Human, Shudu</>
              )}
            </Text>
            <Box mt="8px">
              <Text type="sub" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 70억원</>
                ) : (
                  <>
                    - Revenue from advertising model activities: approximately
                    $6 million per year
                  </>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBoxMobile>
            <Instagram
              title={lang === "ko" ? "슈두(Shudu)" : "Shudu"}
              name="@shudu.gram"
              image="/image/thumbnail_03.png"
              follower="237K"
              income="3,000$ ~ 5,000$"
              activity={
                lang === "ko"
                  ? "랑방/ 살바토레 페라가모/삼성전자 등 유명 브랜드 모델로 활동"
                  : "Lanvin/Salvatore Ferragamo/Samsung and other famous brands."
              }
              description={
                lang === "ko"
                  ? "세계 최초 디지털 영국 슈퍼모델 '슈두'는 여러 명품 브랜드 '랑방', '살바토레 페라가모' 등과 협업했다. 2020년에 삼성전자 'Z 플립' 모델로 발탁되었고 최근 메타버스 플랫폼 '제페토'에서 진행한 ‘크리스티앙 루부탱’ 패션쇼에서 모델로 등장해 주목을 받았다."
                  : "The world’s first digital supermodel of the United Kingdom, Shudu collaborated with Lanvin, Salvatore Ferragamo and other brand-name corporations. In 2020, it became the model of ‘Z flip’ of Samsung and recently, it drew the attention being the model of fashion show of ‘Christian Louboutin’ in Metaverse platform, ‘Zepeto’."
              }
            />
            <ImageBox>
              <img src="/image/technology_03.png" alt="Shudu" />
            </ImageBox>
          </HalfBoxMobile>
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
                <>Virtual human, imam</>
              )}
            </Text>
            <Box mt="8px">
              <Text type="sub" color="#fff" fontWeight="400">
                {lang === "ko" ? (
                  <>- 광고 모델 활동 수익 : 연간 약 50억원</>
                ) : (
                  <>
                    - Revenue from advertising model activities: approximately
                    $4 million per year
                  </>
                )}
              </Text>
            </Box>
          </Box>
          <HalfBoxMobile>
            <Instagram
              title={lang === "ko" ? "이마(Imma)" : "IMMA"}
              name="@imma.gram"
              image="/image/thumbnail_04.png"
              follower="404K"
              income="2,000$ ~ 4,000$"
              activity={
                lang === "ko"
                  ? "이케아/ 아마존/ 포르쉐 등 기업 모델로 활동"
                  : "Ikea/Amazon/Porsche and other corporations."
              }
              description={
                lang === "ko"
                  ? "분홍색 단발머리의 가상 모델 '이마(Imma)'는 일본 에서 핫한 존재로 급부상 했다. 일본 3D 이미징 스 타트업 'AWW'가 지난 2019년 선보인 가상인간 '이마'는 글로벌 가구회사 이케아는 일본 동경의 하라주 쿠 매장을 런칭하면서 모델로 등장해 화제를 불러 일으켰다."
                  : "Virtual human model with pink bobbed hair, IMMA, has earned huge spotlight in Japan. IMMA was shown by AMW, emerging Japanese 3D start-up, when it appeared as a model for IKEA, global furniture company, when IKEA launched a store in Harajuku of Tokyo."
              }
            />
            <ImageBox>
              <img src="/image/technology_04.png" alt="IMMA" />
            </ImageBox>
          </HalfBoxMobile>
        </>
      </Section>
    </Box>
  );
};

export default Market;
