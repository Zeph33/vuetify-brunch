<template lang="pug">
  div.welcome
    SectionHeader {{ msg }}
    p(align="center")
      img(width="200" src="./img/logo_vue.svg")
      img(width="200" src="./img/logo_brunch.png")
      img(width="170" src="./img/logo_vuetify.svg")    
    vuelink(:items="essentials")
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return {
      msg: 'Vue.js Brunch App with Vuetify',
      essentials: [
        {href:"https://vuejs.org" , title: 'Vue.js'},
        {href:"https://vuetifyjs.com" , title: 'Vuetify'},
        {href:"http://brunch.io/", title: 'Brunch'}
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
