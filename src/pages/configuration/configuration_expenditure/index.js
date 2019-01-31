import React, { Component } from 'react';
import { Divider, Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

import { Wrapper, TopWrapper, CenterWrapper, TableWrapper } from './style';

const columns = [
  {
    title: '年度',
    dataIndex: 'year',
  },
  {
    title: '支出大类',
    dataIndex: 'expenditure_category',
  },
  {
    title: '支出项目',
    dataIndex: 'expenditure_item',
  },
  {
    title: '填报部门',
    dataIndex: 'filling_dept',
  },
  {
    title: '生效标志',
    dataIndex: 'is_active',
  },
];

const data = [];

class ConfigurationExpenditure extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  componentDidMount() {
    this.props.getExpenditureConfigurationData();
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
    console.log('001', this.props.data.list);
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  render() {
    if (this.props.data) {
      this.props.data.list.map((item, index) => {
        data.push({
          key: item.id,
          year: item.year,
          expenditure_category: item.expenditure_category,
          expenditure_items: item.expenditure_items,
          filling_dept: item.filling_dept,
          is_active: item.is_active,
        });
        return this.props.data.list.key;
      });
    }

    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Wrapper>
        <TopWrapper>
          支出预算项配置
          <Link to={'/ConfigurationExpenditure/ConfigurationExpenditureNew'}>
            <Button type="primary">新增</Button>
          </Link>
        </TopWrapper>

        <CenterWrapper>
          <Divider
            style={{
              padding: '2px',
            }}
          />
          <TableWrapper>
            <div style={{ marginBottom: 16 }}>
              <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                删除
              </Button>
              <span style={{ marginLeft: 8 }}>{hasSelected ? `删除 ${selectedRowKeys.length} 个项目` : ''}</span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </TableWrapper>
        </CenterWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  data: state.ExpenditureBudgetConfiguration.data,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getExpenditureConfigurationData: () => {
    dispatch(actionCreators.getExpenditureConfigurationData());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigurationExpenditure);
