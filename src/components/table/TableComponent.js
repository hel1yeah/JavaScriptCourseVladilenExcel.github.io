import {ExecelComponent} from '@core/ExecelComponent';

export class TableComponent extends ExecelComponent {
  static className = 'exel__table';
  toHTML() {
    return '<h1>Table</h1>';
  }
}
