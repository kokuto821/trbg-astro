import { EMBED, POSTS_URL } from '../constants/urls';
import type { WordPressPostDetail } from '../types/type';

export const fetchAllPosts = async (): Promise<WordPressPostDetail[]> => {
  const fetchUrl = `${POSTS_URL}${EMBED}`;
  if (!fetchUrl) {
    return fetch(`${POSTS_URL}${EMBED}`).then(res => res.json());
  }
  const postsResponse = await fetch(fetchUrl);
  return postsResponse.json();
};
