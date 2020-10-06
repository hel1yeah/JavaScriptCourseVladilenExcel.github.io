import {ExecelComponent} from '@core/ExecelComponent';
import {createTable} from './table.template';


export class TableComponent extends ExecelComponent {
  static className = 'exel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    // console.log(event.target.getAttribute('data-resize'));
    // console.log(event.target.dataset.resize);
    if (event.target.dataset.resize) {
      console.log('start resize ', event.target.dataset.resize);
    }
  }
}
