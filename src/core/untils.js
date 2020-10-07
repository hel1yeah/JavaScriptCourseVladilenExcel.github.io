export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function renge(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index);
}

export function getQuantityRow() {
  return Math.floor((window.innerHeight - 160) / 30);
}
