import React, { Component, lazy, Suspense } from 'react';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Wrapper, DivisionWrapper, ContentWrapper } from './style';

import Menu from './menu/index';
import Loading from '../../pages/Loading';
// 代码切片
const ProjectBudget = lazy(() => import('../../pages/ProjectBudget'));
const BudgetAdjustment = lazy(() => import('../../pages/BudgetAdjustment'));
const BudgetAnalysis = lazy(() => import('../../pages/BudgetAnalysis'));
const DepartmentalExpenses = lazy(() => import('../../pages/DepartmentalExpenses'));
// 右侧其他路由
const BudgetExecution = lazy(() => import('../../pages/ProjectBudget/BudgetExecution'));
const DepartmentalBudget = lazy(() => import('../../pages/ProjectBudget/DepartmentalBudget'));

class Content extends Component {
  render() {
    return (
      <div>
        <DivisionWrapper />
        <Wrapper>
          <ContentWrapper>
            <Router>
              <Suspense fallback={<Loading />}>
                <Row>
                  <Col span={6}>
                    <Menu />
                  </Col>
                  <Col span={18}>
                    <Switch>
                      <Route path="/pages/ProjectBudget" exact component={ProjectBudget} />
                      <Route path="/pages/BudgetAdjustment" exact component={BudgetAdjustment} />
                      <Route path="/pages/BudgetAnalysis" exact component={BudgetAnalysis} />
                      <Route path="/pages/DepartmentalExpenses" exact component={DepartmentalExpenses} />
                      {/*  右侧其他路由 */}
                      <Route path="/pages/ProjectBudget/BudgetExecution/:id" component={BudgetExecution} />
                      <Route path="/pages/ProjectBudget/DepartmentalBudget/:id" component={DepartmentalBudget} />
                    </Switch>
                  </Col>
                </Row>
              </Suspense>
            </Router>
          </ContentWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default Content;
