import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Wrapper, DivisionWrapper, ContentWrapper, RouterWrapper } from './style';

import LeftMenu from './left_menu/index';
// 代码切片
import ProjectBudget from '../../pages/ProjectBudget';
import BudgetAdjustment from '../../pages/BudgetAdjustment/index';
import BudgetAnalysis from '../../pages/BudgetAnalysis/index';
import DepartmentConfiguration from '../../pages/DepartmentConfiguration';
// 右侧其他路由
import BudgetExecution from '../../pages/ProjectBudget/BudgetExecution/index';
import DepartmentalBudget from '../../pages/ProjectBudget/DepartmentalBudget/index';

class Content1 extends Component {
  render() {
    return (
      <div>
        <DivisionWrapper />
        <Wrapper>
          <ContentWrapper>
            <Router>
              <RouterWrapper>
                <LeftMenu />
                <Switch>
                  <Route path="/ProjectBudget" exact component={ProjectBudget} />
                  <Route path="/BudgetAdjustment" exact component={BudgetAdjustment} />
                  <Route path="/BudgetAnalysis" exact component={BudgetAnalysis} />
                  <Route path="/DepartmentConfiguration" exact component={DepartmentConfiguration} />
                  {/*  右侧其他路由 */}
                  <Route path="/ProjectBudget/BudgetExecution/:id" exact component={BudgetExecution} />
                  <Route path="/ProjectBudget/DepartmentalBudget/:id" exact component={DepartmentalBudget} />
                </Switch>
              </RouterWrapper>
            </Router>
          </ContentWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default Content1;
