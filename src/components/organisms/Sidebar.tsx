import type { FC } from 'react';
import { POSTS_ALL_URL } from '../../constants/urls';

export const Sidebar: FC = () => {
  return (
    <div className="side-bar--right">
      <div className="menu">
        <div className="circle-image">
          <img
            src="<?php echo esc_url(home_url()); ?>/wp-content/themes/trbg/assets/img/1711057371028.jpg"
            alt=""
          />
        </div>
        <h2 className="menu__title">Name Name</h2>
        <div className="prof__text">
          <p>
            プロフィールテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>

      <div className="menu">
        <h2 className="menu__title">Archive</h2>
        <div className="menu__archive">
          <div className="menu__archive--list">
            <a href={`${POSTS_ALL_URL}&after=2025-01-01T00:00:00&before=2025-12-31T23:59:59`}>
              2025年
            </a>
          </div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
          <div className="menu__archive--list">XXXX年XX月(XX)</div>
        </div>
      </div>
    </div>
  );
};
