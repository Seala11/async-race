import React from 'react';
import '@src/shared/components/button/style.scss';

type Props = {
  text?: string;
  classes?: string;
  handler?: () => void;
  disabled?: boolean;
  id?: string;
};

const defaultProps = { text: '', classes: '', handler: () => {}, disabled: false, id: '' };

const Button = ({ text, classes, handler, disabled, id }: Props) => {
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

Button.defaultProps = defaultProps;

export default Button;
