import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// import FormConfirmation from './components/contact/FormConfirmation';
import ContactContainer from './containers/ContactContainer'

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={ContactContainer} />
  </Fragment>
);

export default Routes;
