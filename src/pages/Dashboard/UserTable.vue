<template>
  <base-table :data="table.data"
              :columns="table.columns"
              thead-classes="text-primary">
  </base-table>
</template>
<script>
import { BaseTable } from '@/components'
export default {
  components: {
    BaseTable
  },
  computed: {
    table() {
      // return this.$t('dashboard.usersTable');
      return ['User 1', 'User 2']
    }
  }
}
</script>
<style>
</style>
