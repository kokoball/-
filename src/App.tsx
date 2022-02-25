import React, { useEffect, useState } from 'react';
import Container from 'components/base/Container';
import LinkPage from 'pages/LinkPage';
import DetailPage from 'pages/DetailPage';
import GlobalStyle from 'styles/GlobalStyle';
import axios from 'axios';
import { API_ENDPOINT } from 'constants/';
import { IFilesTypes } from 'types';

function App() {
  const [filesData, setFilesData] = useState<IFilesTypes[] | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(API_ENDPOINT);
      setFilesData(data);
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkPage filesData={filesData} />
        {/* <DetailPage /> */}
      </Container>
    </>
  );
}

export default App;
