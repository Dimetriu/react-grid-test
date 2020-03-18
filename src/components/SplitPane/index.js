import React from 'react';
import { SplitPane as StyledSplitPane } from './SplitPane.styles';

export default function SplitPane({
  leftPanel = null,
  rightPanel = null,
}) {
  return (
    <StyledSplitPane>
      <div className="leftPanel">{leftPanel}</div>
      <div className="rightPanel">{rightPanel}</div>
    </StyledSplitPane>
  );
}
