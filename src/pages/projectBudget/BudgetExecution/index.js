import React, {Component} from "react";
import {
    Wrapper,
    TopWrapper,
    CenterWrapper,
    BudgetWrapper,
    CenterWrapperLeft,
    ProjectBudget
} from './style'
import {Divider, Icon, Switch} from 'antd';

class BudgetExecution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    render() {
        return (
            <Wrapper>

                <TopWrapper>
                    {this.state.id}年度预算执行
                    <Switch
                        checkedChildren={< Icon type = "check" />}
                        unCheckedChildren={< Icon type = "close" />}
                        defaultChecked/>
                </TopWrapper>

                <CenterWrapper>
                    <Divider
                        style={{
                        padding: '2px'
                    }}/>
                    <BudgetWrapper>
                        <CenterWrapperLeft>
                            <ProjectBudget>
                                <div className='PB'>
                                项目预算
                                </div>
                                <div>
                                    ¥43660
                                </div>
                            </ProjectBudget>
                        </CenterWrapperLeft>
                        <CenterWrapperLeft>
                            001
                        </CenterWrapperLeft>
                        <CenterWrapperLeft>
                            001
                        </CenterWrapperLeft>
                        <CenterWrapperLeft>
                            001
                        </CenterWrapperLeft>
                        <CenterWrapperLeft>
                            001
                        </CenterWrapperLeft>
                        <CenterWrapperLeft>
                            001
                        </CenterWrapperLeft>

                    </BudgetWrapper>
                </CenterWrapper>

            </Wrapper>
        );
    }
}

export default BudgetExecution;
