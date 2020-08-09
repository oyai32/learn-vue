class Bus {
  constructor () {
    this.callbacks = {}
  }

  $on (name, fn) {
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }

  // ...args就随便可以传几个参数
  $emit (name, ...args) {
    if (this.callbacks[name]) {
      this.callbacks[name].forEach(fn => fn(...args))
    }
  }
}

export default Bus
