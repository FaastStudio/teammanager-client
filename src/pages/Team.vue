<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch(
      'Players/fetchAllPlayers',
      this.$store.state.user.userId
    )
  },
  updated() {
    this.$store.dispatch(
      'Players/fetchAllPlayers',
      this.$store.state.user.userId
    )
  }
}
</script>
