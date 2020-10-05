import {ExecelComponent} from '@core/ExecelComponent';

export class ToolbarComponent extends ExecelComponent {
  static className = 'exel__toolbar';
  toHTML() {
    return '<h1>Toolbar</h1>';
  }
}
