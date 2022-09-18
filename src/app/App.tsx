import React from 'react';

import './styles/index.scss';
import '@src/app/style.scss';

import Header from '@src/containers/header/Header';
import Main from '@src/containers/main/Main';
import Provider1 from '@src/provider/Provider';
import ProviderGarage from '@src/provider/garage/ProviderGarage';

const App: React.FC = () => {
  return (
    <Provider1>
      <div className="content">
        <Header />
        <ProviderGarage>
          <Main />
        </ProviderGarage>
      </div>
    </Provider1>
  );
};

export default App;
