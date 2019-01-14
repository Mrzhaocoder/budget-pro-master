import React, { Component } from 'react';
import { Divider, Icon, Switch, Progress } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper, TopWrapper, CenterWrapper, BudgetWrapper, CenterWrapperLeft, ProjectBudget } from './style';
import BudgetExecutionTable from './BudgetExecutionTable/index';

class BudgetExecution extends Component {
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
            <Link to={'/pages/ProjectBudget/'}>
              <Icon type="left-circle" />
            </Link>
            {this.state.id}年度预算执行
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
            <CenterWrapperLeft>
              <ProjectBudget>
                <div className="PB">项目预算</div>
                <div>¥43660</div>
              </ProjectBudget>
            </CenterWrapperLeft>
            <CenterWrapperLeft>
              <Progress type="circle" percent={75} format={percent => `${percent} %`} />
            </CenterWrapperLeft>
            <CenterWrapperLeft>
              <div>预算支出</div>
              <div className="red">¥43660</div>
            </CenterWrapperLeft>
            <Divider type="vertical" />
            <CenterWrapperLeft>
              <div>人力预算执行</div>
              <div>6000/5464</div>
            </CenterWrapperLeft>
            <Divider type="vertical" />
            <CenterWrapperLeft>
              <div>项目采购</div>
              <div>¥ 12458.33</div>
            </CenterWrapperLeft>
            <Divider type="vertical" />
            <CenterWrapperLeft>
              <div>项目收入</div>
              <div className="green">¥ 6653.46</div>
            </CenterWrapperLeft>
            <Link to={'/pages/ProjectBudget/DepartmentalBudget/$AAAA'}>
              <Icon type="right" style={{ fontSize: '30px' }} />
            </Link>
          </BudgetWrapper>
          <BudgetExecutionTable />
        </CenterWrapper>
      </Wrapper>
    );
  }
}

export default BudgetExecution;
