import React, { Component } from 'react';
import { Divider } from 'antd';

import { Wrapper, TopWrapper, CenterWrapper } from './style';

class DepartmentConfiguration extends Component {
  render() {
    return (
      <Wrapper>
        <TopWrapper>部门配置维护</TopWrapper>
        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default DepartmentConfiguration;
