import React from 'react';
import { FacebookMembersListContainer } from '../pods/facebook-members-list/facebook-members-list.container';
import { LemoncodeMembersListContainer } from '../pods/lemoncode-members-list/lemoncode-members-list.container';

export const MasterScene: React.FC = () => {
  return (
    <>
      <h1>Members</h1>
      <LemoncodeMembersListContainer />
      <FacebookMembersListContainer />
    </>
  );
};
