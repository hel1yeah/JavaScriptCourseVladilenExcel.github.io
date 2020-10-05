import {ExecelComponent} from '@core/ExecelComponent';

export class FormulaComponent extends ExecelComponent {
  static className = 'exel__formula';

  toHTML() {
    return `
      <button class="formula__button" type="button">
        fx
      </button>

      <div class="formula__input">
        <input type="text" class="formula__item" placeholder="формула" spellcheck="false">
      </div>    
    `;
  }
}
