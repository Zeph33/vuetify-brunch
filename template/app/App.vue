<template lang="pug">
  //- base app
  v-app(light)
    //- message warning and alert
    #alertemsg
      v-alert.black--text(color="error" v-model="msg.error.show" dismissible) \{{ msg.error.msg }}
      v-alert.black--text(color="warning" v-model="msg.warning.show" dismissible) \{{ msg.warning.msg }}
      v-alert(color="info" v-model="msg.info.show" dismissible) \{{ msg.info.msg }}
    v-navigation-drawer(ref="vnav" dark stateless fixed :mini-variant="miniNav" :clipped="clipped" v-model="drawer" app)
      v-list
        v-list-tile(v-for="(item, i) in items" :key="i" router :to="item.to")
          v-list-tile-action
            v-icon \{{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(color="primary" dark clipped-left fixed app)
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(icon @click.native.stop="toggleMini()")
        v-icon(v-html="miniNav ? 'chevron_right' : 'chevron_left'")
      v-btn(icon @click.native.stop="clipped = !clipped")
        v-icon web
      v-btn(icon @click.native.stop="fixed = !fixed")
        v-icon remove
      v-toolbar-items.hidden-sm-and-down
        v-btn.no-text-transform(flat color="primary" :to="{path: '/'}")
          v-toolbar-title.white--text(v-text="titleApp")
      v-spacer
      v-btn(icon @click.native.stop="rightDrawer = !rightDrawer")
        v-icon menu
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
    v-navigation-drawer(fixed touchless temporary :right="right" v-model="rightDrawer" app)
      v-list
        v-list-tile(@click.native="right = !right")
          v-list-tile-action
            v-icon(light) compare_arrows
          v-list-tile-title Switch drawer (click me)
    v-footer(dark :fixed="fixed" app)
      v-spacer
      v-btn.no-text-transform(flat color="primary" href="https://github.com/Zeph33" target="_blank") &copy; \{{ new Date().getFullYear() }} by Zeph
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        msg: {
          info: { show:false, msg: '', timeout: null },
          warning: { show:false, msg: '', timeout: null },
          error: { show:false, msg: '', timeout: null }
        },
        items: [
          { title: 'Vue', to: '/vue', icon: 'bluetooth_connected' },
          { title: 'Vuetify', to: '/vuetify', icon: 'dashboard' },
          { title: 'Brunch', to: '/brunch', icon: 'code'},
          { title: 'Settings', to: '/settings', icon: 'settings'},
          { title: 'Route error', to: '/RouteError', icon: 'error'} // No exist route
        ],
        right: true,
        rightDrawer: false,
      }
    },
    created: function() {
      window.app = this
    },
    methods: {
      toggleMini() {
        this.setMini(!this.miniNav)
        this.$nextTick(this.$refs.vnav.updateApplication)
      },
      showerror(msg) { this.showmsg(msg, 'error')},
      showwarning(msg) { this.showmsg(msg, 'warning')},
      showmsg(msg, type='info') {
        const m = this.clearmsg(type)
        m.msg = msg
        m.show = true
        m.timeout = setTimeout(() => { m.show = false }, 4000)
      },
      clearmsg(type='info') {
        const m = this.msg[type] || this.msg.info
        m.timeout && clearTimeout(m.timeout)
        m.msg = ''
        m.show = false
        return m
      }
    }
  }
</script>

<style lang="stylus">
  .no-text-transform
    text-transform: none
  #alertemsg
    position fixed
    bottom 10px
    z-index 15
    width 100%
    display flex
    flex-direction column
    .alert
      text-align center
      width 100%
      max-width 500px
</style>