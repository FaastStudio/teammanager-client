
<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <card class="col-12 col-md-8 col-lg-4">
      <h3 slot="header" class="title">Anmelden</h3>
      <form @submit.prevent.stop="login">
        <div class="row">
          <div class="col-sm-12">
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
          <div class="col-sm-12">
            <base-input
              label="Passwort"
              type="password"
              v-model="model.password"
              placeholder="Passwort"
              @keyup.enter.native="login()"
              required="true"
            ></base-input>
          </div>
        </div>
        <div class="row align-items-center">
          <base-button @click="login" slot="footer" type="submit" class="ml-3" :class="'btn-primary'" fill>Login</base-button>
          <router-link to="/register" slot="footer" class="ml-2 mx-lg-auto mt-3 my-md-auto mt-lg-3">Hier einen Account erstellen!</router-link>
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
    return {
      rememberMe: false,
      errors: []
    }
  },
  methods: {
    async login() {
      this.errors = []

      // Form Validation
      await this.checkForm()
      if (this.errors.length === 0) {
        fb.auth
          .signInWithEmailAndPassword(this.model.email, this.model.password)
          .then(user => {
            this.$store.commit('setCurrentUser', user.user)
            this.$store.dispatch('fetchUserProfile')
            this.$router.push('/dashboard')
          })
          .catch(err => {
            console.log(err)
            if (err.code === 'auth/user-not-found')
              this.notify(err.message, 'danger')
            if (err.code === 'auth/invalid-email')
              this.notify(err.message, 'danger')
          })
      }
    },
    notify(message, type) {
      this.$notify({
        message: message,
        timestamp: Date.now(),
        type: type,
        verticalAlign: 'top',
        horizontalAlign: 'center',
        timeout: 5000,
        showClose: true,
        closeOnClick: true
      })
    },
    checkForm() {
      if (!this.model.email && !this.model.password) {
        this.errors.push('Bitte alle Felder füllen!')
      }
      if (!this.model.email) {
        this.errors.push('Bitte überprüfe deine Email!')
      }
      if (!this.model.password) {
        this.errors.push('Bitte überprüfe dein Passwort!')
      }
    }
  }
}
</script>
