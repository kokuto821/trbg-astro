import type { WordPressPost } from "../../types/type";

type Props = {
  post: WordPressPost;
};

export const PerPostPage = ({ post }: Props) => {
  return (
    <div className="container max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered} </h1>
      <div
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};
