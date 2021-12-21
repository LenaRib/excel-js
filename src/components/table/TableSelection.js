export class TableSelectoin {
  static className = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    $el.addClass(TableSelectoin.className)
    this.group.push($el)
    this.current = $el
  }
  clear($el) {
    this.group.forEach(el => el.removeClass(TableSelectoin.className))
    this.group = []
  }
  selectGroup() {}
}
