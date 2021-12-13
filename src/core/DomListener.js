const newLocal = 'No root provided for DomListener!'

export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(newLocal)
    }
    this.$root = $root
  }
}
