const newLocal = 'No root provided for DomListener!'

export class DomListener {
  constructor($root) {
    console.log('что пришло ', $root)
    if (!$root) {
      throw new Error(newLocal)
    }
    this.$root = $root
  }
}
