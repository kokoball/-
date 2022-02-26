import React from 'react';
import { IFilesTypes } from 'types';
import { handleCopy } from 'utils';
import * as S from './Style';

interface Props {
  detailsData: IFilesTypes;
  expiresDate: string | undefined;
}

export const DetailHeader = ({ detailsData, expiresDate }: Props) => {
  const handleDownload = () => {
    window.alert('다운로드 되었습니다.');
  };
  return (
    <S.Header>
      <S.LinkInfo>
        <S.Title>{detailsData.summary}</S.Title>
        {expiresDate === 'expiration' ? (
          <span>만료됨</span>
        ) : (
          <S.Url
            onClick={(e) => handleCopy(e)}
          >{`https://file-anywhere.herokuapp.com/${detailsData.key}`}</S.Url>
        )}
      </S.LinkInfo>
      <S.DownloadButton onClick={handleDownload}>
        <img referrerPolicy="no-referrer" src="/svgs/download.svg" alt="" />
        받기
      </S.DownloadButton>
    </S.Header>
  );
};
