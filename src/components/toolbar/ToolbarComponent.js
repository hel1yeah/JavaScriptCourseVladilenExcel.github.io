import {ExecelComponent} from '@core/ExecelComponent';

export class ToolbarComponent extends ExecelComponent {
  static className = 'exel__toolbar';
  toHTML() {
    return `
      <button class="button" type="button">
        <i class="material-icons">format_align_left</i>
      </button>

      <button class="button" type="button">
        <i class="material-icons">format_align_center</i>
      </button>
      <button class="button" type="button">
        <i class="material-icons">format_align_right</i>
      </button>

      <button class="button" type="button">
        <i class="material-icons">format_bold</i>
      </button>
      <button class="button" type="button">
        <i class="material-icons">format_italic</i>
      </button>

      <button class="button" type="button">
        <i class="material-icons">format_underlined</i>
      </button>
    `;
  }
}
