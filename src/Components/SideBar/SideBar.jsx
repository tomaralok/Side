import React from "react";
import { Layout, Menu } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,ProjectOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;

function  SideBar() {
  




    return (

     
       <>
          <div className="logo" />
            <Menu theme="dark"
              mode="inline" 
              defaultSelectedKeys={['1']} 
              style={{ height: '100%', borderRight: 0, margin: '44px 0px',padding:0
              }}
            >
              
              
              <Menu.Item key="1" icon={<ProjectOutlined />}>
                Project 1
              </Menu.Item>
              <Menu.Item key="2" icon={<ProjectOutlined />}>
                Project 2
              </Menu.Item>
              <Menu.Item key="3" icon={<ProjectOutlined />}>
                Project 3
              </Menu.Item>
              <Menu.Item key="4" icon={<ProjectOutlined />}>
                Project 4
              </Menu.Item>
            </Menu>
          
        </>
      
    );
  }


export default SideBar;
