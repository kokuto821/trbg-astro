import { styled } from "@mui/material";

type Props = {
  handleHamburgerClick: () => void;
};

export const HumbergerMenuButton = ({ handleHamburgerClick }: Props) => {
  const HeaderHamburger = styled("button")({
    width: "48px",
    height: "100%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    zIndex: 9999,
  });
  return (
    <>
      <HeaderHamburger
        className="header__hamburger hamburger"
        id="js-hamburger"
        onClick={handleHamburgerClick}
        title="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </HeaderHamburger>
    </>
  );
};
