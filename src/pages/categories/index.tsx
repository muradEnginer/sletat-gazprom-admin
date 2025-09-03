import { Link } from 'react-router'
import { observer } from 'mobx-react-lite'
import { Space, Table, Tooltip, type TableProps } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { Content, Head, TableActions } from '@components'
import { categories } from '@moc'

const columns: TableProps['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 120,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (text, record) => (
      <Tooltip title="Просмотр">
        <Link
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          to={`/popular-services/${record.id}`}
        >
          <EyeOutlined />
          {text}
        </Link>
      </Tooltip>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 600,
  },
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    width: 120,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <TableActions href={`/popular-services/${record.id}`} />
    ),
  },
]

export const Categories = observer(() => {
  return (
    <Content>
      <Head
        title="Популярные удобства"
        path="/popular-services"
        withButton
      />

      <Space direction="vertical" style={{ width: '100%' }}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
        />
      </Space>
    </Content>
  )
})

export default Categories