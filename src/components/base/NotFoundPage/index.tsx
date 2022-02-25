import React from 'react';
import * as S from './Style';

export const NotFoundPage = () => {
  return (
    <S.TableRow>
      <S.TableCell>
        <S.LinkInfo>
          <S.LinkTexts>
            <S.LinkTitle>전송된 파일이 없습니다.</S.LinkTitle>
          </S.LinkTexts>
        </S.LinkInfo>
        <span />
      </S.TableCell>
      <S.TableCell></S.TableCell>
      <S.TableCell></S.TableCell>
      <S.TableCell></S.TableCell>
      <S.TableCell></S.TableCell>
    </S.TableRow>
  );
};
