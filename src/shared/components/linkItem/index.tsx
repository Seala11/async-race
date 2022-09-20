import React from 'react';
import { Link } from 'react-router-dom';
import '@src/shared/components/linkItem/style.scss';

type Props = {
  path: string;
  text: string;
  handler: () => void;
};

const LinkItem = ({ path, text, handler }: Props) => {
  return (
    <li role="menuitem" className="header__item" onClick={handler} onKeyDown={handler}>
      <Link to={path} className="header__link">
        {text}
      </Link>
    </li>
  );
};

export default LinkItem;
