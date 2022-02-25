import React from 'react';
import type { HTMLAttributes } from 'react';
import * as S from './Style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

const Avatar = ({ text, ...rest }: Props) => {
  return (
    <S.Base {...rest}>
      <S.Text data-text={text}>{text.substring(0, 1)}</S.Text>
    </S.Base>
  );
};

export default Avatar;
