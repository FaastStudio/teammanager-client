<template>
  <div class="row">
    <div class="col-12">
      <card title="Team Übersicht">
        <div class="table-responsive">
          <base-table :data="teamList"
                      :columns="teamListColumns"
                      thead-classes="text-primary"></base-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { BaseTable } from '@/components'
export default {
  components: {
    BaseTable
  },
  data() {
    return {
      teamListColumns: ['Name', 'Position', 'Bearbeiten']
    }
  },
  computed: {
    teamList() {
      return this.$store.state.teamList
    }
  }
}
</script>
