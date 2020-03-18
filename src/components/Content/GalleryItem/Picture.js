import React from 'react';

const Picture = ({ src, alt, ...restProps }) => <img src={src} alt={alt} {...restProps} />;
export default Picture;