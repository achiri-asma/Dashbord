import React, { useState } from 'react';
import  {  useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import{AiFillDashboard} from 'react-icons/ai';
import {BsFillChatDotsFill,BsFillCalendarCheckFill,BsPersonFill,BsFillCartCheckFill} from'react-icons/bs';
import {BiCategoryAlt} from'react-icons/bi';

import {ImBlog} from 'react-icons/im';
import {FaClipboardList,} from'react-icons/fa';
import { Layout, Menu, theme } from 'antd';
import {MdSettings,MdOutlineLogout} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import Products from '../components/Products';
const { Header, Sider, Content } = Layout;

const Mainlayout=() =>{
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
const navigate=useNavigate();
  return (
    <Layout>
      <Sider >
        <div className="logo" />
        <Menu
         theme="#FBE7D7"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick ={({key})=>{
                  if(key === 'signout'){}
                  else{navigate(key);}
          }}
          items={[
            {
              key: '',
              icon: <AiFillDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BsPersonFill className='fs-4'/>,
              label: 'Customers',
              children:[
                {key: 'customer list',
                icon: <BsPersonFill className='fs-4'/>,
                label: ' Customer List',
                
              },
              ]
            },
            {
              key: 'catalog',
              icon: <BsFillCartCheckFill className='fs-4'/>,
              label: 'Catalog',
              children:[
                {
                  
                    key: ' products',
                    icon: <BsFillCartCheckFill  className='fs-4'/>,
                    label: 'Add Product',
                    
                  },
                  {
                  
                    key: ' products-list',
                    icon: <BsFillCartCheckFill className='fs-4'/>,
                    label: ' Products List',
                  },
                  {
                  
                    key: ' category',
                    icon: <BiCategoryAlt className='fs-4'/>,
                    label: 'Category',
                    
                  },
              ]},
              {
                key: 'orders',
                icon: <FaClipboardList className='fs-4'/>,
                label: 'Orders',
                children:[
                  {key: 'orders list',
                  icon: <ImBlog className='fs-4'/>,
                  label: ' Order List',},
                  ]},
                  {key: 'calendar',
                  icon: <BsFillCalendarCheckFill className='fs-4'/>,
                  label: ' Calendar',},
              {key: 'chat',
              icon: <BsFillChatDotsFill className='fs-4'/>,
              label: ' Customer service',},
              {key: 'settings',
              icon: <MdSettings className='fs-4'/>,
              label: ' Settings',children:[
                {key: 'orders list',
                icon: <CgProfile className='fs-4'/>,
                label: 'Profil',},
                {key: 'orders list',
                icon: <MdOutlineLogout className='fs-4'/>,
                label: ' Log out',},
                ]},
            
          ]}
        />
      </Sider>
      <Layout> 
        <Header style={{ padding: 0, background: colorBgContainer }} className='d-flex justify-content-between ps-1 pe-5'>
          {React.createElement(collapsed ? MenuUnfoldOutlined:MenuFoldOutlined,
           {
            className:"trigger",
            onClick:() => setCollapsed(!collapsed),
           })
           }

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
      <Products/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;