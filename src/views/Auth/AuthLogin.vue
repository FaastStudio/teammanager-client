
<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <card class="col-12 col-md-8 col-lg-4">
      <h3 slot="header" class="title">Anmelden</h3>
      <form>
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
            <div class="col mb-3 d-flex align-items-center">
              <input v-model="rememberMe" type="checkbox" name="rememberMe" id="rememberMe" class="ml-0 mr-2">
              <span>Angemeldet bleiben?</span>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <base-button @click="login()" slot="footer" type="submit" class="ml-3" :class="'btn-primary'" fill>Login</base-button>
          <router-link to="/register" slot="footer" class="mx-auto mt-3 my-md-auto mt-lg-3">Noch keinen Account? Klicke hier!</router-link>
        </div>
      </form>
    </card>
  </div>
</template>

<script>
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
      rememberMe: false
    }
  },
  methods: {
    login() {
      const payload = {}
      payload.email = this.model.email
      payload.password = this.model.password
      payload.rememberMe = this.$store.dispatch('Auth/login', payload)
    }
  }
}
</script>
