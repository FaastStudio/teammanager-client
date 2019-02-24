<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <card class="col-md-4 col-12">
    <h3 slot="header" class="title">Registrieren</h3>
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
const fb = require('../../db/firebaseConfig.js')
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
    return {}
  },
  computed: {
    input() {
      return this.model
    }
  },
  methods: {
    register() {
      fb.auth
        .createUserWithEmailAndPassword(this.model.email, this.model.password)
        .then(user => {
          this.$store.commit('setCurrentUser', user.user)
          // create user obj
          fb.usersCollection
            .doc(user.user.uid)
            .set({
              name: this.form.name,
              createdOn: new Date()
            })
            .then(() => {
              this.$store.dispatch('fetchUserProfile')
              this.$router.push('/dashboard')
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
