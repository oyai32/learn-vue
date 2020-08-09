import Vue from 'vue'

function create (Component, props) {
  // const vm = new Vue({
  //   render: (h) => {
  //     return h(Component, {props})
  //   }
  // }).$mount()

  const Box = Vue.extend(Component)
  const vm = new Box({
    propsData: props
  }).$mount()

  document.body.appendChild(vm.$el)
  // const comp = vm.$children[0]
  const comp = vm
  comp.remove = function () {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}

export default create
