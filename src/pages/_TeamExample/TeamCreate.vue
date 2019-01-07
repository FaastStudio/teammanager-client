<template>
  <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <card title="Spieler erstellen" class="col-md-8 col-12">
      <form>
        <BaseInput v-model="model.name" required="true" type="text" label="Spieler Name" placeholder="Max Musterspieler" @keydown.enter="create()"/>
        <BaseInput v-model="model.birthday" type="date" label="Geburtsdatum"/>
        <BaseInput v-model="model.position"  type="text" label="Position" placeholder="Sturm, Tor, Flügelspieler, etc..." @keydown.enter="create()"/>
        <BaseButton type="primary" @click="create()">Spieler erstellen</BaseButton>
      </form>
    </card>
  </div>
</template>

<script>
import { BaseInput, BaseButton } from '@/components'
export default {
  name: 'TeamCreate',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {}
  },
  methods: {
    create() {
      const model = this.model
      const uId = this.$store.state.user.userId
      if (!uId) {
        if (!localStorage.getItem('userId')) {
          alert('Please log in again! An error occured!')
        }
      }
      model.userId = uId
      this.$store.dispatch('Players/createPlayer', { ...model })
    }
  }
}
</script>
