import React from 'react';
import { FilesType } from 'types';
import { checkErrorImg, getSize } from 'utils';
import * as S from './Style';

interface DetailFileListItemProps {
  file: FilesType;
}

const DetailFileListItem = ({ file }: DetailFileListItemProps) => {
  const fileSize = getSize(file.size);

  return (
    <S.FileListItem>
      <S.FileItemInfo>
        {checkErrorImg(file) ? (
          <S.FileImage src="/svgs/default.svg" />
        ) : (
          <S.FileImage src={file.thumbnailUrl} />
        )}
        <span>{file.name}</span>
      </S.FileItemInfo>
      <S.FileItemSize>{fileSize}</S.FileItemSize>
    </S.FileListItem>
  );
};

export default DetailFileListItem;
