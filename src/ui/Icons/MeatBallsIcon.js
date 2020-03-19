import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const MeatBallsIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.088 13.15a2.088 2.088 0 100-4.178 2.088 2.088 0 000 4.177zm6.912 0a2.088 2.088 0 100-4.178 2.088 2.088 0 000 4.177zm9-2.09a2.088 2.088 0 11-4.177 0 2.088 2.088 0 014.177 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  </LibIcon>
);

export { MeatBallsIcon };
export default MeatBallsIcon;