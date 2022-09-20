import React from 'react';

import './styles/index.scss';
import '@src/app/style.scss';

import Header from '@src/widgets/header';
import Routing from '@src/pages';

import withProviders from './providers';

const App: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <Routing />
    </div>
  );
};

export default withProviders(App);
