<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <card class="col-md-4 col-12">
    <h3 slot="header" class="title">Registrieren</h3>
    <div v-if="errors.length">
      <span class="danger" v-for="(error, index) in errors" :key="index">{{ error }}</span>
    </div>
    <form @submit="checkForm">
      <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Name" type="text" v-model="model.name" placeholder="Voller Name"></base-input>
      </div>
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input
          label="Email Addresse"
          type="email"
          v-model="model.email"
          placeholder="team@email.com"
          required="true"
        ></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input
          label="Passwort"
          type="password"
          v-model="model.password"
          placeholder="Passwort"
          required="true"
          @keyup.enter.native="register()"
        ></base-input>
      </div>
    </div>
    <div class="row align-items-center">
      <base-button @click="register()" slot="footer" type="primary" fill>Senden</base-button>
      <router-link to="/login" slot="footer" class="ml-4 mt-1">Schon dabei?</router-link>
    </div>
    </form>
  </card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      errors: []
    }
  },
  computed: {
    input() {
      return this.model
    }
  },
  methods: {
    register() {
      this.checkForm()
      if (this.errors.length === 0) {
        store.dispatch('Auth/register', this.model)
      }
    },
    checkForm() {
      if (
        !this.model.name &&
        !this.model.email &&
        !this.model.password &&
        !this.model.email.includes('@')
      ) {
        this.errors.push('Bitte alle Felder füllen!')
      }
      if (!this.model.name) {
        this.errors.push('Bitte Name eingeben!')
      }
      if (!this.model.email && !this.model.email.includes('@')) {
        this.errors.push('Bitte überprüfe deine Email!')
      }
    }
  }
}
</script>
