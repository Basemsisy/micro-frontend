import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
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
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
