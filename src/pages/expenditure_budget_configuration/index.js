import React, { Component } from 'react';
import { Divider, Button, Table } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

import { Wrapper, TopWrapper, CenterWrapper, TableWrapper } from './style';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 46; i += 1) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
class ExpenditureBudgetConfiguration extends Component {
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
          <Link to={'/ExpenditureBudgetConfiguration/ExpenditureNewConfiguration'}>
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
)(ExpenditureBudgetConfiguration);
