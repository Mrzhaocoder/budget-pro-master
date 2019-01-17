import React, { Component } from 'react';
import { Divider, Icon, Switch, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper, TopWrapper, CenterWrapper, BudgetWrapper, TopDepartmentalWrapper, TopCenterWrapper } from './style';
import DepartmentalTable from './DepartmentalTable';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class DepartmentalBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      selectedItems: [],
    };
  }
  handleChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Wrapper>
        <TopWrapper>
          <div>
            <Link to={'/pages/ProjectBudget/BudgetExecution/$新ID'}>
              <Icon type="left-circle" />
            </Link>
            {this.state.id} 部门预算执行详情
          </div>
          <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
        </TopWrapper>

        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />
          <BudgetWrapper>
            <TopDepartmentalWrapper>
              <TopCenterWrapper>所属科目：</TopCenterWrapper>
              <TopCenterWrapper>
                <Button>全部</Button>
              </TopCenterWrapper>
              <TopCenterWrapper>
                <Button>预算执行</Button>
              </TopCenterWrapper>
              <TopCenterWrapper>
                <Button>预算收入</Button>
              </TopCenterWrapper>
            </TopDepartmentalWrapper>
            <TopDepartmentalWrapper>
              <TopCenterWrapper>过滤条件：</TopCenterWrapper>
              <TopCenterWrapper className="long">
                <Select mode="multiple" placeholder=" 所属部门：" value={selectedItems} onChange={this.handleChange} style={{ width: '100%' }}>
                  {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </TopCenterWrapper>
              <TopCenterWrapper className="long">
                <Select mode="multiple" placeholder=" 立项年度：" value={selectedItems} onChange={this.handleChange} style={{ width: '100%' }}>
                  {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </TopCenterWrapper>
              <TopCenterWrapper className="long">
                <Select mode="multiple" placeholder=" 项目类别：" value={selectedItems} onChange={this.handleChange} style={{ width: '100%' }}>
                  {filteredOptions.map(item => (
                    <Select.Option key={item} value={item}>
                      {item}
                    </Select.Option>
                  ))}
                </Select>
              </TopCenterWrapper>
            </TopDepartmentalWrapper>
          </BudgetWrapper>
          <DepartmentalTable />
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default DepartmentalBudget;
