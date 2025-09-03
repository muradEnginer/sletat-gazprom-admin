import { observer } from 'mobx-react-lite'
import { Button, Flex } from 'antd'
import {
  SunOutlined,
  MoonOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import clsx from 'clsx'
import { authStore, themeStore } from '@store'
import { Logo } from '@assets/svg'
import s from './index.module.scss'
import { Link } from 'react-router'

export const Header = observer(() => {
  const handleToggleTheme = () => {
    themeStore.toggleTheme()
  }

  const handleToggleNav = () => {
    themeStore.toggleNav()
  }

  const handleLogout = () => {
    authStore.logout()
  }

  const theme = themeStore.theme === 'light' ? s.light : s.dark

  return (
    <header className={clsx(s.header, theme)}>
      <Flex justify="between" align="center">
        <Link to="/" className={s.logo}>
          <Logo />
        </Link>

        <Flex gap={4} justify="between" className={s.wrap}>
          <Button color="default" variant="text" onClick={handleToggleNav}>
            {themeStore.isOpenNav ? <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
          </Button>

          <Flex gap={4} justify="end" flex="auto">
            <Button color="default" variant="text"onClick={handleToggleTheme}>
              {themeStore.theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
            </Button>

            <Button color="default" variant="text" onClick={handleLogout}>
              <LogoutOutlined />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </header>
  )
})