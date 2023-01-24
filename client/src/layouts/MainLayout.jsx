import React from 'react';
// Antd
import { Layout } from 'antd';
// Router
import { Outlet } from 'react-router-dom';
// Components
import Navbar from '../components/Navbar';

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className='layout'>
      <Navbar />
      <Content
        style={{
          padding: '0 50px',
        }}>
        <div
          style={{
            background: 'white',
            minHeight: '280px',
            padding: '24px',
            margin: '16px 0',
          }}>
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}>
        Abdullah KUŞ
      </Footer>
    </Layout>
  );
};

export default MainLayout;
