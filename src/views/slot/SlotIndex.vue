<template>
  <div><p>--------插槽-----------</p>
    <!-- 插槽 -->
    <Layout>
      <!-- 具名插槽 -->
      <template v-slot:header>头部</template>
      <!-- 匿名插槽 -->
      <template>content...</template>
      <!-- 作用域插槽 -->
      <template v-slot:footer="param">{{param.fc}}</template>
    </Layout>
  </div>
</template>

<script>
  import Layout from './Layout.vue'

  export default {
    name: 'SlotIndex',
    components: {Layout},
    props: {},
    data () {
      return {}
    },
    created () {

    },
    mounted () {

    },
    methods: {},
    computed: {},
    watch: {}
  }
</script>

<style>

</style>
