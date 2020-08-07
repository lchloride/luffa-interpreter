<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Parser/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Parser from '@/components/Parser.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Parser
  }
}
</script>
