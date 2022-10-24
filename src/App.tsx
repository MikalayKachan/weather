import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import { HomePage } from 'components/pages/HomePage';
import { CityPage } from 'components/pages/CityPage';
import { ErrorPage } from 'components/pages/ErrorPage';
import { AppProvider } from 'helpers/context';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path={ROUTES.ROOT} exact={true} component={HomePage} />
        <Route path={ROUTES.CITY_PAGE} exact={true} component={CityPage} />
        <Route path={ROUTES.ERROR_PAGE} exact={true} component={ErrorPage} />
      </Switch>
    </AppProvider>
  );
}

export default App;
