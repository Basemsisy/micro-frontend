import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route path={'/pricing'} component={Pricing} />
            <Route path={'/'} component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;
