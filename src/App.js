import React from 'react';

import Home from './Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/service" component={Service}></Route>
        </Switch>
    </>
  )
}

export default App;

