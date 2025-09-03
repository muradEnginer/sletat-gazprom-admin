import { Link } from 'react-router';
import { AppstoreOutlined, BarsOutlined, EnvironmentOutlined } from '@ant-design/icons'

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  path?: string;
  children?: MenuItem[]
}

export const sidebar: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Панель управления',
    icon: <AppstoreOutlined />,
    extra: <Link to="/" />,
    path: '/',
  },
  // {
  //   key: 'users',
  //   label: 'Пользователи',
  //   icon: <UserOutlined />,
  //   extra: <Link to="/users" />,
  //   path: '/users',
  // },
  {
    key: 'hotels',
    label: 'Отели',
    icon: <EnvironmentOutlined />,
    extra: <Link to="/hotels" />,
    path: '/hotels',
  },
  {
    key: 'services-categories',
    label: 'Категории Услуг',
    icon: <BarsOutlined />,
    children: [
      {
        key: 'popular-services',
        label: 'Популярные удобства',
        extra: <Link to="/popular-services" />,
        path: '/popular-services',
      }
    ],
  },
  
  // {
  //   key: 'bookings',
  //   label: 'Бронирование',
  //   icon: <BookOutlined />,
  //   extra: <Link to="/bookings" />,
  //   path: '/bookings',
  // },
]