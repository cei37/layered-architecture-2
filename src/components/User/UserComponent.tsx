// src/components/User/UserComponent.tsx
import React, { useState, useEffect } from 'react';
import { useUser, useCreateUser, useUpdateUser } from '../../hooks/useUser';
import { UserEntity } from '../../models/UserEntity';
import { CircularProgress, TextField, Button } from '@mui/material';

interface UserComponentProps {
  userId?: number; // Optional prop for updating a user
}

const UserComponent: React.FC<UserComponentProps> = ({ userId }) => {
  const { data: user, error, isLoading } = useUser(userId as number);
  const [formState, setFormState] = useState<UserEntity | Partial<UserEntity>>({
    id: userId || undefined,
    fullName: '',
    email: '',
    age: 0,
    isAdult: false,
  });
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  useEffect(() => {
    if (user) {
      setFormState({
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        age: user.age,
        isAdult: user.isAdult,
      });
    }
  }, [user]);

  const handleSave = () => {
    if (formState.fullName && formState.email && formState.age !== undefined) {
      const userToSave: UserEntity = {
        id: formState.id || 0, // 0 or null indicates a new user to the backend
        fullName: formState.fullName,
        email: formState.email,
        age: formState.age,
        isAdult: formState.age >= 18,
      };

      if (userId) {
        // Update existing user
        updateUserMutation.mutate(userToSave);
      } else {
        // Create new user
        createUserMutation.mutate(userToSave);
      }
    }
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{userId ? 'Update User' : 'Create User'}</h2>
      <TextField
        label="Full Name"
        value={formState.fullName || ''}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, fullName: e.target.value }))
        }
      />
      <TextField
        label="Email"
        value={formState.email || ''}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <TextField
        label="Age"
        type="number"
        value={formState.age || 0}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, age: parseInt(e.target.value, 10) }))
        }
      />
      <Button onClick={handleSave} disabled={createUserMutation.isLoading || updateUserMutation.isLoading}>
        {userId ? 'Update' : 'Create'}
      </Button>
    </div>
  );
};

export default UserComponent;
