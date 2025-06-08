export const getCategoryName = (id: number): string => {
  if (id === 1) return "未分類";
  if (id === 2) return "サンプル";
  return "その他";
};
