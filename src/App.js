import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import * as LoadableRoutes from './routes'


class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoadableRoutes.LandingPage} />
        <Route exact path="/home" component={LoadableRoutes.HomePage} />
        
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
