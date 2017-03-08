import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSuccess, dispatchError, dispatchWaring } from 'actions/test_action';
class Test extends Component {
  render() {
    const { status } = this.props.test;

    return (
      <div onClick={this.click.bind(this)}>hello page test: {status}</div>
    );
  }

  click() {
    const { status } = this.props.test;
    switch (status) {
      case 'success':
        this.props.dispatch(dispatchError());
        break;
      case 'error': 
        this.props.dispatch(dispatchWaring());
        break;
      default:
        this.props.dispatch(dispatchSuccess());
        break;
    }    
  }

};

const mapStateTopProps = (state) => ({
  test: state.test,
})
export default connect(mapStateTopProps)(Test)
