import { makeAutoObservable } from 'mobx'

class ThemeStore {
  theme: 'dark' | 'light' = "light"
  isOpenNav: boolean = true
  
  constructor() {
    makeAutoObservable(this)

    this.initTheme()
  }

  toggleNav = () => {
    this.isOpenNav = !this.isOpenNav
  }

  initTheme = () => {
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    if (theme) {
      this.setTheme(theme as ThemeStore['theme'])
    } else {
      this.setTheme(prefersDark)
    }
  }

  setTheme = (theme: ThemeStore['theme']) => {
    this.theme = theme
    localStorage.setItem('theme', theme)
  }

  toggleTheme = () => {
    if (this.theme === 'dark') {
      this.setTheme('light')
    } else {
      this.setTheme('dark')
    }
  }
}

const themeStore = new ThemeStore()

export { themeStore }
