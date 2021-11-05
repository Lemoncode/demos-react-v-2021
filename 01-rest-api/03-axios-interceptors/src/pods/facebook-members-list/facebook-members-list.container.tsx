import React from 'react';
import { getMembers } from './api/api';
import { Member } from './api/api.model';

export const FacebookMembersListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers().then(setMembers);
  }, []);

  return (
    <>
      <h3>Facebook Members</h3>
      <ul>
        {members.map((m) => (
          <li key={m.id}>{m.login}</li>
        ))}
      </ul>
    </>
  );
};
