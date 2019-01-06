import React, {Component} from "react";
import {
    Wrapper,
    TopWrapper,
    CenterWrapper,
    BudgetWrapper,
    TopBudget,
    FooterBudget,
    WordBudget,
    NumberBudget,
    NumberBudgetRight
} from './style'
import {Divider, Icon} from 'antd';

class ProjectBudget extends Component {
    render() {
        return (
            <Wrapper>
                <TopWrapper>
                    预算执行情况
                </TopWrapper>
                <CenterWrapper>
                    <Divider style={{
                        padding: '2px'
                    }}></Divider>

                    <BudgetWrapper>
                        <TopBudget>
                            <Icon
                                type="folder-open"
                                style={{
                                fontSize: '60px',
                                color: '#ffc069'
                            }}/>
                            <WordBudget>
                                2019年度
                            </WordBudget>
                        </TopBudget>
                        <FooterBudget>
                            <NumberBudget>
                                年度预算：<NumberBudgetRight>321655万元</NumberBudgetRight>
                            </NumberBudget>
                            <NumberBudget>
                                已执行预算:<NumberBudgetRight>12465万元</NumberBudgetRight>
                            </NumberBudget>
                        </FooterBudget>
                    </BudgetWrapper>

                    <BudgetWrapper>
                        <TopBudget>
                            <Icon
                                type="folder-open"
                                style={{
                                fontSize: '60px',
                                color: '#b7eb8f'
                            }}/>
                            <WordBudget>
                                2018年度
                            </WordBudget>
                        </TopBudget>
                        <FooterBudget>
                            <NumberBudget>
                                年度预算：<NumberBudgetRight>136351万元</NumberBudgetRight>
                            </NumberBudget>
                            <NumberBudget>
                                已执行预算:
                                <NumberBudgetRight
                                    style={{
                                    color: 'red'
                                }}>546421万元</NumberBudgetRight>
                            </NumberBudget>
                        </FooterBudget>
                    </BudgetWrapper>
                    <BudgetWrapper>
                        <TopBudget>
                            <Icon
                                type="folder-open"
                                style={{
                                fontSize: '60px',
                                color: '#5cdbd3'
                            }}/>
                            <WordBudget>
                                2017年度
                            </WordBudget>
                        </TopBudget>
                        <FooterBudget>
                            <NumberBudget>
                                年度预算：<NumberBudgetRight>526895万元</NumberBudgetRight>
                            </NumberBudget>
                            <NumberBudget>
                                已执行预算:
                                <NumberBudgetRight
                                    style={{
                                    color: 'red'
                                }}>658125万元</NumberBudgetRight>
                            </NumberBudget>
                        </FooterBudget>
                    </BudgetWrapper>
                    <BudgetWrapper>
                        <TopBudget>
                            <Icon
                                type="folder-open"
                                style={{
                                fontSize: '60px',
                                color: '#69c0ff'
                            }}/>
                            <WordBudget>
                                2016年度
                            </WordBudget>
                        </TopBudget>
                        <FooterBudget>
                            <NumberBudget>
                                年度预算：<NumberBudgetRight>3158942万元</NumberBudgetRight>
                            </NumberBudget>
                            <NumberBudget>
                                已执行预算:<NumberBudgetRight >125689万元</NumberBudgetRight>
                            </NumberBudget>
                        </FooterBudget>
                    </BudgetWrapper>
                    <BudgetWrapper>
                        <TopBudget>
                            <Icon
                                type="folder-open"
                                style={{
                                fontSize: '60px',
                                color: '#ffadd2'
                            }}/>
                            <WordBudget>
                                2015年度
                            </WordBudget>
                        </TopBudget>
                        <FooterBudget>
                            <NumberBudget>
                                年度预算：<NumberBudgetRight>458963万元</NumberBudgetRight>
                            </NumberBudget>
                            <NumberBudget>
                                已执行预算:<NumberBudgetRight>125896万元</NumberBudgetRight>
                            </NumberBudget>
                        </FooterBudget>
                    </BudgetWrapper>

                </CenterWrapper>
            </Wrapper>
        );
    }
}

export default ProjectBudget;
