import React from 'react';
import {
  LoaderContainer,
  Loader as StyledLoader,
  LoaderContent
} from './Loader.styles';

export default function Loader() {
  return (
    <LoaderContainer>
      <StyledLoader>
        <LoaderContent />
      </StyledLoader>
    </LoaderContainer>
  );
};
