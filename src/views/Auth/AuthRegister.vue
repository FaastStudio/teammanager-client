<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <card class="col-md-4 col-12">
    <h3 slot="header" class="title">Registrieren</h3>
    <form>
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
import { UserService } from '@/services/user.service.js'
import { TokenService } from '@/services/storage.service.js'
import Message from '@/components/NotificationPlugin/Notification'
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
      UserService.register(
        this.model.name,
        this.model.email,
        this.model.password
      ).then(res => {
        if (res.auth) {
          this.checkLogin(res.userId)
        } else {
          this.notifyVue(
            'Etwas ist wohl schief gelaufen! Bitte noch mal probiern',
            'danger'
          )
        }
      })
    },
    checkLogin(userId) {
      if (TokenService.getToken()) {
        this.$store.commit('setAsLoggedIn')
        this.$store.commit('setUserId', userId)
        if (this.$store.state.auth.loggedIn) {
          this.$router.push('/dashboard')
        }
        this.notifyVue('Willkommen!', 'success')
      } else {
        this.notifyVue(
          'Etwas ist wohl schief gelaufen! Bitte noch mal probiern',
          'danger'
        )
      }
      if (this.$store.state.auth.loggedIn) {
        this.$router.push('/dashboard')
      }
    },
    notifyVue(message, type) {
      this.$notify({
        component: Message,
        message: message,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: type
      })
    }
  }
}
</script>
