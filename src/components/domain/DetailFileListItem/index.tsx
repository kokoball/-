import React from 'react';
import { FilesType } from 'types';
import { getSize } from 'utils';
import * as S from './Style';

interface DetailFileListItemProps {
  file: FilesType;
}

const DetailFileListItem = ({ file }: DetailFileListItemProps) => {
  const fileSize = getSize(file.size);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/svgs/default.svg';
  };

  return (
    <S.FileListItem>
      <S.FileItemInfo>
        <S.FileImage src={file.thumbnailUrl} onError={(e) => handleImageError(e)} />
        <span>{file.name}</span>
      </S.FileItemInfo>
      <S.FileItemSize>{fileSize}</S.FileItemSize>
    </S.FileListItem>
  );
};

export default DetailFileListItem;
