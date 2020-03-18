import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const PersonAddIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M7 7.434A3.536 3.536 0 107 .363a3.536 3.536 0 000 7.071zM.636 15.283v-1.06c0-2.734 2.849-4.95 6.364-4.95 3.515 0 6.364 2.216 6.364 4.95v1.06a.364.364 0 01-.375.353H1.01a.364.364 0 01-.374-.353z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        d="M15.409 4.182a.5.5 0 011 0v7.636a.5.5 0 11-1 0V4.182z"
      ></path>
      <path
        fill={color}
        d="M12.09 8.5a.5.5 0 010-1h7.637a.5.5 0 010 1h-7.636z"
      ></path>
    </svg>
  </LibIcon>
);

export { PersonAddIcon };
export default PersonAddIcon;