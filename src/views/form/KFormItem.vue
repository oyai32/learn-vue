<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
    <div class="error">{{error}}</div>
  </div>
</template>

<script>
  import Validator from 'async-validator'

  export default {
    name: 'KFormItem',
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
      this.$root.$on('validate', () => {
        this.validate()
      })
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
