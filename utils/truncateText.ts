export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text?.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
