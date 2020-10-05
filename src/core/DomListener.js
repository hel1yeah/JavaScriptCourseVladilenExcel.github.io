export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('NO $root');
    }
    this.$root = $root;
  }
}
