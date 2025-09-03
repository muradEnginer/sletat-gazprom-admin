import { observer } from 'mobx-react-lite'
import { Button, Form, Typography, Input } from 'antd';
import clsx from 'clsx'
import { Content } from '@components'
import { Logo } from '@assets/svg'
import { authStore } from '@store';
import s from './index.module.scss'

type FieldType = {
  email: string
  password: string
}

export const Auth = observer(() => {
  const onFinish = (values: unknown) => {
    console.log(values)
    authStore.login('token')
  }
  return (
    <div className={clsx(s.root)}>
      <Content customClass={s.content} styles={{ paddingLeft: 0 }}>
        <div className={s.logo}>
          <Logo />
        </div>

        <Typography.Title 
          level={4}
          style={{ margin: '0 0 24px', fontFamily: 'Roboto' }}
        >
          Вход в административную панель
        </Typography.Title>

        <Form
          className={s.form}
          onFinish={onFinish}
          initialValues={{ email: '', password: '' }}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: 'Введите ваш email!' },
              { 
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: 'Некорректный email адрес!'
              }
            ]}
            style={{ marginBottom: 12 }}
            label="Email"
          >
            <Input size='large' />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[
              {required: true, message: 'Введите ваш пароль!' },
              { min: 6, message: 'Пароль должен содержать минимум 6 символов!' },
              { 
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 
                message: 'Пароль должен содержать заглавные буквы, строчные буквы и цифры!'
              }
            ]}
            style={{ marginBottom: 32 }}
            label="Password"
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </div>
  )
})