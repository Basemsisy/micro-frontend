import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

const App = ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'auth',
  });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path={'/auth/signin'}>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path={'/auth/signup'}>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
