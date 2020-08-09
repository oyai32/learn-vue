<template>
  <div><h1>son2{{title}}</h1>
    <button @click="setTextByParent">设置兄弟的text</button>
    <div>{{$attrs.food}}</div>
    <GrandSon v-bind="$attrs" v-on="$listeners"></GrandSon>
  </div>
</template>

<script>
  import GrandSon from './GrandSon.vue'

  export default {
    name: 'Son2',
    components: {GrandSon},
    props: {},
    data () {
      return {
        title: ''
      }
    },
    created () {
      this.$bus.$on('setTitle', this.setTitle)
    },
    mounted () {
    },
    methods: {
      setTitle (a, b, c) {
        console.log(a, b, c)
        this.title = a
      },
      setTextByParent () {
        this.$root.$emit('setText', '通过根设置兄弟的text')
      }
    },
    computed: {},
    watch: {}
  }
</script>
