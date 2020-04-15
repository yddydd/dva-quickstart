import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DetailPage from './routes/DetailPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path="*" exact children={<h1>oops</h1>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
