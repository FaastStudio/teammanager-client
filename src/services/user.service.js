import ApiService from './api.service'
import { TokenService } from './storage.service'

class AuthenticationError extends Error {
  constructor (errorCode, message) {
    super(message)
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {

  // Login User and store access token to TokenService
  // @returns access_token
  // @throws AuthenticationError

  login: async (email, password) => {
    const requestData = {
      method: 'post',
      url: '/api/auth/login',
      data: {
        email: email,
        password: password
      }
    }
    try {
      const response = await ApiService.customRequest(requestData)

      console.log(response)
      TokenService.saveToken(response.data.token)
      TokenService.getToken()
      ApiService.setHeader()

      return response.data.token
    } catch (err) {
      throw new AuthenticationError(err.response.status, err.response.data.detail)
    }
  },
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
      const regresponse = await ApiService.customRequest(requestData)
      console.log('Registered' + regresponse)

      const response = await ApiService.customRequest({
        method: 'post',
        url: '/api/auth/login',
        data: {
          email: email,
          password: password
        }
      })
      console.log(response)
      TokenService.saveToken(response.data.token)
      TokenService.getToken()
      ApiService.setHeader()
      return response.data.token
    } catch (err) {
      throw new AuthenticationError(err.response.status, err.response.data.detail)
    }
  },
  logout () {
    // RMV TOKEN AND HEADER
    TokenService.removeToken()
    ApiService.removeHeader()
  }
}

export default UserService

export { UserService, AuthenticationError }
