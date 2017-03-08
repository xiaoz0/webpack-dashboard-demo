import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';

class Buttons extends Component {
  render() {
    return (
      <Row type="flex">
        <Row gutter={8}>
          <Col span={6}>
            <Button>button</Button>
          </Col>
          <Col span={6}>
            <Button type="primary">button</Button>
          </Col>
          <Col span={6}>
            <Button type="dashed">button</Button>
          </Col>
          <Col span={6}>
            <Button type="danger">button</Button>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Buttons
