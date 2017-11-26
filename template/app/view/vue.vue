<template lang="pug">
  div
    SectionHeader Vue.js
    vuelink(:items="essentials")
    p(align="center")
      img(width="150" src="./img/logo_vue.svg")
    vuelink(title="Ecosystem" :items="ecosystem")
</template>

<script>
export default {
  name: 'vue',
  data() {
    return {
      essentials: [
        {href:"https://vuejs.org" , title: 'Core docs'},
        {href:"https://forum.vuejs.org" , title: 'Forum'},
        {href:"https://gitter.im/vuejs/vue", title: 'GitterChat'},
        {href:"https://twitter.com/vuejs", title: 'Twitter'}
      ],
      ecosystem: [
        {href:"http://router.vuejs.org/", title: "vue-router"},
        {href:"http://vuex.vuejs.org/", title: "vuex"},
        {href:"http://vue-loader.vuejs.org/", title: "vue-loader"},
        {href:"https://github.com/vuejs/awesome-vue", title: "awesome-vue"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
