import React from 'react';
import Avatar from 'components/base/Abatar';
import { IFilesTypes } from 'types';
import { clipboardCopy, getExpiresDate, getSize } from 'utils';
import * as S from './Style';

interface LinkBodyRowProps {
  data: IFilesTypes;
}

const LinkBodyRow = ({ data }: LinkBodyRowProps) => {
  const expiresDate = getExpiresDate(data.expires_at);
  const fileSize = getSize(data.size);
  return (
    <S.TableRow>
      <S.TableCell>
        <S.LinkInfo>
          <S.LinkImage>
            {data.thumbnailUrl.slice(-7) !== 'pdf.svg' ? (
              <img referrerPolicy="no-referrer" src={data.thumbnailUrl} alt="" />
            ) : (
              <img referrerPolicy="no-referrer" src="/svgs/default.svg" alt="" />
            )}
          </S.LinkImage>
          <S.LinkTexts>
            <S.LinkTitle>{data.summary}</S.LinkTitle>
            {expiresDate === 'expiration' ? (
              <span>만료됨</span>
            ) : (
              <S.UrlLink
                onClick={(e) => clipboardCopy(e)}
              >{`https://file-anywhere.herokuapp.com/${data.key}`}</S.UrlLink>
            )}
          </S.LinkTexts>
        </S.LinkInfo>
        <span />
      </S.TableCell>
      <S.TableCell>
        <span>파일개수</span>
        <span>{data.count.toLocaleString()}개</span>
      </S.TableCell>
      <S.TableCell>
        <span>파일사이즈</span>
        <span>{fileSize}</span>
      </S.TableCell>
      <S.TableCell>
        <span>유효기간</span>
        <span>{expiresDate === 'expiration' ? '만료됨' : expiresDate}</span>
      </S.TableCell>
      <S.TableCell>
        <span>받은사람</span>
        <S.LinkReceivers>
          {data.sent ? data.sent.emails?.map((email) => <Avatar key={email} text={email} />) : null}
        </S.LinkReceivers>
      </S.TableCell>
    </S.TableRow>
  );
};

export default LinkBodyRow;
