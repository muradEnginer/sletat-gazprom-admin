import { makeAutoObservable } from 'mobx'

const token = localStorage.getItem('access_token')

class AuthStore {
  isLogin = false

  accessToken: string | null = token

  constructor() {
    makeAutoObservable(this)

    this.isLogin = !!token
    this.accessToken = token
  }

  login(token: string) {
    this.isLogin = true
    this.accessToken = token
    localStorage.setItem('access_token', token)
  }

  logout() {
    this.isLogin = false
    this.accessToken = null
    localStorage.removeItem('access_token')
  }
}

const authStore = new AuthStore()

export { authStore }
