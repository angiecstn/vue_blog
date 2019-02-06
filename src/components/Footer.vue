<template>
  <footer>
    <p> {{ copyright }} </p>
  </footer>

</template>

<script>


export default {

  data () {
    return {
      copyright: 'Copyright 2017'
    }
  }
}
</script>

<style scoped>

footer{
  background: #222;
  padding: 6px;
}
p{
  color:rgb(144, 203, 238);
  text-align:center;
}

</style>
