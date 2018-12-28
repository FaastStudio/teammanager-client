<template>
  <div :class="{'white-content': isLightMode}">
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightMode: false
    }
  },
  methods: {
    toggleNavOpen() {
      let root = document.getElementsByTagName('html')[0]
      root.classList.toggle('nav-open')
    }
  },
  mounted() {
    this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
    this.isLightMode = this.$store.state.app.isLightMode
  }
}
</script>
