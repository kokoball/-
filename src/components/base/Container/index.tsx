import React from 'react';
import type { PropsWithChildren } from 'react';
import * as S from './Style';

const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <S.Base>
      <S.Box>{children}</S.Box>
    </S.Base>
  );
};

export default Container;
