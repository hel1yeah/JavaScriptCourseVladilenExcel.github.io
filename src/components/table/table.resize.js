import {$} from '../../core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  // const $perent = $resizer.$el.parentNode;
  // const $perent = $resizer.$el.closest('.column');
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);
  const rows = $root.findAll(`[data-col="${$parent.data.row}"]`);
  // const sideProp = type === 'col' ? 'button': 'right';
  let value = 2;

  if (type == 'col') {
    $resizer.css({
      opacity: 1,
      bottom: '-3000px',
    });
  } else {
    $resizer.css({
      opacity: 1,
      right: '-3000px',
    });
  }

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({right: -delta});
      $parent.css({width: value + 'px'});
      // cells.forEach(el => el.style.width = value + 'px');
    } else {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({bottom: -delta});
      $parent.css({height: value + 'px'});

      // rows.forEach(el => el.style.width = value + 'px');
    }
  };


  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    document.onclick = null;
    if (type === 'col') {
      $parent.css({width: value + 'px'});
      cells.forEach(el => el.style.width = value + 'px');
    } else {
      $parent.css({height: value + 'px'});
      rows.forEach(el => el.style.width = value + 'px');
    }

    if (type == 'col') {
      $resizer.css({
        opacity: 0,
        bottom: '0',
        top: '0',
        right: '0',

      });
    } else {
      $resizer.css({
        opacity: 0,
        left: '0',
        bottom: '0',
        right: '0',
      });
    }
  };
}
