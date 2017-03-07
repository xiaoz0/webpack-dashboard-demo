import React, { Component } from 'react';

class Layout extends Component {

  render() {
    return (
      <div className="layout">
        <div>hello wolrd</div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout