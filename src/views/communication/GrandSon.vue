<template>
  <div>
    <h1>GrandSonFromSon2{{title}}</h1>
    <div @click="$emit('some-event','msg from grandson')">点击{{$attrs.food}}</div>
    <div>
      <button @click="$root.$emit('setText','text from grandson')">操作大伯Son</button>
    </div>
    <h2>{{foo}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'GrandSon',
    components: {},
    inject: ['foo'],
    props: {
      title: String
    },
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
