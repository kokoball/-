import React from 'react';
import type { FC } from 'react';
import DetailTable from 'components/domain/DetailTable';
import { IFilesTypes } from 'types';

interface DetailPageProps {
  filesData: IFilesTypes[] | null;
}

const DetailPage: FC<DetailPageProps> = ({ filesData }) => {
  return <DetailTable filesData={filesData} />;
};

export default DetailPage;
