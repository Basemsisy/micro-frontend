import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path={'/pricing'} component={Pricing} />
            <Route path={'/'} component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
