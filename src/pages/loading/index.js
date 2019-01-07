import React, { Component } from 'react';
import { Icon } from 'antd';
import { Wrapper, LoadingWrapper } from './style';

class Loading extends Component {
  render() {
    return (
      <Wrapper>
        <LoadingWrapper>
          <Icon type="loading" style={{ fontSize: '100px', color: '#40a9ff' }} spin />
          lading...
        </LoadingWrapper>
      </Wrapper>
    );
  }
}

export default Loading;
