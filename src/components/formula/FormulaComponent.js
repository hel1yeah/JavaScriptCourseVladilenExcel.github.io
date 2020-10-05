import {ExecelComponent} from '@core/ExecelComponent';

export class FormulaComponent extends ExecelComponent {
  static className = 'exel__formula';

  toHTML() {
    return '<h1>Fotmula</h1>';
  }
}
