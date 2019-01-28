import React, { Component } from 'react';
import { Divider, TreeSelect, Button, Select, Input } from 'antd';
import { Wrapper, TopWrapper, CenterWrapper, TableWrapper, TableBelow, BelowLeft, InputWrapper, DivWrapper } from './style';

const TreeNode = TreeSelect.TreeNode;
const Option = Select.Option;
const { TextArea } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class ExpenditureNewConfiguration extends Component {
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
          预算配置维护
          <div>
            <Button type="primary">保存</Button>
            <Button type="primary" style={{ margin: '0px 16px' }}>
              保存并新增
            </Button>
          </div>
        </TopWrapper>
        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />

          <TableWrapper>
            预算配置维护-新建模板
            <TableBelow>
              <BelowLeft>
                <DivWrapper>
                  <InputWrapper>年度：</InputWrapper>
                  <Select defaultValue="2019" style={{ width: '70%' }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </DivWrapper>
                <DivWrapper>
                  <InputWrapper>支出大类：</InputWrapper>
                  <Select defaultValue="联盟人力" style={{ width: '70%' }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </DivWrapper>
                <DivWrapper>
                  <InputWrapper>支出项目：</InputWrapper>
                  <Select defaultValue="职工薪酬" style={{ width: '70%' }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </DivWrapper>

                <DivWrapper>
                  <InputWrapper>生效标志：</InputWrapper>
                  <Select defaultValue="激活" style={{ width: '70%' }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </DivWrapper>
              </BelowLeft>
              <BelowLeft>
                <DivWrapper>
                  <InputWrapper>填报部门：</InputWrapper>
                  <TreeSelect
                    showSearch
                    style={{ width: '70%' }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="填报部门"
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
                </DivWrapper>
                <DivWrapper>
                  <InputWrapper>解释说明：</InputWrapper>

                  <TextArea rows={4} style={{ width: '70%' }} placeholder=" 解释说明：" />
                </DivWrapper>
              </BelowLeft>
            </TableBelow>
          </TableWrapper>
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default ExpenditureNewConfiguration;
