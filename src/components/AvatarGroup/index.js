import React from 'react';

import { Icon } from '../../ui/Icons/Icons.styles';

export default function AvatarGroup({ avatarData }) {
  if (!avatarData) return <></>;

  return avatarData.map(({ id, ownerImage, ownerName }) => (
    <Icon key={id} marginRight=".5rem">
      <img
        src={ownerImage}
        alt={ownerName}
      />
    </Icon>
  ))
}
