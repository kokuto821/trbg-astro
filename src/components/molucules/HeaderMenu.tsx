import type { FC } from "react";

export const HeaderMenu: FC = () => {
  return (
    <>
      <nav className="header__nav nav" id="js-nav">
        <ul className="nav__items nav-items">
          <li className="nav-items__item">
            <a className="nav-items__item--a">メニュー1</a>
          </li>
          <li className="nav-items__item">
            <a className="nav-items__item--a">メニュー2</a>
          </li>
          <li className="nav-items__item">
            <a className="nav-items__item--a">メニュー3</a>
          </li>
          <li className="nav-items__item">
            <a className="nav-items__item--a">メニュー4</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
