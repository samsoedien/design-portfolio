import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Portfolio from './assets/pdf/Design_Portfolio_Samsoedien_V5.0.pdf';

const Routes = () => (
  <Fragment>
    <Route exact path="/design-portfolio" component={Portfolio} />
  </Fragment>
);

export default Routes;
