import {DomListener} from './DomListener';

export class ExecelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    console.log(options);

    this.prepare();
  }
  // настраиваем наш компонет
  prepare() {
  }
  // возварщает шаблон компонента
  toHTML() {
    return '';
  }
  // уведомляем слушателей про события event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  // подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // инициализируем компонент
  // добавляем дом слушателей
  init() {
    this.initDOMListeners();
  }
  // удаляем компонент
  // чистим слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  }
}
