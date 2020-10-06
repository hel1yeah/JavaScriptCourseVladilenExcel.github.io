import {capitalize} from '../core/untils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('NO $root');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`метод ${method} в компоненте ${this.name || 'hz'}`);
      }
      // console.log(method);
      this.$root.on(listener, this[method]);
    });
  }

  removeDOMListeners() {

  }
}
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
