import React, { Component } from 'react';
import { Layout } from 'antd';
import './layout.scss';

// define layout header Sider content footer
const { Header, Sider, Content, Footer } = Layout; 
class PageLayout extends Component {

  render() {
    return (
      <Layout className="layout">
        <Sider>this is Sider</Sider>
        <Layout>
          <Header>this is header</Header>
          <Content>this content {this.props.children}</Content>
          <Footer>this is footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout