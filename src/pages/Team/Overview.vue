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
            <th scope="col"> <input type="checkbox" name="" id=""> </th>
            <th scope="col" class=""><p class="title">Name</p></th>
            <th scope="col" class="d-none d-md-table-cell"><p class="title">Position</p></th>
            <th scope="col" class="d-none d-md-table-cell"><p class="title">Spiele</p></th>
            <th scope="col" class="d-none d-md-table-cell"><p class="title">Nummer</p></th>
            <th scope="col" class="d-none d-md-table-cell"><p class="title">Alter</p></th>
            <th scope="col" class="d-none d-md-table-cell"><p class="title">Bearb.</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in samples" :key="index">
            <th scope="row"> <input type="checkbox" @click="selectBox(String(player._id))"> </th>
            <td> {{ player.name }} </td>
            <td class="d-none d-md-table-cell"> {{ player.position }} </td>
            <td class="d-none d-md-table-cell"> {{ player.spiele }} </td>
            <td class="d-none d-md-table-cell"> {{ player.number }} </td>
            <td class="d-none d-md-table-cell"> {{ player.alter }} </td>
            <td class="d-none d-md-table-cell"> <base-button type="warning" icon round> <i class="tim icon-pencil"></i> </base-button> </td>
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
      select: [],
      samples: [
        {
          _id: '1',
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18',
          number: '10'
        },
        {
          _id: '2',
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18',
          number: '11'
        },
        {
          _id: '3',
          name: 'Kilian Stallinger',
          position: 'Tor',
          spiele: 'Alle',
          tore: 'Unendl.',
          alter: '18',
          number: '12'
        }
      ]
    }
  },
  methods: {
    selectBox(id) {
      if (this.select.includes(String(id))) {
        let index = this.select.indexOf(String(id))
        let arr = this.select
        arr.splice(index, 1)
        this.select = arr
      } else {
        let arr = this.select
        arr.push(String(id))
        console.log(arr)
        this.select = arr
      }
    },
    selectAllBoxes() {}
  }
}
</script>
