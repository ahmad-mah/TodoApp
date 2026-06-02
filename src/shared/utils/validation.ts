export const isEmpty = (str: string) => str.trim() === '';

export const isTodoTextValid = (str: string) => {
  const trimmed = str.trim();
  return trimmed.length > 0 && trimmed.length <= 500;
};
