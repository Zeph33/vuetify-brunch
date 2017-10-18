<template lang="pug">
  v-app(light)
    v-navigation-drawer(dark persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app)
      v-list
        v-list-tile(v-for="(item, i) in items" :key="i" router :to="item.to")
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(color="primary" dark clipped-left fixed app)
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(icon @click.native.stop="miniVariant = !miniVariant")
        v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")
      v-btn(icon @click.native.stop="clipped = !clipped")
        v-icon web
      v-btn(icon @click.native.stop="fixed = !fixed")
        v-icon remove
      v-toolbar-title(v-text="title")
      v-spacer
      v-btn(icon @click.native.stop="rightDrawer = !rightDrawer")
        v-icon menu
    main
      v-content
        v-container(fluid)
          v-slide-y-transition(mode="out-in")
            router-view
    v-navigation-drawer(temporary :right="right" v-model="rightDrawer" app)
      v-list
        v-list-tile(@click.native="right = !right")
          v-list-tile-action
            v-icon(light) compare_arrows
          v-list-tile-title Switch drawer (click me)
    v-footer(dark :fixed="fixed" app)
      v-spacer
      div &copy; \{{ new Date().getFullYear() }}
</template>

<script>
  export default {
    data () {
      return {
        title: 'Brunch + Vuetify.js',
        clipped: true,
        drawer: true,
        fixed: true,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        items: [
          { title: 'Profil', to: '/', icon: 'dashboard' },
          { title: 'Inspire', to: '/inspire', icon: 'line_style' },
          { title: 'Store', to: '/store', icon: 'local_grocery_store' },
          { title: 'Send', to: '/send', icon: 'send' },
          { title: 'Save', to: '/save', icon: 'save' },
          { title: 'Public', to: '/public', icon: 'public' },
          { title: 'Return', to: '/return', icon: 'assignment_returned' },
          { title: 'RSS', to: '/rss', icon: 'rss_feed' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
</style>