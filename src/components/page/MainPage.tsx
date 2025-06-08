import { useState, useEffect } from "react";
import type { WordPressPostDetail } from "../../types/type";
import { fetchAllPosts } from "../../utils/fetchAllPosts";
import { formatDateToYMD } from "../../utils/formatDateToYMD";
import { GernateEyeCatch } from "../organisms/GenerateEyeChatch";
import { getCategoryName } from "../../utils/getCategoryName";
import { useGudgeDevice } from "../../hooks/useGudgeDevice";

export const Mainpage = () => {
  const [posts, setPosts] = useState<WordPressPostDetail[]>([]);

  useEffect(() => {
    fetchAllPosts().then(setPosts);
  }, []);
  return (
    <>
      <div className="space__header"></div>
      <div className="main">
        {posts.map((post, i) => (
          <div className="main__article">
            <div key={i} className="main__title">
              <h2 className="main__title--text">{post.title.rendered}</h2>
              <ul className="meta">
                <li className="meta__day">{formatDateToYMD(post.date)}</li>
                <li className="meta__category">
                  {post.categories.map(getCategoryName).join(", ")}
                </li>
              </ul>
            </div>
            <div className="eyecatch">
              {post.featured_media !== 0 ? (
                <a
                  href={`/${post.id}`}
                  title="View featured image"
                  className="main__article-link"
                >
                  <GernateEyeCatch featuredMediaId={post.featured_media} />
                </a>
              ) : (
                <img src="/img/no-image.png" alt="No image available" />
              )}
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt?.rendered ?? "",
                }}
              />
            </div>
            <div>
              <a
                href={`/${post.id}`}
                className="main__article-link"
                title="Read Full Article"
              >
                <span className="main__article-link--text">Read More</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
