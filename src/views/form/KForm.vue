<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'KForm',
    provide () {
      return {
        'form': this
      }
    },
    components: {},
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: Object
    },
    data () {
      return {}
    },
    created () {

    },
    mounted () {

    },
    methods: {
      validate (fn) {
        // 所有的KFormItem都校验
        let fns = this.$children.map(cur => cur.validate())
        Promise.all(fns).then(() => {
          fn(true)
        }).catch(() => {
          fn(false)
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
