import {ExecelComponent} from '@core/ExecelComponent';
import {createTable} from './table.template';


export class TableComponent extends ExecelComponent {
  static className = 'exel__table';
  toHTML() {
    return createTable();
  }
}
