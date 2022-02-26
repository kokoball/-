import React from 'react';
import { IFilesTypes } from 'types';
import DetailFileListItem from 'components/domain/DetailFileListItem';
import * as S from './Style';

interface DetailFileListProps {
  detailsData: IFilesTypes;
}

const DetailFileList = ({ detailsData }: DetailFileListProps) => {
  const files = detailsData.files;

  return (
    <S.FileList>
      {files && files.map((file, i) => <DetailFileListItem key={`file-${i}`} file={file} />)}
    </S.FileList>
  );
};

export default DetailFileList;
