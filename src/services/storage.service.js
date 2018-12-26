const TOKEN_KEY = 'x-access-token'

const TokenService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },
  saveToken (accessToken) {
    console.log('Set token ' + accessToken)
    localStorage.setItem(TOKEN_KEY, accessToken)
  },
  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export { TokenService }
