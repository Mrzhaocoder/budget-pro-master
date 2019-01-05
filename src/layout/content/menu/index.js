import React, {Component} from "react";
import {Icon} from 'antd'
import {Link} from "react-router-dom";
import {Wrapper, MenuWrapper, TopMenuWrapper, MenuWrapperLeft} from './style'

class Menu extends Component {
    render() {
        return (
            <Wrapper>
                <TopMenuWrapper>
                    预算管理
                </TopMenuWrapper>

                <Link to="/pages/ProjectBudget">
                    <MenuWrapper className="active">
                        <MenuWrapperLeft >

                            <Icon
                                type="property-safety"
                                style={{
                                margin: '0 10px',
                                fontSize: '25px'
                            }}
                                twoToneColor="#eb2f96"
                                theme="twoTone"/>
                            项目预算
                        </MenuWrapperLeft>
                        <Icon
                            type="ellipsis"
                            style={{
                            fontSize: '30px',
                            transform: 'rotate(90deg)'
                        }}/>
                    </MenuWrapper>
                </Link>

                <Link to='/pages/BudgetAdjustment'>
                    <MenuWrapper>
                        <MenuWrapperLeft>
                            <Icon
                                type="calculator"
                                style={{
                                margin: '0 10px',
                                fontSize: '25px'
                            }}
                                twoToneColor="#0077FF"
                                theme="twoTone"/>

                            预算调整
                        </MenuWrapperLeft>
                        <Icon
                            type="ellipsis"
                            style={{
                            fontSize: '30px',
                            transform: 'rotate(90deg)'
                        }}/>
                    </MenuWrapper>
                </Link>

                <Link to='/pages/BudgetAnalysis'>
                    <MenuWrapper>
                        <MenuWrapperLeft>
                            <Icon
                                type="pie-chart"
                                style={{
                                margin: '0 10px',
                                fontSize: '25px'
                            }}
                                twoToneColor="#0077FF"
                                theme="twoTone"/>

                            预算分析
                        </MenuWrapperLeft>
                        <Icon
                            type="ellipsis"
                            style={{
                            fontSize: '30px',
                            transform: 'rotate(90deg)'
                        }}/>
                    </MenuWrapper>
                </Link>

                <Link to='/pages/DepartmentalExpenses'>
                    <MenuWrapper>
                        <MenuWrapperLeft>
                            <Icon
                                type="snippets"
                                style={{
                                margin: '0 10px',
                                fontSize: '25px'
                            }}
                                twoToneColor="#0077FF"
                                theme="twoTone"/>

                            部门费用执行
                        </MenuWrapperLeft>
                        <Icon
                            type="ellipsis"
                            style={{
                            fontSize: '30px',
                            transform: 'rotate(90deg)'
                        }}/>
                    </MenuWrapper>
                </Link>

            </Wrapper>
        );
    }
}

export default Menu;
