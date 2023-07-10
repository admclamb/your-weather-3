export const toInitials = (string: string) => {
  return string
    .split(" ")
    .map((word) => (word.length > 2 ? word[0].toUpperCase() : ""))
    .join("");
};
