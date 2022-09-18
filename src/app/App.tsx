import React from 'react';

import './styles/index.scss';

import '@src/app/style.scss';
import Header from '@src/containers/header/Header';
import Main from '@src/containers/main/Main';
import Provider from '@src/provider/Provider';
import ProviderGarage from '@src/provider/garage/ProviderGarage';

const App: React.FC = () => {
  return (
    <Provider>
      <div className="content">
        <Header />
        <ProviderGarage>
          <Main />
        </ProviderGarage>
      </div>
    </Provider>
  );
};

export default App;
