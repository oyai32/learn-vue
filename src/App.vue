<template>
  <div id="app">
    <FormIndex class="box"></FormIndex>
    <SoltIndex class="box"></SoltIndex>
    <Father class="box"/>
  </div>
</template>

<script>
  import Father from './views/communication/Father'
  import SoltIndex from './views/slot/SlotIndex.vue'
  import FormIndex from './views/form/index.vue'

  export default {
    name: 'App',
    components: {
      Father,
      SoltIndex,
      FormIndex
    }
  }
</script>
<style>
  .box {
    border: 1px solid green;
    margin-bottom: 20px;
  }
</style>
