import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const AddIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 5v14m-7-7h14"></path>
    </svg>
  </LibIcon>
);

export { AddIcon };
export default AddIcon;