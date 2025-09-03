import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router"
import { Breadcrumb, Button, Flex, Tooltip, Typography } from "antd"
import type { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'

interface Head {
  title: string
  path?: string
  breadcrumb?: BreadcrumbItemType[]
  withButton?: boolean
  withEdit?: boolean
  withDelete?: boolean
}

export const Head = ({
  title,
  path,
  breadcrumb,
  withButton = false,
  withDelete = false,
  withEdit = false,
}: Head) => {
  return (
    <>
      {breadcrumb && (
        <Breadcrumb items={breadcrumb} />
      )}
      <Flex align="end" gap={8} justify="space-between" style={{ marginBottom: '24px' }}>
        <Typography.Title level={2} style={{ margin: '24px 0 0' }}>
          {title}
        </Typography.Title>
        
        {withEdit && (
          <Link to={`${path}?edit=true`} style={{ marginLeft: '24px' }}>
            <Tooltip title="Редактировать">
              <Button type="primary" icon={<EditOutlined />} />
            </Tooltip>
          </Link>
        )}

        {withDelete && (
          <Link to={path || ''} style={{ marginRight: 'auto', marginLeft: !withEdit ? '24px' : 0 }}>
            <Tooltip title="Удалить">
              <Button color="danger" variant="solid" icon={<DeleteOutlined />} />
            </Tooltip>
          </Link>
        )}

        {withButton && (
          <Link to={`${path}/create`}>
            <Button type="primary" icon={<PlusOutlined />}>
              Добавить
            </Button>
          </Link>
        )}
      </Flex>
    </>
  )
}