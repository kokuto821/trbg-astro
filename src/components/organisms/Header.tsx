import { useEffect, useRef, useState, type FC } from "react";
import { HumbergerMenuButton } from "../molucules/HumbergerMenuButton";
import { useAtomValue } from "jotai";
import { isMobileAtom } from "../../store/mobileAtom";
import { HeaderMenu } from "../molucules/HeaderMenu";
import { useGudgeDevice } from "../../hooks/useGudgeDevice";

export const Header: FC = () => {
  const isMobile = useAtomValue(isMobileAtom);
  const [isOpen, setIsOpen] = useState(false);

  useGudgeDevice();

  useEffect(() => {
    console.log("isMobile", isMobile);
    console.log("isOpen changed:", isOpen);
    console.log("shouldShowMenu", !isMobile || isOpen);
  }, [isMobile, isOpen]);

  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
    console.log("handleHamburgerClick", isOpen);
  };

  // メニューの表示制御
  // モバイルの場合はisOpenがtrueのときのみメニューを表示
  const shouldShowMenu = !isMobile || isOpen;

  return (
    <header className="header">
      <div className="header__inner" id="header">
        <h1 className="header__title header-title">
          <a href="/" target="_blank">
            <img
              src="https://code-jump.com/demo/html/blog/img/logo.svg"
              alt="<?php bloginfo('name'); ?>"
            />
          </a>
        </h1>
        {shouldShowMenu ? <HeaderMenu /> : null}
        <HumbergerMenuButton handleHamburgerClick={handleHamburgerClick} />
      </div>
    </header>
  );
};
