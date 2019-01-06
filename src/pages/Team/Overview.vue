<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-end">
      <base-button type="success">Spieler hinzufügen</base-button>
      <base-button type="danger" class="ml-2" disabled>Entfernen</base-button>
    </div>
    <card>
      <table>
        <tr>
          <td>[]</td>
          <td>Name</td>
        </tr>
        <tr v-for="sample in samples" :key="sample.name">
          <td><input type="checkbox" name="select" id="select"></td>
          <td>{{ sample.name }}</td>
        </tr>
      </table>
    </card>
  </div>
</template>

<script>
import { BaseButton } from '@/components'
export default {
  name: 'Team',
  components: {
    BaseButton
  },
  data() {
    return {
      samples: [
        {
          name: 'Kilian Stallinger'
        },
        {
          name: 'Max Planc'
        },
        {
          name: 'Holla Pitchca'
        }
      ]
    }
  }
}
</script>
