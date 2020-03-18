import React from 'react';
import { Icon as LibIcon } from './Icons.styles';

const ChatIcon = ({ color, ...restProps }) => (
  <LibIcon { ...restProps } >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill={color}
      stroke={color}
    >
      <path d="M10 1H2c-.55 0-1 .45-1 1v9l2-2h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 0"></path>
    </svg>
  </LibIcon>
);

export { ChatIcon };
export default ChatIcon;