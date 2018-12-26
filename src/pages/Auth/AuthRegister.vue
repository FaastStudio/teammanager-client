<template>
  <card class="col-md-4 col-12 col-sm-12 offset-md-4 offset-md-1" style="margin-top:25vh;">
    <h3 slot="header" class="title">Registrieren</h3>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Name" type="text" v-model="model.name" placeholder="Kilian Stallinger"></base-input>
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
        ></base-input>
      </div>
    </div>
    <div class="row align-items-center">
      <base-button @click="register()" slot="footer" type="primary" fill>Registrieren</base-button>
      <router-link to="/auth/login" slot="footer" class="ml-4 mt-1">Schon dabei?</router-link>
    </div>
  </card>
</template>

<script>
import { UserService } from '@/services/user.service.js'
import { TokenService } from '@/services/storage.service.js'
import NotificationTemplate from '@/pages/Notifications/NotificationTemplate'
export default {
  props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    data () {
      return {}
    },
    computed: {
      input() {
        return this.model
      }
    },
    methods: {
      register() {
        UserService.register(this.model.name, this.model.email, this.model.password)
        let token = TokenService.getToken()
        console.log(token)
        if (token) this.$router.push('/dashboard')
      }
    }
}
</script>
