import React from 'react';
import Avatar from 'components/base/Avatar';
import { IFilesTypes } from 'types';
import * as S from './Style';

interface Props {
  data: IFilesTypes;
}

const LinkBodyRow = ({ data }: Props) => {
  return (
    <>
      <S.TableRow>
        <S.TableCell>
          <S.LinkInfo>
            <S.LinkImage>
              <img referrerPolicy="no-referrer" src={data.thumbnailUrl} alt="" />
            </S.LinkImage>
            <S.LinkTexts>
              <S.LinkTitle>{data.summary}</S.LinkTitle>
              <S.LinkUrl>localhost/7LF4MDLY</S.LinkUrl>
            </S.LinkTexts>
          </S.LinkInfo>
          <span />
        </S.TableCell>
        <S.TableCell>
          <span>파일개수</span>
          <span>{data.count}</span>
        </S.TableCell>
        <S.TableCell>
          <span>파일사이즈</span>
          <span>{data.size}KB</span>
        </S.TableCell>
        <S.TableCell>
          <span>유효기간</span>
          <span>48시간 00분</span>
        </S.TableCell>
        <S.TableCell>
          <span>받은사람</span>
          <S.LinkReceivers>
            <Avatar text="recruit@estmob.com" />
          </S.LinkReceivers>
        </S.TableCell>
      </S.TableRow>
    </>
  );
};

export default LinkBodyRow;
