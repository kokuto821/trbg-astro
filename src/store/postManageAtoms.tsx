import { atom } from "jotai";
import type { WordPressPost, WordPressTag } from "../types/type";
import axios from "axios";
import { POSTS_ALL_URL, TAGS_URL } from "../constants/urls";

export const postsAtom = atom<WordPressPost[]>([]);
export const tagsAtom = atom<WordPressTag[]>([]);
export const isLoadingAtom = atom(true);

// データ取得用のatom
export const fetchDataAtom = atom(null, async (get, set) => {
  const [postsResponse, tagsResponse] = await Promise.all([
    axios.get(POSTS_ALL_URL),
    axios.get(TAGS_URL),
  ]);
  set(postsAtom, postsResponse.data);
  set(tagsAtom, tagsResponse.data);
  set(isLoadingAtom, false);
});
