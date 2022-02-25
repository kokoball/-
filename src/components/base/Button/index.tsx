import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import * as S from './Style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { fullWidth = false, children, ...rest },
  forwardedRef,
) {
  return (
    <S.Base ref={forwardedRef} fullWidth={fullWidth} {...rest}>
      <span>{children}</span>
    </S.Base>
  );
});

export default Button;
