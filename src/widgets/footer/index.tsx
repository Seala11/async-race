import React from 'react';
import '@src/widgets/footer/style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="https://github.com/Seala11" target="_blank" rel="noreferrer" className="footer__link">
              Seala11
            </a>
          </li>
          <li className="footer__item">
            2022{' '}
            <a target="_blank" href="https://rs.school/" rel="noreferrer" className="footer__link">
              RSSchool
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
