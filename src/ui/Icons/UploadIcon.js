import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const UploadIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M7.11 3.855L5.65 5.317A.89.89 0 014.391 4.06l2.98-2.98a.874.874 0 01.135-.11.072.072 0 01.019-.011.875.875 0 01.134-.071c.01-.005.02-.007.03-.01a.367.367 0 00.04-.013c.031-.01.062-.021.095-.028a.876.876 0 01.352 0A.742.742 0 018.29.87a.357.357 0 00.021.007c.01.003.021.005.031.01a.858.858 0 01.133.07l.02.012a.94.94 0 01.135.11l2.98 2.98a.889.889 0 11-1.259 1.258L8.89 3.855v10.252a.89.89 0 01-1.78 0V3.855zm3.976 3.163h2.771c.981 0 1.78.798 1.78 1.78v9.962c0 .98-.799 1.779-1.78 1.779H2.143c-.981 0-1.78-.798-1.78-1.78V8.798c0-.981.799-1.78 1.78-1.78h2.771a.89.89 0 010 1.78h-2.77v9.963h11.713V8.797h-2.77a.89.89 0 010-1.78z"
        clipRule="evenodd"
      ></path>
    </svg>
  </LibIcon>
);

export { UploadIcon };
export default UploadIcon;