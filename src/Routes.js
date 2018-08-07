import React from 'react';
import { Router, Route } from 'react-router';
import {
} from 'components';

import {
  App,
  
} from 'containers';



const MyRoutes = ({routerHistory}) => (

  <Router history={routerHistory}>
    <Route component={App}>
      <Route path="/" component={App} />
    </Route>
  </Router>
);

export default MyRoutes;
