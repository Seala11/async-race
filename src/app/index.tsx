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

// TODO: add garage provider to redux
// TODO: add preloader to all features (loading in app slice)
// TODO: add withstore to ./providers (like with routing)

// TODO: after update selected app unselect
// TODO: show message between pages (now it removes, should be displayed)
// TODO: delete request folder/ provider
// TODO: split slicer maybe
// TODO: add footer

// TODO: design - move pagination up
// TODO: - show total pages
// TODO: -disable prev and next btn in pagination

// TODO: delete all console log
