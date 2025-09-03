import { Menu } from 'antd';
import { useLocation } from 'react-router'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { themeStore } from '@store'
import { sidebar } from '@config'

import s from './index.module.scss'

export const SideBar = observer(() => {
  const { pathname } = useLocation()
  const theme = themeStore.theme === 'light' ? s.light : s.dark
  
  const activeKey = (() => {
    for (const item of sidebar) {
      if (item.children) {
        const child = item.children.find(child => 
          (child.path as string)?.includes(pathname.split('/')[1])
        );
        if (child) return child.key;
      } else if ((item.path as string)?.includes(pathname.split('/')[1])) {
        return item.key;
      }
    }
    return 'dashboard';
  })();

  const openKeys = sidebar.find(item => item?.children?.find(child => child.key === activeKey))?.key as string;

  return (
    <aside className={clsx(s.sidebar, theme, !themeStore.isOpenNav && s.hidden)}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[activeKey as string]}
        defaultOpenKeys={[openKeys]}
        items={sidebar}
        className={s.menu}
      />

      <div className={s.title}>
        Admin Panel v1.0
      </div>
    </aside>
  )
})