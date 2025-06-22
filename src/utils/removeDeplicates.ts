// 配列内のオブジェクトから重複を削除する魔法の関数〜！
export const removeDuplicates = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false; // 2回目以降は無視！
    }
    seen.add(value);
    return true; // 初めて見た値だけ通過〜
  });
};
