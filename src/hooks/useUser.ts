// src/hooks/useUser.ts
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { UserService } from '../services/UserService';
import { UserEntity } from '../models/UserEntity';
import { AxiosHttpClient } from '../api/AxiosHttpClient';
import { mapUserEntityToDTO } from '../mappers/mappers';

const userService = new UserService();

export const useUser = (userId: number) => {
  return useQuery<UserEntity, Error>(['user', userId], () => userService.getUser(userId));
};

export const useUsersList = () => {
  return useQuery<UserEntity[], Error>(['users'], () => userService.getUsersList());
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((newUser: UserEntity) => {
    const dto = mapUserEntityToDTO(newUser);
    return userService.createUser(dto);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']); // Refetch the list
    }
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation((updatedUser: UserEntity) => {
    const dto = mapUserEntityToDTO(updatedUser);
    return userService.updateUser(updatedUser.id, dto);
  }, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['user', data.id]);
      queryClient.invalidateQueries(['users']);
    }
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation((userId: number) => userService.deleteUser(userId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']); // Refetch the list
    }
  });
};
