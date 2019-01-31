import { Divider, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import { Wrapper, TopWrapper, CenterWrapper, BudgetWrapper, TopBudget, FooterBudget, WordBudget, NumberBudget, NumberBudgetRight } from './style';

class Project extends Component {
  componentDidMount() {
    this.props.getProjectBudgetData();
    console.log('001', this.props.data.list);
  }

  render() {
    const showData =
      this.props.data &&
      this.props.data.list.map((item, index) => (
        <BudgetWrapper key={index}>
          <Link to={`/project/ProjectExecution/${item.year}`}>
            <TopBudget>
              <Icon
                type="folder-open"
                style={{
                  fontSize: '60px',
                }}
                className={item.color}
              />
              <WordBudget>{item.year}年度</WordBudget>
            </TopBudget>
          </Link>
          <FooterBudget>
            <NumberBudget>
              年度预算：<NumberBudgetRight>{item.yearlyBudget}万元</NumberBudgetRight>
            </NumberBudget>
            <NumberBudget>
              已执行预算:<NumberBudgetRight>{item.ExecutedBudget}万元</NumberBudgetRight>
            </NumberBudget>
          </FooterBudget>
        </BudgetWrapper>
      ));

    return (
      <Wrapper>
        <TopWrapper>预算执行情况</TopWrapper>
        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />
          {showData}
        </CenterWrapper>
      </Wrapper>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  data: state.projectBudget.data,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getProjectBudgetData: () => {
    dispatch(actionCreators.getProjectBudgetData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
