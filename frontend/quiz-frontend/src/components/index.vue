<template>
<div id="show-question">
    <h1></h1>
</div>
</template>

<script>   
export default {
  name: 'home',
  props: {
  },
  created(){
    this.$http.get('localhost:8080/api/questions/').then(function(data){
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
