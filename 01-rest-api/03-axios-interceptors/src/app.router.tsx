import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import { history, routes } from './core/router';
import { DetalleScene } from './scenes/detail.scene';
import { MasterScene } from './scenes/master.scene';

export const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={[routes.master, routes.root]}>
          <MasterScene />
        </Route>
        <Route exact path={routes.detalle}>
          <DetalleScene />
        </Route>
      </Switch>
    </Router>
  );
};
