import React from 'react';
import { Link } from 'react-router-dom';
import { ILinkItemProps } from '@src/components/linkItem/ILinkItemProps';
import '@src/components/linkItem/style.scss';

const LinkItem: React.FC<ILinkItemProps> = ({ path, text, handler }) => {
  return (
    <li role="menuitem" className="header__item" onClick={handler} onKeyDown={handler}>
      <Link to={path} className="header__link">
        {text}
      </Link>
    </li>
  );
};

export default LinkItem;
