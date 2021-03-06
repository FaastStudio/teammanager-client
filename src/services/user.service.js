import ApiService from './api.service'
import { TokenService } from './storage.service'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {
  // Login User and store access token to TokenService
  // @returns access_token
  // @throws AuthenticationError
  register: async (name, email, password) => {
    const requestData = {
      method: 'post',
      url: '/api/auth/register',
      data: {
        name: name,
        email: email,
        password: password
      }
    }
    try {
      // Register
      await ApiService.customRequest(requestData)

      // Login
      const response = await ApiService.customRequest({
        method: 'post',
        url: '/api/auth/login',
        data: {
          email: email,
          password: password
        }
      })
      TokenService.saveToken(response.data.token)
      TokenService.getToken()
      ApiService.setHeader()
      return response.data
    } catch (err) {
      throw new AuthenticationError(
        err.response.status,
        err.response.data.detail
      )
    }
  },
  logout() {
    // RMV TOKEN AND HEADER
    TokenService.removeToken()
    ApiService.removeHeader()
    localStorage.removeItem('userId')
  }
}

export default UserService

export { UserService, AuthenticationError }
