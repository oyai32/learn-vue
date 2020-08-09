<template>
  <div id="app">
    <SoltIndex class="box"></SoltIndex>
    <Father class="box"/>
  </div>
</template>

<script>
  import Father from './views/communication/Father'
  import SoltIndex from './views/slot/SlotIndex.vue'

  export default {
    name: 'App',
    components: {
      Father,
      SoltIndex
    }
  }
</script>
<style>
  .box {
    border: 1px solid green;
    margin-bottom: 20px;
  }
</style>
