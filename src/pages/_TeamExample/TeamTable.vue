<template>
  <div class="row">
    <div class="col-12">
      <card title="Team Übersicht">
        <!-- <div class="table-responsive">
          <base-table :data="teamList"
                      :columns="teamListColumns"
                      thead-classes="text-primary"></base-table>
        </div> -->
        <div class="col-12 mt-4">
          <div class="row mb-4 justify-content-around" v-for="player in teamList" :key="player._id">
            <div class="flex-col">
              <h6>{{ player.name }}</h6>
              <p> Position: {{player.position}} </p>
            </div>
            <div class="justify-content-center"><input type="submit" name="löschen" value="Löschen" class="btn btn-danger" @click="deletePlayer(player._id)"></div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
// import { BaseTable } from '@/components'
import { mapGetters } from 'vuex'
export default {
  components: {
    // BaseTable
  },
  data() {
    return {
      teamListColumns: ['Name', 'Position', 'Bearbeiten']
    }
  },
  computed: {
    ...mapGetters({
      teamList: 'Players/teamArray'
    })
  },
  methods: {
    deletePlayer(playerId) {
      this.$store.dispatch('Players/deletePlayer', playerId)
      this.$router.push('/team/overview')
    }
  }
}
</script>
