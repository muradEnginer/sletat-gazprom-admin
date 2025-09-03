import { Header, SideBar } from '@components'
import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router'

export const AdminLayout = observer(() => {
  return (
    <>
      <Header />
      <main className='main-page'>  
        <SideBar />
        <Outlet />
      </main>
    </>
  )
})