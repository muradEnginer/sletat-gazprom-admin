import { Typography } from 'antd'
import { observer } from 'mobx-react-lite'
import { Content } from '@components'

export const DashboardPage = observer(() => {
  return (
    <Content>
      <Typography.Title>
        Dashboard
      </Typography.Title>
    </Content>
  )
})

export default DashboardPage