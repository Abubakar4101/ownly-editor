import React, {FunctionComponent} from 'react';
import {Typography} from '@mui/material';

export interface Props {
  children: React.ReactNode;
  variant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption' | 'overline' | 'button';
  emphasis?: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  component?: React.ElementType;
  display?: 'initial' | 'block' | 'inline';
  noWrap?: boolean;
  className?: string;
}
const Headline: FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    variant = 'body1',
    emphasis,
    //...rest
    align = 'inherit',
    color = 'initial',
    component = 'div',
    display = 'initial',
    noWrap,
    className,
  } = props;
  return (
    <Typography
      variant={variant}
      style={{opacity: emphasis}}
      align={align}
      display={display}
      component={component}
      color={color}
      noWrap={noWrap}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default Headline;
