// src/components/User/UserListComponent.tsx
import React from 'react';
import { useUsersList, useDeleteUser } from '../../hooks/useUser';
import { CircularProgress, Button } from '@mui/material';

const UserListComponent: React.FC = () => {
  const { data: users, error, isLoading } = useUsersList();
  const deleteUserMutation = useDeleteUser();

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.fullName} ({user.email})
            <Button onClick={() => deleteUserMutation.mutate(user.id)} disabled={deleteUserMutation.isLoading}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListComponent;
