import { POSTS_ALL_URL } from "../constants/urls";
import type { WordPressPost } from "../types/type";

export const fetchAllPosts = async () => {
  const postsResponse = await fetch(POSTS_ALL_URL);
  const posts: WordPressPost[] = await postsResponse.json();
  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return paths;
};
