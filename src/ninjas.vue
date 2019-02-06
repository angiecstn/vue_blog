<template>
<div>
  <div v-for="(ninja, index) in ninjas" :key="index"> {{ ninja }} 
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>
