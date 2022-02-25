import React from 'react';
import LinkHeaderRow from '../LinkHeaderRow';
import LinkBodyRow from '../LinkBodyRow';
import { NotFoundPage } from 'components/base/NotFoundPage';
import { IFilesTypes } from 'types';
import * as S from './Style';

interface LinkTableProps {
  filesData: IFilesTypes[] | null;
}

const LinkTable = ({ filesData }: LinkTableProps) => {
  return (
    <S.Table>
      <S.TableHead>
        <LinkHeaderRow />
      </S.TableHead>
      <S.TableBody>
        {filesData ? (
          filesData.map((data) => <LinkBodyRow key={data.key} data={data} />)
        ) : (
          <NotFoundPage />
        )}
      </S.TableBody>
    </S.Table>
  );
};

export default LinkTable;
