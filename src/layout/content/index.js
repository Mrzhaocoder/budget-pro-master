import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Wrapper, DivisionWrapper, ContentWrapper, RouterWrapper } from './style';

import LeftMenu from './left_menu';
// 第一层
import ProjectBudget from '../../pages/project_budget';
import BudgetAdjustment from '../../pages/budget_adjustment';
import BudgetAnalysis from '../../pages/budget_analysis';
import DepartmentConfiguration from '../../pages/department_configuration';
import ExpenditureBudgetConfiguration from '../../pages/expenditure_budget_configuration/';

// 第二层
import BudgetExecution from '../../pages/project_budget/budget_execution/index';
import DepartmentalBudget from '../../pages/project_budget/departmental_budget/index';
import DepartmentNewConfiguration from '../../pages/department_configuration/department_new_configuration';
import ExpenditureNewConfiguration from '../../pages/expenditure_budget_configuration/expenditure_new_configuration';

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
                  <Route path="/ExpenditureBudgetConfiguration" exact component={ExpenditureBudgetConfiguration} />

                  {/*  右侧其他路由 */}
                  <Route path="/ProjectBudget/BudgetExecution/:id" exact component={BudgetExecution} />
                  <Route path="/ProjectBudget/DepartmentalBudget/:id" exact component={DepartmentalBudget} />
                  <Route path="/DepartmentConfiguration/DepartmentNewConfiguration" exact component={DepartmentNewConfiguration} />
                  <Route path="/ExpenditureBudgetConfiguration/ExpenditureNewConfiguration" exact component={ExpenditureNewConfiguration} />
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
