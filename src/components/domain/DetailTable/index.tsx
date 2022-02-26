import React, { useState, useMemo, useEffect } from 'react';
import DetailFileList from '../DetailFileList';
import { DetailHeader } from '../DetailHeader';
import { IFilesTypes } from 'types';
import { useLocation, useParams } from 'react-router-dom';
import { getTotalFilesSize, getExpiresDate } from 'utils';
import { format } from 'date-fns';
import * as S from './Style';

interface DetailTableProps {
  filesData: IFilesTypes[] | null;
}

const DetailTable = ({ filesData }: DetailTableProps) => {
  const [detailsData, setDetailsData] = useState<IFilesTypes | null>(null);
  const { id } = useParams();
  const location = useLocation();

  const filesLength = detailsData?.files?.length.toLocaleString();
  const totalFilesSize = getTotalFilesSize(detailsData);

  const [expiresDate, linkCreationDate] = useMemo(() => {
    if (detailsData) {
      return [
        getExpiresDate(detailsData.expires_at),
        format(new Date(detailsData.created_at * 1000), 'yyyy년 M월 d일 hh:mm'),
      ];
    }
    return ['', ''];
  }, [detailsData]);

  useEffect(() => {
    if (!filesData) return;
    if (location.state) {
      const matchKeyData = filesData?.filter((data) => data.key === id);
      setDetailsData(matchKeyData[0]);
      return;
    }
    const propsData = location.state;
    setDetailsData(propsData as IFilesTypes);
  }, [filesData]);

  return (
    detailsData && (
      <>
        <DetailHeader detailsData={detailsData} expiresDate={expiresDate} />
        <S.Article>
          <S.Descrition>
            <S.Texts>
              <S.Top>링크 생성일</S.Top>
              <S.Bottom>{linkCreationDate}</S.Bottom>
              <S.Top>메세지</S.Top>
              <S.Bottom>
                {detailsData.sent ? detailsData.sent.content : '메세지가 없습니다.'}
              </S.Bottom>
              <S.Top>다운로드 횟수</S.Top>
              <S.Bottom>{detailsData.download_count}</S.Bottom>
            </S.Texts>
            <S.LinkImage>
              {detailsData.thumbnailUrl.slice(-7) !== 'pdf.svg' ? (
                <S.Image src={detailsData.thumbnailUrl} />
              ) : (
                <S.Image src="/svgs/default.svg" />
              )}
            </S.LinkImage>
          </S.Descrition>
          <S.ListSummary>
            <div>총 {filesLength}개의 파일</div>
            <div>{totalFilesSize}</div>
          </S.ListSummary>
          {expiresDate !== 'expiration' && <DetailFileList detailsData={detailsData} />}
        </S.Article>
      </>
    )
  );
};

export default DetailTable;
