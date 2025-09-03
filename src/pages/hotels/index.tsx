import { Space, Table, Tag, type TableProps } from 'antd'
import { observer } from 'mobx-react-lite'
import { Content, Head, TableActions, TableTags } from '@components'
import { hotels } from '@moc'
import { createStyles } from 'antd-style';


const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token as never;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

const columns: TableProps<typeof hotels[number]>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: 'Reception',
    dataIndex: 'reception',
    key: 'reception',
    width: 200,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 200,
  },
  {
    title: 'Popular Amenities',
    dataIndex: 'popular_amenities',
    key: 'popular_amenities',
    width: 250,
    render: (_, record) => (
      <TableTags data={record.popular_amenities} />
    ),
  },
  {
    title: 'In Rooms',
    dataIndex: 'in_rooms',
    key: 'in_rooms',
    width: 250,
    render: (_, record) => (
      <TableTags data={record.in_rooms} />
    ),
  },
  {
    title: 'Nutrition',
    dataIndex: 'nutrition',
    key: 'nutrition',
    width: 300,
    render: (_, record) => (
      <TableTags data={record.nutrition} />
    )
  },
  {
    title: 'Business Services',
    dataIndex: 'business_services',
    key: 'business_services',
    width: 250,
    render: (_, record) => (
      <TableTags data={record.business_services} />
    ),
  },
  {
    title: 'Household Services',
    dataIndex: 'household_services',
    key: 'household_services',
    width: 300,
    render: (_, record) => (
      <TableTags data={record.household_services} />
    ),
  },
  {
    title: 'General',
    dataIndex: 'general',
    key: 'general',
    width: 300,
    render: (_, record) => (
      <TableTags data={record.general} />
    ),
  },
  {
    title: 'Accommodation Conditions',
    dataIndex: 'accommodation_conditions',
    key: 'accommodation_conditions',
    width: 300,
    render: (_, record) => (
      <TableTags data={record.accommodation_conditions} />
    ),
  },
  {
    title: 'Room Types',
    dataIndex: 'room_types',
    key: 'room_types',
    render: (_, record) => (
      <Space size="small" wrap>
        {record.room_types.map((type) => (
          <Tag key={type}>{type}</Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'Images',
    dataIndex: 'images',
    key: 'images',
    width: 300,
    render: (_, record) => (
      <Space size="small" wrap>
        {record.images.slice(0, 1).map((image) => (
          <img width={50} height={50} src={image} alt={record.name} />
        ))}
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    width: 120,
    fixed: 'right',
    render: (_, record) => (
      <TableActions href={`/hotels/${record.id}`} /> 
    ),
  },
];

export const HotelsPage = observer(() => {
  const { styles } = useStyle();

  return (
    <Content>
      <Head
        title="Отели"
        path="/hotels"
        withButton
      />

      <Table
        bordered
        className={styles.customTable}
        dataSource={hotels}
        columns={columns}
        scroll={{ x: 'max-content' }}
      />
    </Content>
  )
})

export default HotelsPage