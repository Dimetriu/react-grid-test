import React from 'react';
import { AppFooter as StyledAppFooter } from './AppFooter.styles';

import { COLORS } from '../../styles/global';
import SplitPane from '../SplitPane';
import {
  AddIcon,
  SearchIcon,
  DashboardIcon,
  NotificationsIcon
} from '../../ui/Icons';

export default function AppFooter() {
  const gutter = '36px';
  const count = 1;

  const anyNotifications = Boolean(count);

  const leftPanel = (
    <>
      <SearchIcon
        color={COLORS.textDarken}
        marginRight={gutter}
      />
      <DashboardIcon
        color={COLORS.textDarken}
        marginRight={gutter}
      />
      <span className="icon-group">
        <NotificationsIcon
          color={anyNotifications ? COLORS.primary : COLORS.textDarken}
        />
        <span
          color={anyNotifications ? COLORS.primary : COLORS.textDarken}
        >
          {count}
        </span>
      </span>
    </>
  );
  const rightPanel = (
    <span className="actions__add">
      <AddIcon color="#fff" />
    </span>
  );

  return (
    <StyledAppFooter>
      <SplitPane
        leftPanel={leftPanel}
        rightPanel={rightPanel}
      />
    </StyledAppFooter>
  );
}
