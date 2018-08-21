<template>
  <div id="app">
    <h1>MEVN app from Devchat translate</h1>

    <h4>full-stack create with mongo + express + vue + node = MEVN</h4>
    <p>thanks <a href="https://medium.com/devschacht/">devschacht</a> for translate <br> and <a href="https://twitter.com/anaida07">Aneeta Sharma</a>
      for post <a href="https://medium.com/devnetwork/mevn-stack-application-part-2-2-9ebcf8a22753">Build full stack web apps with</a>
    </p>
  
    <button class="btn" @click="goToApp()">Show app</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToApp() {
      this.$router.push({name:'Posts'})
    }
  },
}
</script>

<style>
</style>
