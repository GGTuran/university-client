/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const MainLayout = () => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header >
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
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
