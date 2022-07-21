import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import { HomePage } from 'components/pages/HomePage';
import { CityPage } from 'components/pages/CityPage';
import { ErrorPage } from 'components/pages/ErrorPage';

function App() {
  return (
    <Switch>
      <Route path={ROUTES.ROOT} exact={true} component={HomePage} />
      <Route path={ROUTES.CITY_PAGE} exact={true} component={CityPage} />
      <Route path={ROUTES.ERROR_PAGE} exact={true} component={ErrorPage} />
    </Switch>
  );
}

export default App;
