<template lang="pug">
    div.error
        h1 Page not found
        p It would appear that
          em \{{ path }}
          | could not be found.
</template>

<script>
export default {

  name: 'Error',
  data: function() {
      return {
      path: ''
    }
  },
  created() {
    // Get the current route.
    let route = this.$route;
    // Set the route path in the data.
    this.path = route.path;
  }
}
</script>
