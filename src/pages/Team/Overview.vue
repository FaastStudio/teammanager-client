<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-end mb-3">
      <base-button type="success">Spieler hinzufügen</base-button>
      <base-button type="danger" class="ml-2" disabled>Entfernen</base-button>
    </div>
    <card>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"> <p>#</p> </th>
            <th scope="col"><p class="title">Name</p></th>
            <th scope="col"><p class="title">Position</p></th>
            <th scope="col"><p class="title">Spiele</p></th>
            <th scope="col"><p class="title">Tore</p></th>
            <th scope="col"><p class="title">Alter</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in samples" :key="index">
            <th scope="row"> <input type="checkbox" name="" id=""> </th>
            <td> {{player.name }} </td>
            <td> {{player.position }} </td>
            <td> {{player.spiele }} </td>
            <td> {{player.tore }} </td>
            <td> {{player.alter }} </td>
          </tr>
        </tbody>
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
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18'
        },
        {
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18'
        },
        {
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18'
        }
      ]
    }
  }
}
</script>
