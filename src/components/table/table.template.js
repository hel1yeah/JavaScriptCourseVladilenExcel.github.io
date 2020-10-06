const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `
  <div class="cell">
  
  </div>
  `;
}
function toColumn(colName) {
  return `
  <div class="column">${colName}</div>
  `;
}

function createRow(content) {
  return `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data"> ${content} </div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  console.log(cols);

  rows.push(createRow(cols));

  for (let i = 0; i <= rowsCount; i++) {
    rows.push(createRow());
  }

  return rows.join('');
}
