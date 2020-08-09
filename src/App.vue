<template>
  <div id="app">
    <Father class="box"/>
  </div>
</template>

<script>
  import Father from './views/communication/Father'

  export default {
    name: 'App',
    components: {
      Father
    }
  }
</script>
<style>
  .box {
    border: 1px solid green;
    margin-bottom: 20px;
  }
</style>
