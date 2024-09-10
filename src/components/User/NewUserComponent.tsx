// src/components/User/NewUserComponent.tsx
import React, { useState } from 'react';
import { useCreateUser } from '../../hooks/useUser';
import { UserEntity } from '../../models/UserEntity';
import { TextField, Button } from '@mui/material';

const NewUserComponent: React.FC = () => {
  const [formState, setFormState] = useState<Partial<UserEntity>>({
    fullName: '',
    email: '',
    age: 0,
  });
  const createUserMutation = useCreateUser();

  const handleCreate = () => {
    if (formState.fullName && formState.email && formState.age) {
      const newUser: UserEntity = {
        id: 0, // ID will be set by the backend
        fullName: formState.fullName,
        email: formState.email,
        age: formState.age,
        isAdult: formState.age >= 18,
      };
      createUserMutation.mutate(newUser);
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <TextField
        label="Full Name"
        value={formState.fullName || ''}
        onChange={(e) => setFormState((prev) => ({ ...prev, fullName: e.target.value }))}
      />
      <TextField
        label="Email"
        value={formState.email || ''}
        onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
      />
      <TextField
        label="Age"
        type="number"
        value={formState.age || 0}
        onChange={(e) => setFormState((prev) => ({ ...prev, age: parseInt(e.target.value, 10) }))}
      />
      <Button onClick={handleCreate} disabled={createUserMutation.isLoading}>
        Create
      </Button>
    </div>
  );
};

export default NewUserComponent;
