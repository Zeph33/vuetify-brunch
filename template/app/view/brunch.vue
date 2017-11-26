<template lang="pug">
  div
    SectionHeader Brunch
    p(align="center")
      img(width="150" src="./img/logo_brunch.png")
    vuelink(:items="essentials")      
</template>

<script>
export default {
  name: 'brunch',
  data() {
    return {
      essentials: [
        {href:"http://brunch.io/docs/getting-started", title: "Docs"},
        {href:"http://brunch.io/plugins", title: "plugins"},
        {href:"http://brunch.io/skeletons", title: "Skeletons"},
        {href:"https://github.com/brunch/brunch/issues", title: "Issues"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
