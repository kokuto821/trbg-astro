import { styled } from "@mui/material";
import { useAtomValue } from "jotai";
import type { FC } from "react";
import { isMobileAtom } from "../../store/mobileAtom";
import { color } from "../../constants/colors";

export const HeaderMenu: FC = () => {
  const isMobile = useAtomValue(isMobileAtom);
  const HeaderNaviMenuWrapper = styled("nav")({
    position: "static",
    transform: "initial",
    backgroundColor: "inherit",
    height: "inherit",
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
    ...(isMobile
      ? {
          position: "absolute",
          right: "0",
          left: "0",
          top: "0",
          width: "100%",
          height: "100vh",
          transform: "translateX(0%)",
          backgroundColor: "#ffffff",
        }
      : {}),
  });
  const HeaderNavUnorderedList = styled("ul")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    flexDirection: "column",
    display: "flex",
    ...(isMobile
      ? {
          alignItems: "center",
          height: "40vh",
          width: "100%",
        }
      : {
          position: "inherit",
          width: "100%",
          alignItems: "center",
          height: "initial",
          justifyContent: "space-between",
          flexDirection: "row",
          top: 0,
          left: 0,
          transform: "translate(0, 0)",
        }),
  });
  const HeaderNavListItem = styled("li")({
    display: "flex",
    flexDirection: "column",

    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    WebkitUserSelect: "none",
    userSelect: "none",
    zIndex: 1,
    "&::before": {
      background: color.lightBlack,
      content: '""',
      width: "100%",
      height: "2.5px",
      position: "absolute",
      left: "0",
      bottom: "0",
      margin: "auto",
      transformOrigin: "center top",
      transform: "scale(0, 1)",
      transition: "transform 0.2s",
    },
    ...(isMobile
      ? {
          height: "fit-content",
          padding: "0",
          borderBottom: `0.5px solid ${color.normalGray}`,
        }
      : {
          borderBottom: "transparent 2.5px solid",
          height: "100%",
          padding: "0 0.5rem",
          alignItems: "center",

          "&:hover::before": {
            transformOrigin: "center top",
            transform: "scale(1, 1)",
          },
        }),
  });
  const HeaderNavListAnchor = styled("a")({
    color: color.lightBlack,
    backgroundColor: color.white,
    width: "100%",
    display: "block",
    textAlign: "left",
    ...(isMobile
      ? {
          padding: "1rem 2rem",
          fontSize: "0.95rem",
          "&:last-child": {
            borderBottom: `1px solid ${color.gray}`,
          },
        }
      : {
          marginBottom: "0",
          textAlign: "center",
          padding: "0.5rem 1rem",
          backgroundColor: "transparent",
        }),
  });
  return (
    <>
      <HeaderNaviMenuWrapper className="header_nav nav" id="js-nav">
        <HeaderNavUnorderedList className="nav__items nav-items">
          <HeaderNavListItem className="nav-items__item">
            <HeaderNavListAnchor className="nav-items__item--a">
              メニュー1
            </HeaderNavListAnchor>
          </HeaderNavListItem>
          <HeaderNavListItem className="nav-items__item">
            <HeaderNavListAnchor className="nav-items__item--a">
              メニュー2
            </HeaderNavListAnchor>
          </HeaderNavListItem>
          <HeaderNavListItem className="nav-items__item">
            <HeaderNavListAnchor className="nav-items__item--a">
              メニュー3
            </HeaderNavListAnchor>
          </HeaderNavListItem>
          <HeaderNavListItem className="nav-items__item">
            <HeaderNavListAnchor className="nav-items__item--a">
              メニュー4
            </HeaderNavListAnchor>
          </HeaderNavListItem>
        </HeaderNavUnorderedList>
      </HeaderNaviMenuWrapper>
    </>
  );
};
