<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <div class="error">{{error}}</div>
  </div>
</template>

<script>
  import Validator from 'async-validator'
  import emitter from '@/mixins/emitter.js'

  export default {
    componentName: 'KFormItem', // kInput组件使用dispatch方法时需要
    name: 'KFormItem',
    mixins: [emitter],
    inject: ['form'],
    components: {},
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: String
    },
    data() {
      return {
        error: ''
      }
    },
    created() {

    },
    mounted() {
      // this.$root.$on('validate', () => {
      //   this.validate()
      // })
      this.$on('validate', () => {
        this.validate()
      })

      if (this.prop && this.form.rules[this.prop]) {
        // 派发事件，告诉KForm，新增了一个formItem
        this.dispatch('KForm', 'form.addField', [this])
      }
    },
    methods: {
      validate() {
        if (this.prop && this.form.rules[this.prop]) {
          const rule = this.form.rules[this.prop]
          const value = this.form.model[this.prop]
          // 创建一个校验器
          let validator = new Validator({[this.prop]: rule})
          return validator.validate({[this.prop]: value}, errors => {
            if (errors) {
              this.error = errors[0].message
            } else {
              this.error = ''
            }
          })
        } else {
          return new Promise(resolve => {
            resolve(true)
          })
        }
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
