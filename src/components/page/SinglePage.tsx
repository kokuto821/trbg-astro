import { POSTS_URL, EMBED } from '../../constants/urls';
import type { WordPressPostDetail } from '../../types/type';
import { formatDateToYMD } from '../../utils/formatDateToYMD';
import { getCategoryName } from '../../utils/getCategoryName';
import { PerPageWrapper } from '../organisms/PerPageWrapper';

type Props = {
  postId: number;
};

export const SinglePage = async ({ postId }: Props) => {
  const res = await fetch(`${POSTS_URL}${postId}${EMBED}`);
  console.log('SinglePage fetch', `${POSTS_URL}${postId}${EMBED}`);
  console.log('SinglePage', res);
  if (!res.ok) {
    throw new Error(`記事データの取得に失敗しました: ${res.status}`);
  }
  const post: WordPressPostDetail = await res.json();
  return (
    <PerPageWrapper>
      <article id={`post${post.id}`}>
        <div className="main__title">
          <h2 className="main__title--text">{post.title.rendered}</h2>

          <ul className="meta">
            <li className="meta__day">
              <a href="">{formatDateToYMD(post.date)}</a>
            </li>
            <li className="meta__category">{getCategoryName(post.categories[0])}</li>
          </ul>
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </article>
    </PerPageWrapper>
  );
};
