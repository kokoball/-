import React, { useEffect, useState } from 'react';
import Container from 'components/base/Container';
import LinkPage from 'pages/LinkPage';
import DetailPage from 'pages/DetailPage';
import GlobalStyle from 'styles/GlobalStyle';
import axios from 'axios';
import { API_ENDPOINT } from 'constants/';
import { IFilesTypes } from 'types';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path={'/'} element={<LinkPage filesData={filesData} />} />
          <Route path={'/:id'} element={<DetailPage filesData={filesData} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
