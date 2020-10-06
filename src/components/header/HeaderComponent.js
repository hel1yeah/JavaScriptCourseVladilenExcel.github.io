import {ExecelComponent} from '@core/ExecelComponent';

export class HeaderComponent extends ExecelComponent {
  static className = 'exel__header';
  toHTML() {
    return `
      <input type="text" class="input" value=" Новая таблица ">
      <div class="button__wrapper">
        <button class="button" type="button">
          <i class="material-icons">exit_to_app</i>
        </button>

        <button class="button" type="button">
          <i class="material-icons">delete</i>
        </button>
      </div>
    `;
  }
}
