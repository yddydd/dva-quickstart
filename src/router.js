import React from 'react';

import { Router, Route, Switch } from 'dva/router';

import IndexPage from './routes/IndexPage';
import DetailPage from './routes/DetailPage';
import AboutPage from './routes/AboutPage'


function RouterConfig({ history, app }) {
  // const routes = [
  //   {
  //     path: "/",
  //     name: 'IndexPage',
  //     getComponent(nextState, cb) {
  //       require.ensure([], (require) => {
  //         registerModel(app, require('./models/example'));
  //         dynamic({
  //           app,
  //           models: () => [
  //             import('./models/users'),
  //           ],
  //           component: () => import('./routes/UserPage'),
  //         });
  //         cb(null, require('./routes/IndexPage'));
  //       });
  //     },
  //   },
  //   {
  //     path: "/detail",
  //     name: 'DetailPage',
  //     getComponent(nextState, cb) {
  //       require.ensure([], (require) => {
  //         registerModel(app, require('./models/products'));
  //         cb(null, require('./routes/DetailPage'));
  //       });
  //     },
  //   }
  // ]
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path="*" exact children={<h1>oops</h1>} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
