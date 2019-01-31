import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Wrapper, DivisionWrapper, ContentWrapper, RouterWrapper } from './style';

import LeftMenu from './left_menu';
// 第一层
import Project from '../../pages/project';
import Adjustment from '../../pages/adjustment';
import Analysis from '../../pages/analysis';
import ConfigurationDepartment from '../../pages/configuration/configuration_department';
import ConfigurationExpenditure from '../../pages/configuration/configuration_expenditure';

// 第二层
import ProjectExecution from '../../pages/project/project_execution';
import ProjectExecutionDetails from '../../pages/project/project_execution_details';
import ConfigurationDepartmentNew from '../../pages/configuration/configuration_department/configuration_department_new';
import ConfigurationExpenditureNew from '../../pages/configuration/configuration_expenditure/configuration_expenditure_new';

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
                  <Route path="/project" exact component={Project} />
                  <Route path="/adjustment" exact component={Adjustment} />
                  <Route path="/analysis" exact component={Analysis} />
                  <Route path="/ConfigurationDepartment" exact component={ConfigurationDepartment} />
                  <Route path="/ConfigurationExpenditure" exact component={ConfigurationExpenditure} />

                  {/*  右侧其他路由 */}
                  <Route path="/project/ProjectExecution/:id" exact component={ProjectExecution} />
                  <Route path="/project/ProjectExecutionDetails/:id" exact component={ProjectExecutionDetails} />
                  <Route path="/ConfigurationDepartment/ConfigurationDepartmentNew" exact component={ConfigurationDepartmentNew} />
                  <Route path="/ConfigurationExpenditure/ConfigurationExpenditureNew" exact component={ConfigurationExpenditureNew} />
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
