/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* <h1>Main content will be there</h1> */}
            <Outlet></Outlet>
          </div>
        </Content>

      </Layout>
    </Layout>
  );
};

export default MainLayout;
