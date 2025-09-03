import { Button, Flex, Form, Input } from "antd"
import { Link } from "react-router"
import { HtmlEditor, ImageUpload } from "@components"
import { SelectWithButton } from "./select-with-button"
import s from './index.module.scss'

type FieldType = {
  name: string
  type: string
  address: string
  reception: string
  phone: string
  description: string
  popular_amenities: string[]
  in_rooms: string[]
  nutrition: string[]
  business_services: string[]
  household_services: string[]
  general: string[]
  accommodation_conditions: string[]
  room_types: string[]
  images: string[]
}

export const CreateHotel = () => {
  const fields = [
    {
      name: "name",
      label: "Название",
      rules: [{ required: true, message: "Please input your name!" }],
      element: <Input size="large" />
    },
    {
      name: "type",
      label: "Тип",
      rules: [{ required: true, message: "Please input your description!" }],
      element:  <SelectWithButton selectPlaceholder="Выберите тип" />
    },
    {
      name: "address",
      label: "Адрес",
      rules: [{ required: true, message: "Please input your address!" }],
      element: <Input size="large" />
    },
    {
      name: "reception",
      label: "Ресепшн",
      rules: [{ required: true, message: "Please input your reception!" }],
      element: <Input size="large" />
    },
    {
      name: "phone",
      label: "Телефон",
      rules: [{ required: true, message: "Please input your phone!" }],
      element: <Input size="large" />
    },
    {
      name: "description",
      label: "Описание",
      rules: [{ required: true, message: "Please input your description!" }],
      element: <HtmlEditor />
    },
    {
      name: "popular_amenities",
      label: "Популярные удобства",
      rules: [{ required: true, message: "Please input your popular amenities!" }],
      element: <SelectWithButton selectPlaceholder="Выберите популярные удобства" />
    },
    {
      name: "in_rooms",
      label: "В номерах",
      rules: [{ required: true, message: "Please input your in rooms!" }],
      element: <SelectWithButton selectPlaceholder="Выберите в номерах" />
    },
    {
      name: "nutrition",
      label: "Питание",
      rules: [{ required: true, message: "Please input your nutrition!" }],
      element: <SelectWithButton selectPlaceholder="Выберите питание" />
    },
    {
      name: "business_services",
      label: "Бизнес-сервисы",
      rules: [{ required: true, message: "Please input your business services!" }],
      element: <SelectWithButton selectPlaceholder="Выберите бизнес-сервисы" />
    },
    {
      name: "household_services",
      label: "Бытовые услуги",
      rules: [{ required: true, message: "Please input your household services!" }],
      element: <SelectWithButton selectPlaceholder="Выберите бытовые услуги" />
    },
    {
      name: "general",
      label: "Общие услуги",
      rules: [{ required: true, message: "Please input your general services!" }],
      element: <SelectWithButton selectPlaceholder="Выберите общие услуги" />
    },
    {
      name: "accommodation_conditions",
      label: "Условия проживания",
      rules: [{ required: true, message: "Please input your accommodation conditions!" }],
      element: <SelectWithButton selectPlaceholder="Выберите условия проживания" />
    },
    {
      name: 'room_types',
      label: 'Типы комнат',
      rules: [{ required: true, message: 'Please input your room types!' }],
      element: <SelectWithButton selectPlaceholder="Выберите типы комнат" />
    },
    {
      name: 'images',
      label: 'Изображения',
      rules: [{ required: true, message: 'Please input your images!' }],
      element: <ImageUpload />
    }
  ]

  return (
    <div className={s.root}>
      <Form
        name="create-hotel"
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

          <Link to="/hotels" style={{ marginLeft: 'auto' }}>
            <Button color="danger" variant="solid">
              Отмена
            </Button>
          </Link>
        </Flex>
      </Form>
    </div>
  )
}