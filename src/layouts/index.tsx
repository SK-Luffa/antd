import { Link, Outlet } from "umi";
import "./index.less";
import type { MenuProps } from "antd";
import { Layout as Layouts, ConfigProvider, Menu } from "antd";
import { Component } from "react";
const { Header, Footer, Sider, Content } = Layouts;

const themeConfig = {
  token: {},
};

const items1: MenuProps["items"] = [1, 2, 3, 4].map((key) => ({
  key,
  label: `nav${key}`,
  children: [1, 2, 3, 4].map((keys) => ({
    keys,
    label: `navs${key}`,
  })),
}));

export default function Layout() {
  return (
    <ConfigProvider theme={{
      components:{
        Layout:{
          siderBg:'#fefefe',
          
        }
      }
    }}>
      <Layouts>
        <Header className="layout_header" >
        <Outlet />
        </Header>
        <Layouts>
          <Sider style={{ height: "100vh" }}>
            <Menu
              mode="inline"
              items={items1}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Sider>
          <Layouts>
            <Content>我来组成内容</Content>
            <Footer style={{ textAlign: "center" }}>我来组成页脚</Footer>
          </Layouts>
        </Layouts>
      </Layouts>
    </ConfigProvider>
  );
}
