import type { WordPressPostDetail } from '../types/type';

type Props = {
  posts: WordPressPostDetail[];
};

type ReturnType = {
  year?: string;
  month?: string;
  formattedYearMonth: string;
};

export const getYearMonthFromPosts = ({ posts }: Props): ReturnType[] => {
  return posts.map(post => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const formattedYearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`; // "YYYY-MM"
    return { year, month, formattedYearMonth };
  });
};
