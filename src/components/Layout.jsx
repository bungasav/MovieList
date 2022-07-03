import {  Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const LayoutApp = ({children}) => (
  <Layout>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 50,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
          borderRadius:"1.5rem"
        }}
      >
        {children}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    </Footer>
  </Layout>
);

export default LayoutApp;