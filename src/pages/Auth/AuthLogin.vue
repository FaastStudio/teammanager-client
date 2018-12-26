
<template>
  <card class="col-md-4 col-12 col-sm-12 offset-md-4 offset-md-1" style="margin-top:25vh">
    <h3 slot="header" class="title">Anmelden</h3>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Email Addresse"
                  type="email"
                  v-model="model.email"
                  placeholder="team@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Passwort"
                  type="password"
                  v-model="model.password"
                  placeholder="Passwort">
        </base-input>
      </div>
    </div>
    <div class="row align-items-center">
      <base-button @click="login" slot="footer" type="primary" fill>Login</base-button>
      <router-link to="/register" slot="footer" class="ml-4">Noch nicht dabei?</router-link>
    </div>
  </card>
</template>

<script>
import { UserService } from '@/services/user.service.js'
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      data: null,
      response: null,
      resStatus: null
    }
  },
  methods: {
    login () {
      UserService.login(this.model.email, this.model.password)
      this.$router.push('/dashboard')
    }
  },
  computed: {
    input () {
      return this.model
    }
  }
}
</script>
