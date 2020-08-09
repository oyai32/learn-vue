<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
  import emitter from '@/mixins/emitter.js'

  export default {
    name: 'KInput',
    mixins: [emitter],
    components: {},
    inheritAttrs: false, // 使属性不继承，若为true，父div也会有placeholder
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {
      onInput(e) {
        // this.value = e.target.value
        this.$emit('input', e.target.value)

        // 触发做校验
        // this.$parent.$emit('validate') // 依赖组件结构
        // this.$root.$emit('validate') // 使用根组件派发
        // 官方使用dispatch(混入emitter.js使用)
        this.dispatch('KFormItem', 'validate')
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
