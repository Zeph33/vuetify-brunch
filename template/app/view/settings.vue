<template lang="pug">
  div
    SectionHeader Settings to localstorage
    v-text-field(name="input-title" label="Title" v-model="title")              
    v-switch(label="Navigation mini variant" v-model="miniNav")
    v-btn(color="secondary" @click="cancel()") Cancel
    v-btn(color="primary"  @click="save()") Save
</template>

<script>
export default {
  name: 'settings',
    data () {
      return {
        title: ''
      }
    },
    computed: {
    },
    methods: {
      save: function() {
        this.setTitle(this.title)
        window.app.showmsg('Settings title saved in localstorage test refresh page and look title.')
      },
      cancel: function() {
        this.title = this.titleApp
        window.app.showwarning('Settings title canceled !')
      }
    },
    mounted: function() {
      this.title = this.titleApp
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
