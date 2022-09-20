import React from 'react';
import '@src/shared/components/preloader/style.scss';

const Preloader = () => (
  <div className="wrapper">
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Preloader;
