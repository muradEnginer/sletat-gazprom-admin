import { RouterProvider } from 'react-router'
import { ConfigProvider, theme } from 'antd'
import { observer } from 'mobx-react-lite'
import { createRouter } from '@layout'
import { authStore, themeStore } from '@store'
import { useEffect } from 'react'

const App = observer(() => {
  useEffect(() => {
    document.body.classList.remove('is_light', 'is_dark')
    document.body.classList.add(themeStore.theme === 'light' ? 'is_light' : 'is_dark')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeStore.theme])

  return (
    <ConfigProvider
      theme={{
        algorithm: themeStore.theme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <RouterProvider router={createRouter(authStore.isLogin)} />
    </ConfigProvider>
  )
})

export default App
