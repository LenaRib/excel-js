import {capitalize} from '@core/utils'
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
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} Component`)
      }
      // addIventListener
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListernes() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

// only inside this class
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
