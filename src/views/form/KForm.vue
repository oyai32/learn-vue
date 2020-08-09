<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    componentName: 'KForm',
    name: 'KForm',
    provide() {
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
    data() {
      return {}
    },
    created() {
      // 监听表单item的增加，将form中每行都记录下来
      this.fields = []; // 由于不需要响应式，所以不用加在data中
      this.$on('form.addField', (item) => {
        this.fields.push(item);
      })
    },
    mounted() {
    },
    methods: {
      validate(fn) {
        // 所有的KFormItem都校验（使用了childeren，依赖组件结构）
        // let fns = this.$children.map(cur => cur.validate())

        let fns = this.fields.map(cur => cur.validate())
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
