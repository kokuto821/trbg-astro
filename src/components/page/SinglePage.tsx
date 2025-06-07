import type { WordPressPostDetail } from "../../types/type";

type Props = {
  post: WordPressPostDetail;
};

export const SinglePage = ({ post }: Props) => {
  console.log("SinglePage post:", post);
  if (!post || !post.title || !post.content.rendered) {
    return <div>記事が見つかりませんでした。</div>;
  }
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
