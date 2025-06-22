export const getCategoryName = (id: number): string => {
  if (id === 1) return '未分類';
  if (id === 2) return 'サンプル';
  if (id === 6) return 'ましもん';
  if (id === 7) return 'スプラトゥーン';
  return 'その他';
};
