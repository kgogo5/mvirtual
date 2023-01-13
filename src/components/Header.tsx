import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useRecoilState } from "recoil";
import { language } from "../atom";

import lodash from "lodash";

interface Iplatform {
  isMobile: string | undefined;
}
interface ToggleTypeInterface {
  type: string;
  key: string;
}

const HeaderWrap = styled.header`
  && {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #000;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    z-index: 1000;
  }

  &.mobile {
    padding: 0.5rem 1rem;
  }
`;

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 32px 20px 32px 183px;
  max-width: 1164px;

  @media screen and (max-width: 768px) {
    padding: 32px 0 32px 183px;
    max-width: auto;
  }
`;

// 로고 정의
const LogoArea = styled(Box)`
  position: absolute;
  top: 50%;
  left: 20px;
  width: 143px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);

  &.active .inner {
    width: 143px;
    height: 23px;
    &:hover {
      transform: rotate3d(1, 1, 1, 3deg);
    }
  }

  &.mobile .inner {
    width: 143px;
    height: 23px;
  }

  .inner {
    width: 143px;
    height: 23px;
    overflow: hidden;
    transition: 0.3s;
  }

  & img {
    max-width: 100%;
  }
`;

const LinkList = styled(Link)`
  color: #fff;
  text-shadow: 0px 0px 4px black;
  transition: 0.5s;
  & + & {
    margin-left: 1rem;
  }
  &.active {
    color: #26d9c7;
  }
`;

const MenuList = styled.nav`
  display: flex;
  justify-content: center;
  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 10px 4vw;

    @media screen and (min-width: 1921px) {
      gap: 10px 72px;
    }

    & a {
      font-size: 15px;
    }
  }
`;

const MobileMenuArea = styled.nav`
  position: absolute;
  right: 10px;
  top: 10px;
  bottom: 0;
`;

const MobileMenuButton = styled(Button)`
  && {
    min-width: auto;
  }
  & svg {
    width: 1.5em;
    height: 1.5em;

    & path {
      fill: #fff;
    }
  }
`;

const MobileMenuList = styled(Box)`
  display: flex;
  padding: 0;
  width: 180px;
  justify-content: center;

  & ul {
    width: 100%;
  }

  & li span {
    font-size: 24px;
    color: #fff;
  }

  & .MuiListItem-button {
    text-align: center;
  }
`;

const LanguageStyle = styled.div`
  display: flex;
  align-items: center;

  & button {
    margin: 0 10px;
    padding: 0;
    min-width: auto;
    line-height: inherit;
  }
  & span {
    color: #b9b9b9;
    font-weight: 300;
    font-size: 15px;
  }

  & .active span {
    font-weight: bold;
  }
`;

const MobileLanguageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  && span {
    font-size: 15px;
  }

  & .active span {
    font-weight: bold;
  }
`;

const _ = ({ isMobile }: Iplatform) => {
  const navigator = useNavigate();
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const { t } = useTranslation();
  const menuLists: any = t("header", { returnObjects: true });
  // const setLang = useSetRecoilState(language);
  const [lang, setLang] = useRecoilState(language);

  const onChangeLang = (lang: "ko" | "en") => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  // variable
  const toggleDrawer = (event: ToggleTypeInterface) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu(!mobileMenu);
  };

  const mobileLinkClick = (address: string) => {
    navigator(address);
    setMobileMenu(false);
  };

  return (
    <>
      <HeaderWrap className={isMobile}>
        <Inner>
          <LogoArea className={clsx("active", isMobile)}>
            <Box className="inner">
              <LinkList to="/">
                <img src="/image/logo.png" alt="Mvirtual Logo" />
              </LinkList>
            </Box>
          </LogoArea>

          {isMobile === "mobile" ? (
            <>
              <MobileMenuArea>
                <MobileMenuButton onClick={(e: any) => toggleDrawer(e)}>
                  <Menu />
                </MobileMenuButton>
              </MobileMenuArea>

              <Drawer
                anchor="right"
                open={mobileMenu}
                onClose={(e: any) => toggleDrawer(e)}
              >
                <MobileMenuList>
                  <List>
                    {menuLists.map((item: any, index: number) => (
                      <Box component="li" key={index}>
                        <ListItem
                          button
                          onClick={() => {
                            mobileLinkClick(
                              String(t(`header.${index}.address`))
                            );
                            setMobileMenu(false);
                          }}
                        >
                          <ListItemText
                            primary={String(t(`header.${index}.title`))}
                          />
                        </ListItem>
                      </Box>
                    ))}
                    <Box component="li">
                      <MobileLanguageStyle>
                        <Box>
                          <Button
                            className={i18n.language === "ko" ? "active" : ""}
                            onClick={() => {
                              onChangeLang("ko");
                            }}
                          >
                            KOR
                          </Button>
                        </Box>
                        <span>|</span>
                        <Box>
                          <Button
                            className={i18n.language === "en" ? "active" : ""}
                            onClick={() => {
                              onChangeLang("en");
                            }}
                          >
                            ENG
                          </Button>
                        </Box>
                      </MobileLanguageStyle>
                    </Box>
                  </List>
                </MobileMenuList>
              </Drawer>
            </>
          ) : (
            <MenuList>
              <Box component="ul">
                {menuLists.map((item: any, index: number) => (
                  <Box component="li" key={index}>
                    <>
                      <LinkList
                        className={
                          lodash.findIndex([item], {
                            address: location.pathname,
                          }) !== -1
                            ? "active"
                            : ""
                        }
                        to={String(t(`header.${index}.address`))}
                      >
                        {t(`header.${index}.title`)}
                      </LinkList>
                    </>
                  </Box>
                ))}
                <Box component="li">
                  <LanguageStyle>
                    <Box>
                      <Button
                        className={lang === "ko" ? "active" : ""}
                        onClick={() => {
                          onChangeLang("ko");
                        }}
                      >
                        KOR
                      </Button>
                    </Box>
                    <span>|</span>
                    <Box>
                      <Button
                        className={lang === "en" ? "active" : ""}
                        onClick={() => {
                          onChangeLang("en");
                        }}
                      >
                        ENG
                      </Button>
                    </Box>
                  </LanguageStyle>
                </Box>
              </Box>
            </MenuList>
          )}
        </Inner>
      </HeaderWrap>
    </>
  );
};

export default _;
