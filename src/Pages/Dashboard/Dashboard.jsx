import React from 'react';
import { Layout } from "antd";
import DataTable from "react-data-table-component";
import {MenuUnfoldOutlined,MenuFoldOutlined,ProjectOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {
    Navbar,
    GanttChart,
    tasks,
    columns,
    SideBar
   
} from '../../Components'

const { Sider,Header } = Layout;

export default function Dashboard() {
    
    return(
        <>
            <Layout>
            <Header>  <Navbar collapse={collapse}/>
          </Header>
            <Layout>
               
                
                <Sider id="left" theme="light" width="400">
                    <DataTable
                        columns={columns}
                        data={tasks}
                    />
                </Sider>
                <Layout id="right">
                    <br/><br/>
                    <GanttChart mode="Week" tasks={tasks} />
                   </Layout>
                   </Layout>
            </Layout>
        </>
    );
}