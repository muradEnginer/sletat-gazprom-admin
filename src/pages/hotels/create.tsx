import { Content, CreateHotel, Head } from '@components'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router'

export const HotelsCreate = observer(() => {
  return (
    <Content>
      <Head
        title="Создание отеля"
        breadcrumb={[
          { title: <Link to="/hotels">Отели</Link> },
          { title: 'Создание отеля' }
        ]}
      />

      <CreateHotel />
    </Content>
  )
})