import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="menu">
            <h2 className="menu__title">About</h2>
            <div className="post__title">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
            <div className="tetra-link">
              <a className="tetra-link__link" href="#">
                プロフィール詳細
              </a>
              <a className="tetra-link__link" href="#">
                お仕事の依頼
              </a>
              <a className="tetra-link__link" href="#">
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="menu">
            <h2 className="menu__title">Menu</h2>
            <div className="menu__archive">
              <div className="menu__archive--list">NEW</div>
              <div className="menu__archive--list">CATEGORY</div>
              <div className="menu__archive--list">COLUMN</div>
              <div className="menu__archive--list">SERIES</div>
              <div className="menu__archive--list">Q&A</div>
            </div>
          </div>
          <div className="menu">
            <h2 className="menu__title">Twitter</h2>
            <div className="menu__twitter">
              <a
                className="twitter-timeline"
                data-width="300"
                data-height="400"
                href="https://twitter.com/X?ref_src=twsrc%5Etfw"
              >
                Tweets by X
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>
          </div>
        </div>
        <div className="copyright">@Travel & Blog</div>
      </footer>
      <div className="space__footer"></div>
      <div className="page-top-button non-active">
        <a className="page-top-button__link">
          <button className="page-top-button__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="page-top-button__button--svg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
};
