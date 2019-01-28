import React, { Component } from 'react';
import { Divider, Input, TreeSelect, Button } from 'antd';
import { Wrapper, TopWrapper, CenterWrapper, TableWrapper, TableBelow, InputWrapper } from './style';

const TreeNode = TreeSelect.TreeNode;

class NewConfiguration extends Component {
  state = {
    value: undefined,
  };

  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          部门配置维护 <Button type="primary">新增</Button>
        </TopWrapper>
        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />
          <TableWrapper>
            部门配置维护-新建模板
            <TableBelow>
              <div style={{ marginBottom: 16, width: '50%' }}>
                <InputWrapper>
                  {<b style={{ color: '#cf1322' }}>*</b>}
                  <Input addonBefore="部门编码" defaultValue="规则1" />
                </InputWrapper>
              </div>
              <div style={{ marginBottom: 16, width: '50%' }}>
                <InputWrapper>
                  {<b style={{ color: '#cf1322' }}>*</b>}
                  <Input addonBefore="部门名称" defaultValue="规则2" />
                </InputWrapper>
              </div>

              <InputWrapper style={{ width: '50%' }}>
                {<b style={{ color: '#cf1322' }}>*</b>}
                <TreeSelect
                  showSearch
                  style={{ width: 300 }}
                  value={this.state.value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder="对应OA部门"
                  allowClear
                  treeDefaultExpandAll
                  onChange={this.onChange}
                >
                  <TreeNode value="parent 1" title="parent 1" key="0-1">
                    <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                      <TreeNode value="leaf1" title="my leaf" key="random" />
                      <TreeNode value="leaf2" title="your leaf" key="random1" />
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                      <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                    </TreeNode>
                  </TreeNode>
                </TreeSelect>
              </InputWrapper>
            </TableBelow>
          </TableWrapper>
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default NewConfiguration;
