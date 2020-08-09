<template>
  <div><h1>son</h1>
    <div>父传子：{{msg}}</div>
    <div style="color: red">{{text}}</div>
    <button @click="setParentTitle">点击设置父组件标题</button>
    <button @click="$emit('setTitle', '')">点击取消父组件标题</button>
    <button @click="setBortherTitle">点击设置兄弟组件标题</button>
    <div>{{fooAsName}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Son',
    components: {},
    inject: {
      fooAsName: {
        from: 'foo'
      }
    },
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        text: ''
      }
    },
    created () {
    },
    mounted () {
      this.$root.$on('setText', v => {
        this.text = v
      })
    },
    methods: {
      setParentTitle () {
        this.$emit('setTitle', 'a', '这就是标题')
      },
      setBortherTitle () {
        this.$bus.$emit('setTitle', '兄弟的标题', 'b', 'ddd')
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
