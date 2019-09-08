<template>
  <div id="cover">
    <h1>I am Kick</h1>
  </div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#cover{
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,0.5);
  h1{
    margin-top:15%;
  }
}
</style>
