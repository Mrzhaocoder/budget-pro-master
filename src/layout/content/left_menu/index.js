import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Wrapper>
        <div style={{}}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ margin: 16, float: 'left' }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub3']} mode="inline" theme="light" inlineCollapsed={this.state.collapsed}>
            <Menu.Item key="1">
              <Link to="/Project" style={{ height: '100%', width: '100%' }}>
                <Icon type="pie-chart" />
                <span>项目预算</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/adjustment" style={{ height: '100%', width: '100%' }}>
                <Icon type="desktop" />
                <span>预算调整</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/analysis" style={{ height: '100%', width: '100%' }}>
                <Icon type="inbox" />
                <span>预算分析</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>预算编制</span>
                </span>
              }
            >
              <Menu.Item key="5">新预算填报</Menu.Item>
              <Menu.Item key="6">已填报预算</Menu.Item>
              <Menu.Item key="7">跨部门确认审批</Menu.Item>
              <Menu.Item key="8">疑似冲突清单</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>部门费用执行</span>
                </span>
              }
            >
              <Menu.Item key="9">department</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="mail" />
                  <span>预算配置</span>
                </span>
              }
            >
              <Menu.Item key="13">
                <Link to="/ConfigurationExpenditure" style={{ height: '100%', width: '100%' }}>
                  支出预算项配置
                </Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/ConfigurationDepartment" style={{ height: '100%', width: '100%' }}>
                  部门配置维护
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Wrapper>
    );
  }
}

export default LeftMenu;
