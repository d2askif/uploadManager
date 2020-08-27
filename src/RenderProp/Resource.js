import React from 'react';

class RenderProp extends React.Component {
  state = {
    error: false,
    loading: false,
    data: {},
  };
  render() {
    return this.props.render(this.state);
  }
}

export default RenderProp;
