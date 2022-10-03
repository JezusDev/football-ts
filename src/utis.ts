export function dateStringToDate(
  dateString: string,
  separator: string | RegExp
): Date {
  // 05/10/2018
  const [year, month, day] = dateString
    .split(separator)
    .reverse()
    .map((item) => {
      return parseInt(item);
    });
  return new Date(year, month - 1, day);
}
