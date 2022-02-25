import React from 'react';
import LinkHeaderRow from '../LinkHeaderRow/LinkHeaderRow';
import LinkBodyRow from '../LinkBodyRow/LinkBodyRow';
import { IFilesTypes } from 'types';
import * as S from './Style';

interface Props {
  data: IFilesTypes;
}

const LinkTable = ({ data }: Props) => {
  return (
    <S.Table>
      <S.TableHead>
        <LinkHeaderRow />
      </S.TableHead>
      <S.TableBody>
        <LinkBodyRow data={data} />
      </S.TableBody>
    </S.Table>
  );
};

export default LinkTable;
