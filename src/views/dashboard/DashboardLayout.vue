<template>
  <div class="wrapper">
    <side-bar :title=sideBarTitle>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/team" name="Team" icon="tim-icons icon-single-02"/>
        <!-- <sidebar-link to="/training/create" :name="$t('sidebar.training')" icon="tim-icons icon-spaceship"/> -->
        <sidebar-link to="/icons" name="Icons" icon="tim-icons icon-atom"/>
        <!-- <sidebar-link to="/maps" :name="$t('sidebar.maps')" icon="tim-icons icon-pin"/> -->
        <sidebar-link to="/notifications" name="Notifications" icon="tim-icons icon-bell-55"/>
        <!-- <sidebar-link to="/profile" :name="$t('sidebar.userProfile')" icon="tim-icons icon-single-02"/> -->
        <!-- <sidebar-link to="/table-list" :name="$t('sidebar.tableList')" icon="tim-icons icon-puzzle-10"/> -->
        <!-- <sidebar-link to="/typography" :name="$t('sidebar.typography')" icon="tim-icons icon-align-center"/> -->
        <base-button @click="logout()" type="danger" class="ml-4" fill>Abmelden</base-button>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import BaseButton from '@/components/BaseButton.vue'
import store from '../../store.js'

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    BaseButton
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    logout() {
      console.log('TODO: Logout')
      console.log(store.userProfile)
    }
  },
  computed: {
    sideBarTitle() {
      return store.state.currentUser.displayName || store.state.userProfile.name
    }
  }
}
</script>
