import React from 'react';
import * as S from './Style';

const LinkHeaderRow = () => {
  return (
    <>
      <S.TableRow>
        <S.TableCell>제목</S.TableCell>
        <S.TableCell>파일개수</S.TableCell>
        <S.TableCell>크기</S.TableCell>
        <S.TableCell>유효기간</S.TableCell>
        <S.TableCell>받은사람</S.TableCell>
      </S.TableRow>
    </>
  );
};

export default LinkHeaderRow;
