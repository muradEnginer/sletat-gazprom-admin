import type { MouseEvent } from "react"
import { Button, Flex, Form, Input } from "antd"
import { Link } from "react-router"
import s from './index.module.scss'

interface CreateCategoryProps {
  onClose?: () => void
}

type FieldType = {
  name: string
  description: string
  icon: string
}

export const CreateCategory = ({
  onClose,
}: CreateCategoryProps) => {
  const fields = [
    {
      name: "name",
      label: "Название",
      rules: [{ required: true, message: "Пожалуйста, введите название" }],
      element: <Input size="large" />
    },
    {
      name: "description",
      label: "Описание",
      rules: [{ required: true, message: "Пожалуйста, введите описание" }],
      element: <Input.TextArea rows={4} />
    },
    {
      name: "icon",
      label: "Иконка",
      rules: [{ required: true, message: "Пожалуйста, выберите иконку" }],
      element: <Input size="large" />
    },
  ]

  const handleClose = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClose) {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <div className={s.root}>
      <Form
        name="create-category"
        layout="vertical"
      >
        {fields.map((field) => (
          <Form.Item<FieldType>
            key={field.name}
            label={field.label}
            rules={field.rules}
            className={s.formItem}
          >
            {field.element}  
          </Form.Item>
        ))}

        <Flex gap={6} align="center" style={{ marginTop: '24px' }}>
          <Button type="primary" variant="solid">
            Создать
          </Button>
          <Button color="default" variant="outlined">
            Сбросить
          </Button>

          <Link to="/popular-services" style={{ marginLeft: 'auto' }} onClick={handleClose}>
            <Button color="danger" variant="solid">
              Отмена
            </Button>
          </Link>
        </Flex>
      </Form>
    </div>
  )
}