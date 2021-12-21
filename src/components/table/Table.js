import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from './table.resize'
import {shouldResize, isCell} from './table.functions'
import {TableSelectoin} from './TableSelection'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }
  prepare() {
    this.selection = new TableSelectoin()
  }
  toHTML() {
    return createTable(20)
  }

  init() {
    super.init()


    this.selection = new TableSelectoin()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        console.log('data ', $target.data.id)
        console.log('data ', this.selection.current.data.id)
      } else {
        this.selection.select($target)
      }
    }
  }
}
