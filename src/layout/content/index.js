import React, {Component,lazy,Suspense} from "react";
import {Row, Col} from 'antd';
import {Wrapper, DivisionWrapper, ContentWrapper} from './style'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Menu from './menu/index'
//import ProjectBudget from '../../pages/projectBudget'

import BudgetAdjustment from '../../pages/BudgetAdjustment'
import BudgetAnalysis from '../../pages/BudgetAnalysis'
import DepartmentalExpenses from '../../pages/DepartmentalExpenses'
import BudgetExecution from '../../pages/projectBudget/BudgetExecution'
const ProjectBudget = lazy(() => import('../../pages/projectBudget'));

class Content extends Component {
    
    render() {

        return (
            <div>
                <DivisionWrapper/>
                <Wrapper>
                    <ContentWrapper>
                        <Router>
                            <Row >
                                <Col span={7}>
                                    <Menu/>
                                </Col>
                                <Col span={17}>

                                <Switch>

                                    <Route path="/pages/ProjectBudget" exact component={ProjectBudget}/>
                                    <Route path="/pages/BudgetAdjustment" exact component={BudgetAdjustment}/>
                                    <Route path="/pages/BudgetAnalysis" exact component={BudgetAnalysis}/>
                                    <Route path="/pages/DepartmentalExpenses" exact component={DepartmentalExpenses}/>
                                   {/*  右侧其他路由 */}
                                    <Route path="/pages/ProjectBudget/BudgetExecution/:id"  component={BudgetExecution}/>

                                </Switch>
                                
                                </Col>
                            </Row>
                        </Router>
                    </ContentWrapper>
                </Wrapper>
            </div>
        );
    }
}

export default Content;
