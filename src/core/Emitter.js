export class Emitter {
  constructor() {
    this.listeners = {};
  }
  // Уведомляем слушателей если они есть
  // table.emit('table:select, {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  }
  // Подписываемся на уведомления
  // formula.subscribe('table:select', () = {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn);
    };
  }
}

// const emitter = new Emitter();
// console.log(typeof emitter);
// const unsub = emitter.subscribe('yures', data => console.log('Sub', data));
// emitter.emit('yures', 42);

// setTimeout(() => {
//   emitter.emit('yures', 'after 1 sec');
// }, 1000);

// setTimeout(() => {
//   unsub();
// }, 2000);

// setTimeout(() => {
//   emitter.emit('yures', 'after 1 sec');
// }, 2000);
