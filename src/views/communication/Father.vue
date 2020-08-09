<template>
  <div>
    <p>--------组件间通信------------</p>
    <h1>father{{title}}</h1>
    <button @click="getChildren">通过children设置</button>
    <Son msg="you are my son" @setTitle="setTitle(arguments)"></Son>
    <Son2 food="辣条" title="祖父喊你" @some-event="onSomeEvent"></Son2>
  </div>
</template>

<script>
  import Son from '@/views/communication/Son.vue'
  import Son2 from '@/views/communication/Son2.vue'

  export default {
    name: 'Father',
    components: {Son, Son2},
    props: {},
    provide () { // provide/inject能够实现祖先和后代之间传值
      return {foo: 'foo'}
    },
    data () {
      return {
        title: ''
      }
    },
    created () {

    },
    mounted () {

    },
    methods: {
      setTitle (args) {
        console.log(args)
        console.log(args[0])
        console.log(args[1])
        this.title = args[1]
      },
      getChildren () {
        this.$children[0].text = '通过children设置'
        // 得到的是所有孩子组件的数组
        console.log(this.$children)
      },
      onSomeEvent () {
        alert('调用father里的方法')
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
