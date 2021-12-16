import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mouseup'],
    })
  }

  toHTML() {
    return createTable(20)
  }


  onMousedown(event) {
    console.log('this ', this)
    if (event.target.dataset.resize) {
      // console.log('Start resizing', event.target)
      // this.cell.push(event.target.dataset.resize)
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      // console.log($parent.getCoords())
      const cords = $parent.getCoords()
      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e => {
        const delta = e.pageX - cords.right
        const value = cords.width + delta
        $parent.$el.style.width = value + 'px'
        cells
            .forEach(el => {
              el.style.width = value + 'px'
            })
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
  onMouseup(event) {
    console.log('Stop resizing')
  }
}
