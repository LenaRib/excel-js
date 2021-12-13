const newLocal = 'No root provided for DomListener!'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(newLocal)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    console.log(this.listeners)
  }

  deleteDOMListernes() {

  }
}
