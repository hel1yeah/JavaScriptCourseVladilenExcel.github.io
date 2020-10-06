const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
  <div class="cell" contenteditable></div>
  `;
}
function toColumn(colName) {
  return `
  <div class="column">
  ${colName}
  <div class="col-resize" data-resize="col"></div>
  </div>
  `;
}

function createRow(index, content) {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
    <div class="row">
      <div class="row-info">${index}
      ${resizer}
      </div>
      <div class="row-data"> ${content} </div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = getQuantityRow()) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  // console.log(cols);

  rows.push(createRow('', cols));

  for (let i = 1; i <= rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i, cells));
  }

  return rows.join('');
}

// const red = getQuantityRow();
function getQuantityRow() {
  return Math.floor((window.innerHeight -160) / 30);
}


