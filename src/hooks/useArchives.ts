import { useState, useEffect } from 'react';
import { POSTS_ALL_URL } from '../constants/urls';

type ArchiveItem = {
  year: number;
  month: number;
  count: number;
  link: string;
  name: string; // "2023年6月"形式
};

type Props = {
  limit: number; // 取得するアーカイブの数
};

type ReturnType = {
  archives: ArchiveItem[];
  loading: boolean;
  error: string | null;
};

export const useArchives = ({ limit }: Props): ReturnType => {
  const [archives, setArchives] = useState<ArchiveItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchArchives = async () => {
      try {
        const response = await fetch(POSTS_ALL_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        const archivesMap = new Map<string, ArchiveItem>();

        // 投稿を年月ごとに集計
        posts.forEach((post: any) => {
          const postDate = new Date(post.date);
          const year = postDate.getFullYear();
          const month = postDate.getMonth() + 1;
          const key = `${year}-${String(month).padStart(2, '0')}`;

          const existingItem = archivesMap.get(key);
          if (existingItem) {
            existingItem.count += 1;
          } else {
            archivesMap.set(key, {
              year,
              month,
              count: 1,
              link: `/archive/${year}/${String(month).padStart(2, '0')}/`,
              name: `${year}年${month}月`,
            });
          }
        });

        // 新しい順にソートして制限を適用
        const sortedArchives = Array.from(archivesMap.values())
          .sort((a, b) => b.year - a.year || b.month - a.month)
          .slice(0, limit);

        setArchives(sortedArchives);
        setLoading(false);
        setError(null);
      } catch (error) {
        setArchives([]);
        setLoading(false);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };

    fetchArchives();

    return () => {
      abortController.abort();
    };
  }, [limit]);

  return { archives, loading, error };
};
