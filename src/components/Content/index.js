import React from 'react';
import { Content as StyledContent } from './Content.styles';

import ContentHeading from './ContentHeading';
import Gallery from './Gallery';

export default function Content({ data, errorMessage }) {
  return (
    <StyledContent>
      <ContentHeading />
      {errorMessage && <p>errorMessage</p>}
      {data && (
        <Gallery dataSet={data} />
      )}
    </StyledContent>
  );
}
