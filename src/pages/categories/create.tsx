import { Content, CreateCategory, Head } from '@components'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router'

export const CategoriesCreate = observer(() => {
  return (
    <Content>
      <Head
        title="Создание удобства"
        breadcrumb={[
          { title: <Link to="/popular-services">Популярные удобства</Link> },
          { title: 'Создание удобства' }
        ]}
      />

      <CreateCategory />
    </Content>
  )
})