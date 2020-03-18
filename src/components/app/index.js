import React from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { API_ENDPOINT } from '../../constants/api';

import AppHeader from '../AppHeader';
import Content from '../Content';
import AppFooter from '../AppFooter';

export default function App() {
  const { data, errorMessage } = useFetchData({
    defaultEndpoint: API_ENDPOINT
  });

  const avatarData = data && data
    .slice(0, 3)
    .map(({ id, ownerImage, ownerName }) => ({ id, ownerImage, ownerName }));

  return (
    <>
      <AppHeader avatarData={avatarData} />
      <Content data={data} errorMessage={errorMessage} />
      <AppFooter />
    </>
  );
}
