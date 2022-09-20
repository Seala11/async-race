import React from 'react';
import '@src/containers/header/style.scss';
import Logo from '@src/shared/components/logo/Logo';
import LinkList from '@src/containers/header/linkList/LinkList';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <LinkList />
    </header>
  );
};

export default Header;
