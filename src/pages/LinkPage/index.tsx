import React from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import LinkTable from 'components/domain/LinkTable';
import { IFilesTypes } from 'types';

interface LinkPageProps {
  filesData: IFilesTypes[] | null;
}

const LinkPage: FC<LinkPageProps> = ({ filesData }) => {
  return (
    <>
      <Title>마이 링크</Title>
      <LinkTable filesData={filesData} />
    </>
  );
};

export default LinkPage;

const Title = styled.h2`
  color: ${colors.grey700};
  letter-spacing: -0.62px;
  word-break: keep-all;
  margin: 0;
`;
