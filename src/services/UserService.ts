// src/services/UserService.ts
import { BaseService } from './BaseService';
import { UserDTO } from '../models/UserDTO';
import { UserEntity } from '../models/UserEntity';
import { mapUserDTOToEntity, mapUserEntityToDTO } from '../mappers/mappers';

export class UserService extends BaseService {
  async getUser(userId: number): Promise<UserEntity> {
    const userDTO = await this.get<UserDTO>(`/users/${userId}`);
    return mapUserDTOToEntity(userDTO);
  }

  async getUsersList(): Promise<UserEntity[]> {
    const usersDTO = await this.get<UserDTO[]>('/users');
    return usersDTO.map(mapUserDTOToEntity);
  }

  async createUser(user: UserDTO): Promise<UserEntity> {
    const createdUserDTO = await this.post<UserDTO, UserDTO>('/users', user);
    return mapUserDTOToEntity(createdUserDTO);
  }

  async updateUser(userId: number, user: UserDTO): Promise<UserEntity> {
    const updatedUserDTO = await this.put<UserDTO, UserDTO>(`/users/${userId}`, user);
    return mapUserDTOToEntity(updatedUserDTO);
  }

  async deleteUser(userId: number): Promise<void> {
    await this.delete<void>(`/users/${userId}`);
  }


  // Additional operation: Activate a user with a JSON payload
  async activateUser(userId: number, payload: { activationCode: string }): Promise<UserEntity> {
    const activatedUserDTO = await this.post<UserDTO, { activationCode: string }>(`/users/${userId}/activate`, payload);
    return mapUserDTOToEntity(activatedUserDTO);
  }

  // // Additional operation: Reset a user's password
  // async resetPassword(userId: number): Promise<void> {
  //   await this.post<void, void>(`/users/${userId}/reset-password`, {});
  // }

  // Additional operation: Search users by criteria
  async searchUsers(criteria: string): Promise<UserEntity[]> {
    const usersDTO = await this.get<UserDTO[]>(`/users/search`, { criteria });
    return usersDTO.map(mapUserDTOToEntity);
  }

}
