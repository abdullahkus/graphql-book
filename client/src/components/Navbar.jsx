import React from 'react';
// Antd
import { Layout, Menu } from 'antd';
// Router
import { Link } from 'react-router-dom';

const { Header } = Layout;

const items = [
  {
    label: <Link to='/'>Home</Link>,
    key: 'home',
  },
  {
    label: 'Book',
    key: 'book',
    children: [
      {
        label: <Link to='/book-list'>Book List</Link>,
        key: 'homeList',
      },
      {
        label: <Link to='/book-add'>Book Add</Link>,
        key: 'bookAdd',
      },
    ],
  },
];

const Navbar = () => {
  return (
    <Header>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['home']}
        items={items}
      />
    </Header>
  );
};

export default Navbar;
