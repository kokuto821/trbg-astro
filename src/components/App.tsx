import { useCallback, useEffect, useState } from "react";
import type { WordPressPost } from "../types/type";
import { useAtom, useSetAtom } from "jotai";
import {
  fetchDataAtom,
  isLoadingAtom,
  postsAtom,
  tagsAtom,
} from "../store/postManageAtoms";

export const App = () => {
  const [posts] = useAtom(postsAtom);
  const [tags] = useAtom(tagsAtom);
  const [isLoading] = useAtom(isLoadingAtom);
  const setFetchData = useSetAtom(fetchDataAtom);
  const [filterPosts, setFilterPosts] = useState<WordPressPost[]>([]);

  /** 投稿情報とタグ情報を取得する */
  useEffect(() => {
    setFetchData();
  }, []);

  const handleFilter = useCallback(
    (id: number) => {
      const filteredPosts = posts.filter((post) => post.tags.includes(id));
      setFilterPosts(filteredPosts);
    },
    [posts]
  );

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
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
                <a href={`/${post.id}`} className="text-blue-500">
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
