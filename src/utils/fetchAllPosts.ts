import { EMBED, POSTS_URL } from "../constants/urls";
import type { WordPressPostDetail } from "../types/type";

export const fetchAllPosts = async (): Promise<WordPressPostDetail[]> => {
  const postsResponse = await fetch(`${POSTS_URL}${EMBED}`);
  return postsResponse.json();
};
