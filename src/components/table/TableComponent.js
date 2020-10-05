import {ExecelComponent} from '@core/ExecelComponent';

export class TableComponent extends ExecelComponent {
  static className = 'exel__table';
  toHTML() {
    return `
    <div class="row">
          <div class="row-info">
          </div>
          <div class="row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
          </div>
        </div>
        <div class="row">
          <div class="row-info">
            1
          </div>
          <div class="row-data">
            <div class="cell selected">a1</div>
            <div class="cell ">b2</div>
            <div class="cell ">b3</div>
          </div>
        </div>
        <div class="row">
          <div class="row-info">
            1
          </div>
          <div class="row-data">
            <div class="cell ">a1</div>
            <div class="cell ">b2</div>
            <div class="cell ">b3</div>
          </div>
        </div>
      </div>
    `;
  }
}
