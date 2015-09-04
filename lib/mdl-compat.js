(function() {
  'use strict';

  if (!isFlexWrapSupported()) {
    window.addEventListener('load', function init() {
      arrayify(document.querySelectorAll('.mdl-grid')).forEach(upgradeGrid);
      window.removeEventListener('load', init);
    });
  }

  return; //

  function isFlexWrapSupported() {
    var style = document.body.style;
    return ('flexWrap' in style || 'webkitFlexWrap' in style || 'msFlexWrap' in style);
  }

  function upgradeGrid(grid) {
    grid.classList.add('mdl-compat');
    var cells = arrayify(grid.querySelectorAll('.mdl-cell'));
    grid.updateMdlGrid = updateGrid.bind(null, grid, cells);
    window.addEventListener('resize', grid.updateMdlGrid.bind(grid));
    grid.updateMdlGrid();
  }

  function updateGrid(grid, cells) {
    cells.forEach(resetStyles);
    var rows = groupByRow(cells);
    var heights = rows.map(getHeightFromRow);

    if (hasFixedHeight(grid)) {
      var allRowsHeight = heights.reduce(add, 0);
      heights = heights.map(function(h) {return h/allRowsHeight * grid.offsetHeight; });
    }
    rows.forEach(function(row, i) {
      setCellsHeightAndPosition(row, heights[i]);
    });
  }

  function resetStyles(cell) {
    cell.style.height = null;
    cell.style.top = null;
  }

  function groupByRow(cells) {
    var cellsByRow = [];
    var row;
    var offsetTop = 0;

    cellsByRow.push(row = []);

    cells.forEach(function(cell) {
      if (cell.offsetTop > offsetTop) {
        cellsByRow.push(row = []);
        offsetTop = cell.offsetTop;
      }
      row.push(cell);
    });
    return cellsByRow;
  }

  function getHeightFromRow(row) {
    var height = 0;
    row.forEach(function(cell) {
      cell.style.height = null;
      if (cell.offsetHeight > height) {
        height = cell.offsetHeight;
      }
    });
    return height;
  }

  function setCellsHeightAndPosition(row, height) {
    row.forEach(function(cell) {
      var cl = cell.classList;
      if (cl.contains('mdl-cell--top')) {
        cell.style.top = '0px';
      } else if (cl.contains('mdl-cell--middle')) {
        cell.style.top = ((height - cell.offsetHeight) / 2) +'px';
      } else if (cl.contains('mdl-cell--bottom')) {
        cell.style.top = (height - cell.offsetHeight) +'px';
      } else {
        cell.style.height = (height +'px');
      }
    });
  }

  function hasFixedHeight(elem) {
    return window.getComputedStyle(elem, null).getPropertyValue('height');
  }

  function arrayify(nl) {
    var arr = new Array(nl.length);
    for (var i = -1, l = nl.length; i !== l; ++i) {
      arr[i] = nl[i];
    }
    return arr;
  }

  function add(a, b) {
    return a + b;
  }
}());

