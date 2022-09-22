import React from 'react';
import '@src/shared/components/button/style.scss';

type Props = {
  text?: string;
  classes?: string;
  handler?: () => void;
  disabled?: boolean;
  id?: string;
  children?: React.ReactElement[] | React.ReactElement;
};

const defaultProps = { text: '', classes: '', handler: () => {}, disabled: false, id: '', children: null };

const Button = ({ text, classes, handler, disabled, id, children }: Props) => {
  return (
    <button
      id={id}
      disabled={disabled}
      className={`button ${classes} ${disabled ? 'button--disabled' : ''}`}
      type="button"
      onClick={handler}
    >
      {children}
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
