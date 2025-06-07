import type { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__inner" id="header">
        <h1 className="header__title header-title">
          <a href="<?php echo esc_url(home_url()); ?>" target="_blank">
            <img
              src="https://code-jump.com/demo/html/blog/img/logo.svg"
              alt="<?php bloginfo('name'); ?>"
            />
          </a>
        </h1>
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
      </div>
      <button
        className="header__hamburger hamburger"
        id="js-hamburger"
        title="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
