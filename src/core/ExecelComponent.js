import {DomListener} from './DomListener';

export class ExecelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // возварщает шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
