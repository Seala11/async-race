import React from 'react';
import '@src/components/button/style.scss';
import { IButtonProps } from '@src/components/button/IButtonProps';

const Button: React.FC<IButtonProps> = ({ text = '', classes = '', handler, disabled, id }) => {
  return (
    <button
      id={id}
      disabled={disabled}
      className={`button ${classes} ${disabled ? 'button--disabled' : ''}`}
      type="button"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
