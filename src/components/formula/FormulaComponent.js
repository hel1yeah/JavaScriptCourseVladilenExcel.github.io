import {ExecelComponent} from '@core/ExecelComponent';

export class FormulaComponent extends ExecelComponent {
  static className = 'exel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],

    });
  }

  toHTML() {
    return `
      <button class="formula__button" type="button">fx</button>
      <div class="formula__input">
        <input type="text" class="formula__item" placeholder="формула" spellcheck="false">
      </div>    
    `;
  }

  onInput(event) {
    console.log('test input', event);
    console.log('FormulaComponent: onInput', event.target.textContent.trim());
  }

  onClick() {

  }
}
