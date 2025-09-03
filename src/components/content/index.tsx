import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { themeStore } from '@store'
import s from './index.module.scss'

interface ContentProps {
  customClass?: string
  children: React.ReactNode
}

export const Content = observer(({
  children,
  customClass = '',
}: ContentProps) => {
  const theme = themeStore.theme === 'light' ? s.light : s.dark
  const open = themeStore.isOpenNav && s.open

  return (
    <div className={clsx(s.root, customClass, theme, open)}>
      <div className={s.content}>
        {children}
      </div>
    </div>
  )
})