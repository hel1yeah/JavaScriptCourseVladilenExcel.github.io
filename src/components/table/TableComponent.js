import {ExecelComponent} from '@core/ExecelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.function';
import {isCell} from './table.function';
import {TableSelection} from './TableSelection';
import {nextSelector} from './table.function';
// import {getQuantityRow} from '../../core/untils';
// import {renge} from '../../core/untils';
import {matrix} from './table.function';
// import {emitter} from '../../core/Emitter';
import {$} from '../../core/dom';

export class TableComponent extends ExecelComponent {
  static className = 'exel__table';

  constructor($root, options) {
    super($root, {
      name: 'TableComponent',
      listeners: [
        'mousedown',
        'keydown',
        'input',
      ],
      ...options,
    });
  }

  toHTML() {
    return createTable();
  }
  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    this.selectCell(this.$root.find('[data-id="1:0"]'));

    this.$on('formula:input', text => {
      this.selection.current.text(text);
    } );

    this.$on('formula:done', () => {
      this.selection.current.focus();
    });
    this.$subscribe(state => {
      console.log('TableState', state);
    });
  }
  selectCell($cell) {
    this.selection.select($cell);
    this.$emit('table:select', $cell);
    // this.$dispatch({type: 'test'});
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);

      if (event.shiftKey) {
        const $cells = matrix($target.id(true), this.selection.current.id(true))
            .map(id => this.$root.find(`[data-id="${id}"]`));

        this.selection.selectGroup($cells);
      } else {
        this.selectCell($target);
      }
    }
  }
  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown'];

    const {key} = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }
  onInput(event) {
    this.$emit('table:input', $(event.target));
  }
}


