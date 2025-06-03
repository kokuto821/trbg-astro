import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import type { WordPressPost, WordPressTag } from "../types/type";

export const App = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [tags, setTags] = useState<WordPressTag[]>([]);
  const [filterPosts, setFilterPosts] = useState<WordPressPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /** 投稿情報とタグ情報を取得する */
  useEffect(() => {
    const POSTS_URL =
      "https://kokutoweb.littlestar.jp/portfolio/trbg/wp-json/wp/v2/posts?per_page=100";
    const TAGS_URL =
      "https://kokutoweb.littlestar.jp/portfolio/trbg/wp-json/wp/v2/tags";
    Promise.all([axios.get(POSTS_URL), axios.get(TAGS_URL)]).then(
      ([postsResponse, tagsResponse]) => {
        setPosts(postsResponse.data);
        setTags(tagsResponse.data);
        setIsLoading(false);
        console.log("postsResponse", posts);
        console.log("tagsResponse", tags);
      }
    );
  }, []);

  const handleFilter = useCallback(
    (id: number) => {
      const filterPosts = posts.filter((post) => post.tags.includes(id));
      setFilterPosts(filterPosts);
    },
    [posts]
  );

  console.log("posts", posts);

  return (
    <>
      {isLoading ? null : (
        <div className="">
          <ul className="tag-list">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="tag-item"
                onClick={() => handleFilter(tag.id)}
              >
                {tag.name}
              </li>
            ))}
          </ul>
          <ul className="post-list">
            {filterPosts.map((post, i) => (
              <li key={i} className="post-item">
                <a href={post.link} className="text-blue-500">
                  {post.title.rendered}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
