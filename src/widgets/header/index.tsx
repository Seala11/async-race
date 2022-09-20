import React from 'react';
import '@src/widgets/header/style.scss';
import Logo from '@src/widgets/header/logo/Logo';
import LinkList from '@src/widgets/header/linkList';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <LinkList />
    </header>
  );
};

export default Header;
