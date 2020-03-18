import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const ChevronLeftIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M9.5 1.5L1.5 9l8 7.5"
      ></path>
    </svg>
  </LibIcon>
);

export { ChevronLeftIcon };
export default ChevronLeftIcon;