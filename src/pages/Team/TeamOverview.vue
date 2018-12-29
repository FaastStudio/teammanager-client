<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-sm-12">
          <card>
            <div class="row">
              <div class="col-12">
                <base-button @click="toCreatePlayer" type="success" rounded>Spieler erstellen</base-button>
              </div>
            </div>
          </card>
        </div>
      </div>
      <team-table></team-table>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import TeamTable from './TeamTable'
export default {
  components: {
    TeamTable,
    BaseButton
  },
  methods: {
    toCreatePlayer(event) {
      if (event) {
        this.$router.push('/team/create')
      }
    }
  }
}
</script>
