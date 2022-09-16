import { CSSProperties } from 'react';

export interface IImageProps {
  color: string;
  classes?: string;
  style?: CSSProperties;
  handler?: () => void;
}
