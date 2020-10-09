import React from "react";
import { Menu } from "antd";
import { OrderedListOutlined, EyeOutlined } from '@ant-design/icons';
import {MenuUnfoldOutlined,MenuFoldOutlined,ProjectOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
   
    SideBar
   
} from '../../Components'
const { SubMenu } = Menu;

function Navbar(collaps) {
    
    const[collapse,setcollapse] = useState(false);
  
    const toggle = () => setcollapse(!collapse);
  
   
    return (
        <div id="navbar">
              <div trigger={null} collapsible collapsed={collapse} style={{position:"fixed"}}>
                    <SideBar />
                </div>
            <Menu
                // onClick={}
                selectedKeys={["project:1", "view:features"]}
                mode="horizontal"
            >
               
                <Menu.Item key="app1" >{React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                       
                    })}</Menu.Item>
                <strong>IRT</strong>
                    
                    
                
                <Menu.Item key="app" disabled ></Menu.Item>
                <SubMenu key="Projects" icon={<OrderedListOutlined />} title="Projects">
                    <Menu.Item key="project:1" >1_Rally Template User Stories</Menu.Item>
                    <Menu.Item key="project:2">Enigma</Menu.Item>
                </SubMenu>
                <Menu.Item key="mail">
                    
                </Menu.Item>
                <SubMenu key="ViewMode" icon={<EyeOutlined />} title="View Mode">
                    <Menu.Item key="view:features">Features</Menu.Item>
                    <Menu.Item key="view:capabilities">Capabilities</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}

export default Navbar;