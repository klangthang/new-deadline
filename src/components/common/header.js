import { Menu, Layout} from "antd";
const {Header} = Layout;
const AppHeader = () => {
    return ( 
      <div className="container-fluid">
          <Layout className="layout">
              <Header>
                  <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="blog">Blog</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                  </Menu>
              </Header>
          </Layout>
      </div>
    );
}
 
export default AppHeader;