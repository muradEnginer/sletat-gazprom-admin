import { observer } from 'mobx-react-lite'
import { Link, useParams, useSearchParams } from 'react-router'
import { Content, Head } from '@components'

export const CategoriesView = observer(() => {
  const [search] = useSearchParams()
  const { id } = useParams()
  const isEdit = !(search.get('edit') === 'true')

  return (
    <Content>
      <Head
        title="View Category"
        withEdit={isEdit}
        withDelete
        path={`/popular-services/${id}`}
        breadcrumb={[
          { title: <Link to="/popular-services">Популярные удобства</Link> },
          { title: 'View Category' }
        ]}
      />
    </Content>
  )
})