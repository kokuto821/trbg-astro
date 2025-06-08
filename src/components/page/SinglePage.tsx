import { POSTS_URL, EMBED } from "../../constants/urls";
import type { WordPressPostDetail } from "../../types/type";

type Props = {
  postId: number;
};

export const SinglePage = async ({ postId }: Props) => {
  const res = await fetch(`${POSTS_URL}${postId}${EMBED}`);
  console.log("SinglePage fetch", `${POSTS_URL}${postId}${EMBED}`);
  console.log("SinglePage", res);
  if (!res.ok) {
    throw new Error(`記事データの取得に失敗しました: ${res.status}`);
  }
  const post: WordPressPostDetail = await res.json();
  return (
    <div className="container max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};
