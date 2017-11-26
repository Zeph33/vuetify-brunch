<template lang="pug">
  div
    SectionHeader Vuetify
    p(align="center")
      img(width="100" src="./img/logo_vuetify.svg")
    vuelink(:items="essentials")
</template>

<script>
export default {
  name: 'vuetify',
  data() {
    return {
      essentials: [
        {href:"https://vuetifyjs.com" , title: 'Vuetify doc'},
        {href:"https://github.com/vuetifyjs/vuetify" , title: 'Github'},
        {href:"https://github.com/vuetifyjs/vuetify/issues", title: 'Issues'},
        {href:"https://chat.vuetifyjs.com/", title: 'Community'}
      ],
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
