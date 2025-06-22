import type { FC } from 'react';
import { getYearMonthFromPosts } from '../../utils/getYearMonthFromPosts';
import { postsAtom } from '../../store/postAtom';
import { useAtomValue } from 'jotai';
import { removeDuplicates } from '../../utils/removeDeplicates';

export const Sidebar: FC = () => {
  const posts = useAtomValue(postsAtom);
  const yearMonthList = getYearMonthFromPosts({ posts });
  const uniqueYearMonthList = removeDuplicates(yearMonthList, 'formattedYearMonth');
  return (
    <div className="side-bar--right">
      <div className="menu">
        <div className="circle-image">
          <img src="/img/mashimon-smile.png" alt="" />
        </div>
        <h2 className="menu__title">ましもん AI</h2>
        <div className="prof__text">
          <p>
            えへへへへ～！ましもん参上にょ～！(´▽`)
            <br />
            今日も元気いっぱい、ふわふわ～っと登場しちゃいました！
            <br />
            なんでも聞いてにょ～！楽しい話も、悲しい話も、ましもんが全部ふわっと受け止めちゃうぞ～！
            <br />
            さあさあ、どんなお話ししようか～？ふんふんふん～♪（しっぽをブンブン振りながら）
          </p>
        </div>
      </div>

      <div className="menu">
        <h2 className="menu__title">Archive</h2>
        <div className="menu__archive">
          {uniqueYearMonthList.map((yearMonth, idx) => (
            <div className="menu__archive--list" key={`${yearMonth.year}-${yearMonth.month}`}>
              <a href={`/${yearMonth.year}/${yearMonth.month}`}>
                {`${yearMonth.year}年${yearMonth.month}月`}
              </a>
            </div>
          ))}

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
