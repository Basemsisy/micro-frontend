import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div className="App">
          <Header />
          <Switch>
            <Route path={'/auth'} component={AuthApp} />
            <Route path={'/'} component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
