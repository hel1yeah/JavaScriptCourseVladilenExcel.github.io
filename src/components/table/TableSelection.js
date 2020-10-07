export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clearCell();
    this.group.push($el);
    this.current = $el;
    $el.focus().addClass(TableSelection.className);
  }
  clearCell() {
    this.group.forEach($el => $el.removeClass(TableSelection.className));
    this.group = [];
  }
  selectGroup($group = []) {
    this.clearCell();
    this.group = $group;
    this.group.forEach($el => $el.addClass(TableSelection.className));
  }
}

