import { Link } from "react-router"
import { Button, Popconfirm, Space, Tooltip } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

interface TableActionsProps {
  href: string
}

export const TableActions = ({ href }: TableActionsProps) => {
  return (
    <Space size="small" wrap>
      <Link to={href}>
        <Tooltip title="Редактировать">
          <Button color="primary" variant="solid" icon={<EditOutlined />} />
        </Tooltip>
      </Link>
      <Popconfirm
        title="Вы уверены, что хотите удалить?"
        onConfirm={() => {}}
        okText="Да"
        cancelText="Нет"
      >
        <Tooltip title="Удалить">
          <Button color="danger" variant="solid" icon={<DeleteOutlined />} />
        </Tooltip>
      </Popconfirm>
    </Space>
  )
}