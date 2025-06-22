import { EMBED, POSTS_URL } from '../constants/urls';
import type { WordPressPostDetail } from '../types/type';

type Props = {
  url: string | null;
};

export const fetchAllPosts = async (
  { url }: Props = { url: null }
): Promise<WordPressPostDetail[]> => {
  const fetchUrl = url ? url : `${POSTS_URL}${EMBED}`;
  if (!fetchUrl) {
    return fetch(`${POSTS_URL}${EMBED}`).then(res => res.json());
  }
  const postsResponse = await fetch(fetchUrl);
  return postsResponse.json();
};
