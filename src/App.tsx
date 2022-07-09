import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from 'components/pages/HomePage';
import { CityPage } from 'components/pages/CityPage';
import { ErrorPage } from 'components/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/:city" exact={true} component={CityPage} />
          <Route path="/:error" exact={true} component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
