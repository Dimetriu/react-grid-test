import React  from 'react';

import StackGrid from 'react-stack-grid';
import { withSize } from 'react-sizeme';

import GalleryItem from '../GalleryItem';

const Gallery = ({ dataSet, size: { width } }) => {
  const getColumnWidth = React.useCallback(() => {
    if (width >= 1280) {
      return '20%';
    } else if (width > 1024) {
      return '25%';
    } else if (width > 768) {
      return '33.33%';
    } else if (width > 480) {
      return '50%';
    }

    return '100%';
  }, [width]);

  return (
    <StackGrid
      monitorImagesLoaded
      gutterWidth={16}
      gutterHeight={16}
      columnWidth={getColumnWidth()}
    >
      {dataSet.map(item => (
        <GalleryItem key={item.id} {...item} />
      ))}
    </StackGrid>
  );
}

export default withSize()(Gallery);
