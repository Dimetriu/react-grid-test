import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const DashboardIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" fill="none">
      <rect width="6.125" height="4" y="13" fill={color} rx="0.5"></rect>
      <rect
        width="6.125"
        height="4"
        x="7.875"
        y="4"
        fill={color}
        rx="0.5"
      ></rect>
      <rect width="6.125" height="7" y="4" fill={color} rx="0.5"></rect>
      <rect
        width="6.125"
        height="7"
        x="7.875"
        y="10"
        fill={color}
        rx="0.5"
      ></rect>
    </svg>
  </LibIcon>
);

export { DashboardIcon };
export default DashboardIcon;