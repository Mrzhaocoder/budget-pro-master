import { Table } from 'antd';
import React, { Component } from 'react';
// import axios from 'axios';
import reqwest from 'reqwest';

import { Wrapper } from './style';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

class BudgetExecutionTable extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    console.log('pager1', JSON.stringify(pager));
    pager.current = pagination.current;
    console.log('pager2', pager);

    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: '7',
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 7,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      console.log('data', data);

      const pagination = { ...this.state.pagination };
      console.log('pagination1', pagination);

      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 30;
      console.log('pagination2', pagination);

      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  };

  render() {
    return (
      <Wrapper>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </Wrapper>
    );
  }
}

export default BudgetExecutionTable;
