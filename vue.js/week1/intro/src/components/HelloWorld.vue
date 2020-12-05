<template>
  <div>
    <h1>{{ msg }}</h1>
    
    <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
