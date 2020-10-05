import {ExecelComponent} from '@core/ExecelComponent';

export class HeaderComponent extends ExecelComponent {
  static className = 'exel__header';
  toHTML() {
    return '<h1>Header</h1>';
  }
}
