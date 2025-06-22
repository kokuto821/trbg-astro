import { atom } from 'jotai';
import type { WordPressPostDetail } from '../types/type';

export const postsAtom = atom<WordPressPostDetail[]>([]);
