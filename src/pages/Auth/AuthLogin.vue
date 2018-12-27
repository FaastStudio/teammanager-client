
<template>
  <card class="col-md-4 col-12 col-sm-12 offset-md-4 offset-md-1" style="margin-top:25vh">
    <h3 slot="header" class="title">Anmelden</h3>
    <form @submit="login()">
      <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Email Addresse"
                  type="email"
                  v-model="model.email"
                  placeholder="team@email.com"
                  @keyup.enter.native="login()"
                  required="true">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Passwort"
                  type="password"
                  v-model="model.password"
                  placeholder="Passwort"
                  @keyup.enter.native="login()"
                  required="true">
        </base-input>
      </div>
    </div>
    <div class="row align-items-center">
      <base-button  @click="login()" slot="footer" type="primary" fill>Login</base-button>
      <router-link to="/register" slot="footer" class="ml-4">Noch nicht dabei?</router-link>
    </div>
    </form>
  </card>
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
    return {
      data: null,
      response: null,
      resStatus: null
    }
  },
  methods: {
    login() {
      UserService.login(this.model.email, this.model.password).then(res => {
        if (res) {
          this.checkLogin()
        }
      })
    },
    checkLogin() {
      if (TokenService.getToken()) {
        this.$store.commit('setAsLoggedIn')
        if (this.$store.state.auth.loggedIn) {
          this.$router.push('/dashboard')
        }
        this.notifyVue('Willkommen zurück!', 'success')
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
  },
  computed: {
    input() {
      return this.model
    }
  }
}
</script>
