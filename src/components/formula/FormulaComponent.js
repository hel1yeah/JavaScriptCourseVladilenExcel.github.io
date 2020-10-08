import {ExecelComponent} from '@core/ExecelComponent';
import {$} from '../../core/dom';

export class FormulaComponent extends ExecelComponent {
  static className = 'exel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options,

    });
  }

  toHTML() {
    return `
      <button class="formula__button" type="button">fx</button>
      <div class="formula__input">
        <div id="formula" contenteditable type="text" class="formula__item" placeholder="формула" spellcheck="false">
        </div>
      </div>    
    `;
  }

  init() {
    super.init();

    this.$formula = this.$root.find('#formula');

    this.$on('table:select', $cell => {
      this.$formula.text($cell.text());
    });

    this.$on('table:input', $cell => {
      this.$formula.text($cell.text());
    });
    this.$subscribe(state => {
      console.log('FormulaState', state);
    });
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onClick(event) {
    // if (event === 'click') {
    //   this.$emit('formula:input', $(event.target).text());
    // }
  }

  onKeydown(event) {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
