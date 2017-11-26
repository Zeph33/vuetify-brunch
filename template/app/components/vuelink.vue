<template lang="pug">
  v-layout(row)
    v-flex(xs12 sm6 offset-sm3)
      v-card
        v-toolbar(color="indigo" dark)
          v-toolbar-title \{{ title }}
        v-list
          v-list-tile(v-for="item in items" :href="item.href" target="_blank") \{{ item.title }}
    slot
</template>

<script>
export default {
  name: 'vuelink',
  props: {
    items: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: 'Essential Links'
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus">
</style>
