<template>
  <div><h2>表单提交</h2>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="model.password"></KInput>
      </KFormItem>
      <KFormItem label="text">
        <!--v-model可拆成:value和@input-->
        <KInput :value="model.text" @input="onInput"></KInput>
      </KFormItem>
      <button @click="login">提交</button>
    </KForm>
  </div>
</template>

<script>
  import KForm from './KForm'
  import KFormItem from './KFormItem'
  import KInput from './KInput'

  export default {
    name: 'index',
    components: {KForm, KFormItem, KInput},
    props: {},
    data() {
      return {
        model: {},
        rules: {
          username: [{required: true, message: '请输入用户名'}],
          password: [{required: true, message: '请输入密码'}]
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      onInput(v) {
        this.$set(this.model, 'text', v)
      },
      login() {
        // 校验
        this.$refs.loginForm.validate(isValid => {
          alert(isValid ? 'success' : 'error')
        })
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
