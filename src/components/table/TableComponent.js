import {ExecelComponent} from '@core/ExecelComponent';
import {createTable} from './table.template';
import {$} from '../../core/dom';

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

    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      // const $perent = $resizer.$el.parentNode;
      // const $perent = $resizer.$el.closest('.column');
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      console.log();
      document.onmousemove = e => {
        const delta = e.pageX - coords.right;
        // console.log(delta);
        $parent.$el.style.width = coords.width + delta + 'px';
      };
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
