import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@src/widgets/header/linkItem/style.scss';

type Props = {
  path: string;
  text: string;
  handler: () => void;
};

const LinkItem = ({ path, text, handler }: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <li role="menuitem" className="header__item" onClick={handler} onKeyDown={handler}>
      <Link to={path} className="header__link">
        {text}
      </Link>
    </li>
  );
};

export default LinkItem;
