import React, { Component } from 'react';
import { Divider, Icon, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper, TopWrapper, CenterWrapper, BudgetWrapper, TopDepartmentalWrapper } from './style';
import DepartmentalTable from './DepartmentalTable';

class DepartmentalBudget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  render() {
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
            <TopDepartmentalWrapper>1</TopDepartmentalWrapper>
            <TopDepartmentalWrapper>2</TopDepartmentalWrapper>
          </BudgetWrapper>
          <DepartmentalTable />
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default DepartmentalBudget;
