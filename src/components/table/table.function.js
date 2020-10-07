import {renge} from '../../core/untils';
import {getQuantityRow} from '../../core/untils';

export function shouldResize(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

export function matrix($target, $current) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = renge(current.col, target.col);
  const rows = renge(current.row, target.row);

  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}
export function nextSelector(key, {col, row}) {
  const MIN_VALUE_ROW = 0;
  const MAX_VALUE_ROW = getQuantityRow();
  const MIN_VALUE_COL = 0;
  const MAX_VALUE_COL = 25;
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row = row + 1 > MAX_VALUE_ROW ? MAX_VALUE_ROW : row + 1;
      break;
    case 'Tab':
    case 'ArrowRight':
      col = col + 1 > MAX_VALUE_COL ? MAX_VALUE_COL : col + 1;
      break;
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE_COL ? MIN_VALUE_COL : col - 1;
      break;
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE_ROW ? MIN_VALUE_ROW : row - 1;
      break;
  }
  return `[data-id="${row}:${col}"]`;
}
