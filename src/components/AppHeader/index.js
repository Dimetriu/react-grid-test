import React from 'react';
import { AppHeader as StyledAppHeader } from './AppHeader.styles';
import { COLORS } from '../../styles/global';

import LazyLoad from '../../containers/LazyLoad';
import SplitPane from '../SplitPane';
import {
  ChevronLeftIcon,
  FilterListIcon,
  MeatBallsIcon,
  UploadIcon,
  PersonAddIcon,
} from '../../ui/Icons';

export default function AppHeader({ avatarData }) {
  const gutter = '36px';

  const leftPanel = <ChevronLeftIcon color={COLORS.primary} />
  const rightPanel = (
    <>
      <FilterListIcon
        color={COLORS.textDarken}
        marginRight={gutter}
      />
      <LazyLoad placeholder={<p>Loading...</p>}>
        <AvatarGroup avatarData={avatarData} />
      </LazyLoad>
      <PersonAddIcon
        color={COLORS.textDarken}
        marginRight={gutter}
      />
      <UploadIcon
        color={COLORS.textDarken}
        marginRight={gutter}
      />
      <MeatBallsIcon
        color={COLORS.textDarken}
      />
    </>
  );

  return (
    <StyledAppHeader>
      <SplitPane
        leftPanel={leftPanel}
        rightPanel={rightPanel}
      />
    </StyledAppHeader>
  );
}

const AvatarGroup = React.lazy(() => import('../AvatarGroup'));
